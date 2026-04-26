import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';

const Taxes = () => {
    const taxHistory = [
        { id: 'TX-8921', year: '2025', type: 'Personal Income Tax', amount: '₦450,000', status: 'Paid', date: '2025-04-12' },
        { id: 'TX-7432', year: '2024', type: 'Personal Income Tax', amount: '₦420,000', status: 'Paid', date: '2024-03-28' },
        { id: 'TX-1109', year: '2026', type: 'Property Tax', amount: '₦125,000', status: 'Pending', date: 'Due 2026-06-01' },
    ];

    const columns = [
        { header: 'Reference ID', accessor: 'id' },
        { header: 'Tax Year', accessor: 'year' },
        { header: 'Tax Type', accessor: 'type' },
        { header: 'Amount', accessor: 'amount' },
        { header: 'Date', accessor: 'date' },
        { header: 'Status', accessor: 'status', render: (status) => <StatusBadge status={status} /> },
    ];

    return (
        <div className="animate-fade-in">
            <div className="mb-8" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ color: 'var(--primary)' }}>Taxes & Revenue (FIRS)</h1>
                    <p>Manage your tax filings, view history, and make payments securely.</p>
                </div>
                <button className="btn btn-primary">File New Return</button>
            </div>

            <div className="services-grid" style={{ marginBottom: '3rem' }}>
                <div className="service-card" style={{ padding: '1.5rem' }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Tax Identification Number (TIN)</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', letterSpacing: '2px', marginBottom: '1rem' }}>2448-9901-3324</div>
                    <StatusBadge status="Active" />
                </div>
                
                <div className="service-card" style={{ padding: '1.5rem' }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Current Compliance Status</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#DC2626' }}>1 Pending Payment</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <StatusBadge status="Action Required" />
                        <button className="btn btn-primary" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>Pay via Remita</button>
                    </div>
                </div>
            </div>

            <h3 style={{ marginBottom: '1rem' }}>Payment History</h3>
            <DataTable columns={columns} data={taxHistory} />
        </div>
    );
};

export default Taxes;
