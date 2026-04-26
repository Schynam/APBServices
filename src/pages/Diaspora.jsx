import StatusBadge from '../components/StatusBadge';

const Diaspora = () => {
    return (
        <div className="animate-fade-in">
            <div className="mb-8">
                <h1 style={{ color: 'var(--primary)' }}>Diaspora & Consular Services (NiDCOM)</h1>
                <p>Register as a Nigerian in diaspora, locate embassies, and access consular assistance.</p>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Diaspora Registry Status</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>Not Registered</div>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', fontSize: '0.95rem' }}>
                            Registering with the Nigerians in Diaspora Commission (NiDCOM) allows you to access specialized consular services, vote in potential diaspora elections, and participate in national development initiatives.
                        </p>
                    </div>
                    <StatusBadge status="Action Required" />
                </div>
                <div className="mt-4">
                    <button className="btn btn-primary">Start Registration</button>
                </div>
            </div>

            <h3 style={{ marginBottom: '1rem' }}>Consular Resources</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                
                <div style={{ background: 'var(--secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏛️</div>
                    <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Embassy Locator</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', flex: 1 }}>
                        Find the nearest Nigerian Diplomatic Mission, High Commission, or Consulate in your country of residence.
                    </p>
                    <button className="btn btn-outline" style={{ width: '100%' }}>Find Nearest Mission</button>
                </div>

                <div style={{ background: 'var(--secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🆘</div>
                    <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Emergency Assistance</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', flex: 1 }}>
                        Request urgent consular assistance for lost passports, legal trouble, or medical emergencies abroad.
                    </p>
                    <button className="btn btn-outline" style={{ width: '100%', borderColor: '#DC2626', color: '#DC2626' }}>Request Help</button>
                </div>

            </div>
        </div>
    );
};

export default Diaspora;
