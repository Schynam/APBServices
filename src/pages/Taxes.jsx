import { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import PaymentModal from '../components/PaymentModal';
import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';

const Taxes = () => {
    const { user } = useUser();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hasPaid, setHasPaid] = useState(false);
    const [actionMessage, setActionMessage] = useState('');
    const [taxHistory, setTaxHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user) {
            fetch(`/api/user-data?type=taxes&clerkId=${user.id}`)
                .then(res => res.json())
                .then(data => {
                    if (Array.isArray(data)) {
                        setTaxHistory(data);
                        const pending = data.find(t => t.status === 'Pending');
                        if (!pending) setHasPaid(true);
                    }
                })
                .catch(err => console.error(err))
                .finally(() => setIsLoading(false));
        }
    }, [user]);

    const columns = [
        { header: 'Reference ID', accessor: 'ref_id' },
        { header: 'Tax Year', accessor: 'tax_year' },
        { header: 'Tax Type', accessor: 'tax_type' },
        { header: 'Amount', accessor: 'amount' },
        { header: 'Date', accessor: 'due_date' },
        { header: 'Status', accessor: 'status', render: (status) => <StatusBadge status={status} /> },
    ];

    const handlePaymentClose = (success) => {
        setIsModalOpen(false);
        if (success) setHasPaid(true);
    };

    const handleAction = (message) => {
        setActionMessage(message);
        setTimeout(() => setActionMessage(''), 3000);
    };

    return (
        <div className="animate-fade-in">
            <div className="mb-8" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                    <h1 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Taxes & Revenue (FIRS)</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Manage your tax filings, view history, and make payments securely.</p>
                </div>
                <button className="btn btn-primary" onClick={() => handleAction('Opening FIRS Tax Filing Portal...')}>File New Return</button>
            </div>

            {actionMessage && (
                <div className="animate-fade-in" style={{ marginBottom: '2rem', padding: '0.75rem 1rem', background: 'rgba(21, 128, 61, 0.1)', color: 'var(--primary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--primary)', fontSize: '0.9rem' }}>
                    {actionMessage}
                </div>
            )}

            <div className="services-grid" style={{ marginBottom: '3rem' }}>
                <div className="service-card" style={{ padding: '1.5rem' }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Tax Identification Number (TIN)</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', letterSpacing: '2px', marginBottom: '1rem' }}>2448-9901-3324</div>
                    <StatusBadge status="Active" />
                </div>
                
                <div className="service-card" style={{ padding: '1.5rem' }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Current Compliance Status</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: hasPaid ? 'var(--primary)' : '#DC2626' }}>
                        {hasPaid ? 'All Compliant' : '1 Pending Payment'}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <StatusBadge status={hasPaid ? 'Compliant' : 'Action Required'} />
                        {!hasPaid && (
                            <button className="btn btn-primary" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }} onClick={() => setIsModalOpen(true)}>
                                Pay via Remita
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <h3 style={{ marginBottom: '1rem' }}>Payment History</h3>
            <DataTable columns={columns} data={taxHistory} />

            <PaymentModal 
                isOpen={isModalOpen} 
                onClose={handlePaymentClose} 
                amount="₦125,000" 
                description="Property Tax - 2026 (Ref: TX-1109)" 
            />
        </div>
    );
};

export default Taxes;
