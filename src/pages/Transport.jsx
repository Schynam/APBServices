import { useState } from 'react';
import PaymentModal from '../components/PaymentModal';
import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';

const Transport = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hasPaid, setHasPaid] = useState(false);

    const vehicleHistory = [
        { plate: 'ABC-123-XY', make: 'Toyota Camry', year: '2019', status: 'Active', exp: '2027-01-15' },
        { plate: 'LND-994-AZ', make: 'Honda CR-V', year: '2015', status: 'Expired', exp: '2025-11-20' },
    ];

    const columns = [
        { header: 'Plate Number', accessor: 'plate', render: (plate) => <span style={{ fontWeight: '600', letterSpacing: '1px' }}>{plate}</span> },
        { header: 'Make & Model', accessor: 'make' },
        { header: 'Year', accessor: 'year' },
        { header: 'Expiration', accessor: 'exp' },
        { header: 'Status', accessor: 'status', render: (status) => <StatusBadge status={status} /> },
        { header: 'Action', accessor: 'action', render: () => <button className="btn btn-outline" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}>Manage</button> }
    ];

    const handlePaymentClose = (success) => {
        setIsModalOpen(false);
        if (success) setHasPaid(true);
    };

    return (
        <div className="animate-fade-in">
            <div className="mb-8" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ color: 'var(--primary)' }}>Transport Services (FRSC)</h1>
                    <p>Manage your driver's license, vehicle registrations, and traffic fines.</p>
                </div>
            </div>

            <div className="services-grid" style={{ marginBottom: '3rem' }}>
                <div className="service-card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--primary)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Driver's License Number</div>
                        <StatusBadge status="Valid" />
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', letterSpacing: '1px', marginBottom: '0.5rem' }}>DL-NGA-88214</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Class: B, C | Exp: 12 Oct 2028</div>
                    <div className="mt-4">
                        <button className="btn btn-outline" style={{ width: '100%' }}>Request Renewal</button>
                    </div>
                </div>
                
                {!hasPaid ? (
                    <div className="service-card" style={{ padding: '1.5rem', background: '#FEF2F2', borderColor: '#FECACA' }}>
                        <div style={{ color: '#991B1B', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: '600' }}>Outstanding Fines</div>
                        <div style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#DC2626' }}>₦15,000</div>
                        <div style={{ fontSize: '0.9rem', color: '#991B1B', marginBottom: '1rem' }}>1 Ticket (Speeding - 3rd Mainland Bridge)</div>
                        <button className="btn btn-primary" style={{ width: '100%', background: '#DC2626' }} onClick={() => setIsModalOpen(true)}>Pay Fine via Remita</button>
                    </div>
                ) : (
                    <div className="service-card" style={{ padding: '1.5rem', background: 'var(--secondary)', borderColor: 'var(--primary-light)' }}>
                        <div style={{ color: 'var(--primary)', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: '600' }}>Outstanding Fines</div>
                        <div style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--primary)' }}>₦0</div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>All clear! You have no outstanding tickets.</div>
                        <StatusBadge status="Compliant" />
                    </div>
                )}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3>Registered Vehicles</h3>
                <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>+ Register New</button>
            </div>
            <DataTable columns={columns} data={vehicleHistory} />

            <PaymentModal 
                isOpen={isModalOpen} 
                onClose={handlePaymentClose} 
                amount="₦15,000" 
                description="Traffic Fine (Ref: SPEED-3MB)" 
            />
        </div>
    );
};

export default Transport;
