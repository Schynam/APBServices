import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const connectionString = process.env.POSTGRES_URL || process.env.DATABASE_URL;
        if (!connectionString) {
            throw new Error("Missing POSTGRES_URL or DATABASE_URL environment variable.");
        }
        const sql = neon(connectionString);
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        await sql`
            INSERT INTO contact_messages (name, email, message) 
            VALUES (${name}, ${email}, ${message})
        `;

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Contact API Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
