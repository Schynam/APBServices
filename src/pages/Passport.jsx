import StatusBadge from '../components/StatusBadge';

const Passport = () => {
    return (
        <div className="animate-fade-in">
            <div className="mb-8" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ color: 'var(--primary)' }}>Passport Services (NIS)</h1>
                    <p>Apply for a new passport, renew existing ones, and track applications.</p>
                </div>
                <button className="btn btn-primary">Start New Application</button>
            </div>

            <div className="services-grid" style={{ marginBottom: '3rem' }}>
                <div className="service-card" style={{ padding: '1.5rem', borderLeft: '4px solid #D97706' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Standard Nigerian Passport</div>
                        <StatusBadge status="Expired" />
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', letterSpacing: '2px', marginBottom: '0.5rem' }}>A10492883</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Type: 32-Page | Issued: 10 May 2016</div>
                    <div className="mt-4">
                        <button className="btn btn-primary" style={{ width: '100%' }}>Initiate Renewal</button>
                    </div>
                </div>
                
                <div className="service-card" style={{ padding: '1.5rem', background: '#F8FAFC' }}>
                    <div style={{ color: 'var(--text-main)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: '600' }}>Active Application Tracker</div>
                    
                    {/* Mock Progress Tracker */}
                    <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid var(--border)', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '-1.85rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                            <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>Application Submitted</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Paid via Remita - 01 May 2026</div>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '-1.85rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', background: '#D97706', border: '2px solid white', boxShadow: '0 0 0 1px #D97706' }}></div>
                            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#D97706' }}>Biometric Capture</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Action Required</div>
                        </div>
                        <div style={{ position: 'relative', opacity: 0.5 }}>
                            <div style={{ position: 'absolute', left: '-1.85rem', top: '0.2rem', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--border)' }}></div>
                            <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>Production</div>
                        </div>
                    </div>

                    <button className="btn btn-outline" style={{ width: '100%', marginTop: 'auto' }}>Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Passport;
