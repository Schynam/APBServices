import { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';

const Admin = () => {
    const [data, setData] = useState({ waitlist: [], contactMessages: [] });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/api/admin-data')
            .then(res => res.json())
            .then(fetchedData => {
                if (fetchedData.waitlist) {
                    setData(fetchedData);
                }
            })
            .catch(err => console.error(err))
            .finally(() => setIsLoading(false));
    }, []);

    const contactColumns = [
        { header: 'ID', accessor: 'id' },
        { header: 'Name', accessor: 'name' },
        { header: 'Email', accessor: 'email', render: (email) => <a href={`mailto:${email}`} style={{ color: 'var(--primary)' }}>{email}</a> },
        { header: 'Message', accessor: 'message' },
        { header: 'Date', accessor: 'created_at', render: (date) => new Date(date).toLocaleDateString() }
    ];

    const waitlistColumns = [
        { header: 'ID', accessor: 'id' },
        { header: 'Email', accessor: 'email' },
        { header: 'Signed Up On', accessor: 'created_at', render: (date) => new Date(date).toLocaleString() }
    ];

    return (
        <div className="animate-fade-in">
            <div className="mb-8" style={{ background: 'var(--primary-dark)', padding: '2rem', borderRadius: 'var(--radius-lg)', color: 'white' }}>
                <h1 style={{ color: 'white', marginBottom: '0.5rem' }}>Admin Dashboard</h1>
                <p style={{ opacity: 0.9 }}>Secure portal for managing incoming citizens and inquiries.</p>
            </div>

            <div style={{ marginBottom: '4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h3>Inbox: Contact Messages</h3>
                    <div style={{ background: 'var(--primary-light)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--primary-dark)' }}>
                        {data.contactMessages.length} Messages
                    </div>
                </div>
                {isLoading ? (
                    <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>Fetching secure data from Neon...</div>
                ) : data.contactMessages.length > 0 ? (
                    <DataTable columns={contactColumns} data={data.contactMessages} />
                ) : (
                    <div style={{ padding: '2rem', textAlign: 'center', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                        No messages found.
                    </div>
                )}
            </div>

            <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h3>Waitlist Signups</h3>
                    <div style={{ background: 'var(--primary-light)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--primary-dark)' }}>
                        {data.waitlist.length} Signups
                    </div>
                </div>
                {isLoading ? (
                    <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>Fetching secure data from Neon...</div>
                ) : data.waitlist.length > 0 ? (
                    <DataTable columns={waitlistColumns} data={data.waitlist} />
                ) : (
                    <div style={{ padding: '2rem', textAlign: 'center', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                        No waitlist signups yet.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admin;
