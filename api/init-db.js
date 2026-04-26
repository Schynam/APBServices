import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const connectionString = process.env.store_POSTGRES_URL || process.env.store_DATABASE_URL || process.env.DATABASE_URL || process.env.POSTGRES_URL;
        if (!connectionString) {
            const dbKeys = Object.keys(process.env).filter(k => k.includes('DATABASE') || k.includes('POSTGRES') || k.includes('NEON') || k.includes('URL'));
            throw new Error(`Missing Database URL variable. Available DB-related keys in Vercel: ${dbKeys.join(', ') || 'None found!'}`);
        }
        const sql = neon(connectionString);
        
        // Create waitlist table
        await sql`
            CREATE TABLE IF NOT EXISTS waitlist (
                id SERIAL PRIMARY KEY,
                email VARCHAR(255) UNIQUE NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `;

        // Create contact messages table
        await sql`
            CREATE TABLE IF NOT EXISTS contact_messages (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                message TEXT NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `;

        // Create user_taxes table
        await sql`
            CREATE TABLE IF NOT EXISTS user_taxes (
                id SERIAL PRIMARY KEY,
                clerk_user_id VARCHAR(255) NOT NULL,
                ref_id VARCHAR(50) NOT NULL,
                tax_year VARCHAR(4) NOT NULL,
                tax_type VARCHAR(100) NOT NULL,
                amount VARCHAR(50) NOT NULL,
                status VARCHAR(50) NOT NULL,
                due_date VARCHAR(50) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `;

        // Create user_vehicles table
        await sql`
            CREATE TABLE IF NOT EXISTS user_vehicles (
                id SERIAL PRIMARY KEY,
                clerk_user_id VARCHAR(255) NOT NULL,
                plate_number VARCHAR(50) NOT NULL,
                make_model VARCHAR(100) NOT NULL,
                year VARCHAR(4) NOT NULL,
                status VARCHAR(50) NOT NULL,
                expiration VARCHAR(50) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `;

        return res.status(200).json({ success: true, message: 'Database tables initialized successfully!' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
