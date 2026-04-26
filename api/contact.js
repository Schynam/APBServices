import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const connectionString = process.env.store_POSTGRES_URL || process.env.store_DATABASE_URL || process.env.DATABASE_URL || process.env.POSTGRES_URL;
        if (!connectionString) {
            throw new Error("Missing Database URL environment variable.");
        }
        const sql = neon(connectionString);
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // 1. Save to Database
        await sql`
            INSERT INTO contact_messages (name, email, message) 
            VALUES (${name}, ${email}, ${message})
        `;

        // 2. Send Live Email Notification
        if (process.env.RESEND_API_KEY) {
            const resend = new Resend(process.env.RESEND_API_KEY);
            await resend.emails.send({
                from: 'APB Services <onboarding@resend.dev>',
                to: 'help@apbservices.org',
                reply_to: email,
                subject: `New Support Request from ${name}`,
                html: `
                    <h2>New Message via APB Citizen Hub</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <hr />
                    <p><strong>Message:</strong></p>
                    <blockquote style="border-left: 4px solid #15803d; padding-left: 1rem; margin-left: 0; white-space: pre-wrap;">
                        ${message}
                    </blockquote>
                `
            });
        } else {
            console.warn("RESEND_API_KEY is missing. Database updated, but email was not sent.");
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Contact API Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
