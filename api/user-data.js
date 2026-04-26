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
        const { clerkId, type } = req.query;

        if (!clerkId || !type) {
            return res.status(400).json({ error: 'clerkId and type are required' });
        }

        if (type === 'taxes') {
            let taxes = await sql`SELECT * FROM user_taxes WHERE clerk_user_id = ${clerkId} ORDER BY created_at DESC`;
            
            // Auto-seed if empty (for demo purposes)
            if (taxes.length === 0) {
                await sql`
                    INSERT INTO user_taxes (clerk_user_id, ref_id, tax_year, tax_type, amount, status, due_date)
                    VALUES 
                    (${clerkId}, 'TX-8921', '2025', 'Personal Income Tax', '₦450,000', 'Paid', '2025-04-12'),
                    (${clerkId}, 'TX-1109', '2026', 'Property Tax', '₦125,000', 'Pending', 'Due 2026-06-01')
                `;
                taxes = await sql`SELECT * FROM user_taxes WHERE clerk_user_id = ${clerkId} ORDER BY created_at DESC`;
            }
            return res.status(200).json(taxes);
        }

        if (type === 'vehicles') {
            let vehicles = await sql`SELECT * FROM user_vehicles WHERE clerk_user_id = ${clerkId} ORDER BY created_at DESC`;
            
            // Auto-seed if empty
            if (vehicles.length === 0) {
                await sql`
                    INSERT INTO user_vehicles (clerk_user_id, plate_number, make_model, year, status, expiration)
                    VALUES 
                    (${clerkId}, 'ABC-123-XY', 'Toyota Camry', '2019', 'Active', '2027-01-15'),
                    (${clerkId}, 'LND-994-AZ', 'Honda CR-V', '2015', 'Expired', '2025-11-20')
                `;
                vehicles = await sql`SELECT * FROM user_vehicles WHERE clerk_user_id = ${clerkId} ORDER BY created_at DESC`;
            }
            return res.status(200).json(vehicles);
        }

        return res.status(400).json({ error: 'Invalid type requested' });
    } catch (error) {
        console.error('User Data API Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
