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
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        // Insert email into waitlist table, ON CONFLICT DO NOTHING so duplicate emails don't crash
        await sql`
            INSERT INTO waitlist (email) 
            VALUES (${email})
            ON CONFLICT (email) DO NOTHING
        `;

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Waitlist API Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
