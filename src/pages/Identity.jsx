import { useState } from 'react';

const Identity = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;
        
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
            
            if (response.ok) {
                setIsSuccess(true);
                setEmail('');
            } else {
                console.error('Waitlist submission failed');
            }
        } catch (error) {
            console.error('Network error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '4rem 0' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔒</div>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>NIN Verification Portal</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                We are currently undergoing integration and regulatory compliance with NIMC to provide you with secure National Identity Number (NIN) services.
            </p>
            
            <div style={{ background: 'var(--bg-card)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-subtle)' }}>
                {isSuccess ? (
                    <div className="animate-fade-in">
                        <div style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem' }}>📩</div>
                        <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>You're on the list!</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>We'll notify you the moment our FEP integration goes live.</p>
                        <button className="btn btn-outline" style={{ marginTop: '1.5rem' }} onClick={() => setIsSuccess(false)}>Join with another email</button>
                    </div>
                ) : (
                    <div className="animate-fade-in">
                        <h3 style={{ marginBottom: '1rem' }}>Join the Waitlist</h3>
                        <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Get notified the moment our direct FEP integration goes live.</p>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
                            <input 
                                type="email" 
                                placeholder="Enter your email address" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{ flex: 1, padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', outline: 'none' }}
                            />
                            <button 
                                type="submit" 
                                className="btn btn-primary" 
                                style={{ border: 'none', opacity: isSubmitting ? 0.7 : 1 }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Notify Me'}
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Identity;
