const Identity = () => {
    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '4rem 0' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔒</div>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>NIN Verification Portal</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                We are currently undergoing integration and regulatory compliance with NIMC to provide you with secure National Identity Number (NIN) services.
            </p>
            
            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-subtle)' }}>
                <h3 style={{ marginBottom: '1rem' }}>Join the Waitlist</h3>
                <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Get notified the moment our direct FEP integration goes live.</p>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        style={{ flex: 1, padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', outline: 'none' }}
                    />
                    <button className="btn btn-primary" style={{ border: 'none' }}>Notify Me</button>
                </div>
            </div>
        </div>
    );
};

export default Identity;
