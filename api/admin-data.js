import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const connectionString = process.env.store_POSTGRES_URL || process.env.store_DATABASE_URL || process.env.DATABASE_URL || process.env.POSTGRES_URL;
        if (!connectionString) {
            throw new Error("Missing Database URL environment variable.");
        }
        
        const sql = neon(connectionString);

        // Fetch both tables in parallel
        const waitlistPromise = sql`SELECT id, email, created_at FROM waitlist ORDER BY created_at DESC`;
        const contactPromise = sql`SELECT id, name, email, message, created_at FROM contact_messages ORDER BY created_at DESC`;

        const [waitlist, contactMessages] = await Promise.all([waitlistPromise, contactPromise]);

        return res.status(200).json({
            waitlist,
            contactMessages
        });
    } catch (error) {
        console.error('Admin API Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
