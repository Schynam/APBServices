const Help = () => {
    return (
        <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 0' }}>
            <div className="mb-8">
                <h1 style={{ color: 'var(--primary)' }}>Help Center & Documentation</h1>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>Find answers to common questions and guides on using the platform.</p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                <input 
                    type="text" 
                    placeholder="Search for answers..." 
                    style={{ flex: 1, padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', fontSize: '1rem', outline: 'none' }}
                />
                <button className="btn btn-primary" style={{ padding: '0 2rem' }}>Search</button>
            </div>

            <h3 style={{ marginBottom: '1.5rem' }}>Frequently Asked Questions</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                    <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-main)' }}>How do I link my NIN to the platform?</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                        We are currently finalizing our FEP integration with NIMC. Once live, you will simply enter your 11-digit NIN and verify via OTP sent to your registered phone number. In the meantime, please join the waitlist on the Identity page!
                    </p>
                </div>

                <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                    <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-main)' }}>Are payments made here officially recognized?</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                        Yes. All financial transactions on APB Services are processed directly through Remita, the official payment gateway for the Treasury Single Account (TSA) of the Nigerian Government. You will instantly receive an official receipt.
                    </p>
                </div>

                <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                    <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-main)' }}>Can I renew my passport if I live abroad?</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                        Absolutely. The Diaspora & Consular module allows you to initiate passport renewals and automatically forwards your details to the nearest designated Nigerian Diplomatic Mission for biometric capture.
                    </p>
                </div>
            </div>
            
            <div style={{ marginTop: '3rem', textAlign: 'center', padding: '2rem', background: '#F8FAFC', borderRadius: 'var(--radius-lg)' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Still need help?</h4>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Our support team is available 24/7 to assist you.</p>
                <a href="/contact" className="btn btn-outline" style={{ display: 'inline-block', textDecoration: 'none' }}>Contact Support</a>
            </div>
        </div>
    );
};

export default Help;
