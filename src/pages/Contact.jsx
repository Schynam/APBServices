import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                setIsSuccess(true);
                setFormData({ name: '', email: '', message: '' });
            } else {
                console.error('Contact submission failed');
            }
        } catch (error) {
            console.error('Network error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="mb-8">
                <h1 style={{ color: 'var(--primary)' }}>Contact Us</h1>
                <p>Have questions about your citizen services? Our support team is here to help.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
                    {isSuccess ? (
                        <div className="animate-fade-in" style={{ textAlign: 'center', padding: '2rem 0' }}>
                            <div style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem' }}>📬</div>
                            <h3 style={{ marginBottom: '0.5rem' }}>Message Sent!</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>We've received your inquiry and will get back to you shortly.</p>
                            <button className="btn btn-outline" style={{ marginTop: '1.5rem' }} onClick={() => setIsSuccess(false)}>Send Another Message</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>Full Name</label>
                                <input 
                                    type="text" 
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', outline: 'none' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>Email Address</label>
                                <input 
                                    type="email" 
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', outline: 'none' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>Message</label>
                                <textarea 
                                    required
                                    rows="5"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', outline: 'none', resize: 'vertical' }}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.7 : 1 }}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ background: 'var(--secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                        <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📧</div>
                        <h4 style={{ marginBottom: '0.25rem' }}>Email Support</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>For general inquiries and assistance.</p>
                        <a href="mailto:help@apbservices.org" style={{ fontWeight: '600', color: 'var(--primary)' }}>help@apbservices.org</a>
                    </div>
                    <div style={{ background: 'var(--secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                        <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🏢</div>
                        <h4 style={{ marginBottom: '0.25rem' }}>Headquarters</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            APB Services<br/>
                            Dallas-Fort Worth (DFW),<br/>
                            Texas, USA
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
