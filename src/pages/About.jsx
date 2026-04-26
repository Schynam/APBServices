const About = () => {
    return (
        <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 0' }}>
            <div className="mb-8">
                <h1 style={{ color: 'var(--primary)' }}>About APB Services</h1>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>Empowering Nigerian Citizens through unified digital access.</p>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>Our Mission</h3>
                <p style={{ lineHeight: '1.7', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
                    APB Services was founded with a singular vision: to eliminate the friction between citizens and essential government services. We believe that accessing your National Identity Number (NIN), filing taxes, renewing passports, and registering businesses should be as seamless as sending a text message.
                </p>
                <p style={{ lineHeight: '1.7', color: 'var(--text-main)' }}>
                    By integrating directly with national databases and utilizing modern payment gateways like Remita, we provide a unified, secure, and intuitive Citizen Hub for Nigerians both at home and in the diaspora.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div style={{ background: 'var(--secondary)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔒</div>
                    <h4 style={{ marginBottom: '0.5rem' }}>Secure Integration</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Bank-grade encryption protecting your personal and financial data.</p>
                </div>
                <div style={{ background: 'var(--secondary)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
                    <h4 style={{ marginBottom: '0.5rem' }}>Lightning Fast</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>No more waiting in lines. Instant verification and processing.</p>
                </div>
                <div style={{ background: 'var(--secondary)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌍</div>
                    <h4 style={{ marginBottom: '0.5rem' }}>Global Access</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Designed for Nigerians everywhere, fully supporting diaspora needs.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
