import StatusBadge from '../components/StatusBadge';
import DataTable from '../components/DataTable';

const Business = () => {
    const filingsHistory = [
        { year: '2025', date: '2026-01-15', status: 'Filed', ref: 'CAC-AR-2025-991' },
        { year: '2024', date: '2025-02-10', status: 'Filed', ref: 'CAC-AR-2024-342' },
    ];

    const columns = [
        { header: 'Filing Year', accessor: 'year' },
        { header: 'Date Filed', accessor: 'date' },
        { header: 'Reference', accessor: 'ref', render: (ref) => <span style={{ fontFamily: 'monospace' }}>{ref}</span> },
        { header: 'Status', accessor: 'status', render: (status) => <StatusBadge status={status === 'Filed' ? 'Compliant' : status} /> },
    ];

    return (
        <div className="animate-fade-in">
            <div className="mb-8" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ color: 'var(--primary)' }}>Business Registration (CAC)</h1>
                    <p>Manage your corporate entities, file annual returns, and request documents.</p>
                </div>
                <button className="btn btn-primary">+ Register New Entity</button>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>APB Services Tech Ltd.</div>
                            <StatusBadge status="Active" />
                        </div>
                        <div style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>RC Number: 1892044</div>
                    </div>
                    <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>Manage Entity</button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                    <div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Company Type</div>
                        <div style={{ fontWeight: '600' }}>Private Limited Company (LTD)</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Date of Incorporation</div>
                        <div style={{ fontWeight: '600' }}>14 August 2021</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Next Annual Return Due</div>
                        <div style={{ fontWeight: '600', color: '#D97706' }}>30 June 2026</div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3>Annual Returns History</h3>
                <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>File Annual Return</button>
            </div>
            <DataTable columns={columns} data={filingsHistory} />
        </div>
    );
};

export default Business;
