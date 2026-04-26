import { SignInButton, SignUpButton, useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const { isSignedIn } = useUser();
    const navigate = useNavigate();

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'linear-gradient(to bottom right, #f8fafc, #e0f2fe)' }}>
            
            {/* Navigation Bar */}
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 5%', background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img src="/logo.png" alt="APB Logo" style={{ height: '40px', borderRadius: '8px' }} />
                    <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary-dark)', letterSpacing: '-0.5px' }}>APB Citizen Hub</span>
                </div>
                <div>
                    {isSignedIn ? (
                        <button className="btn btn-primary" onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
                    ) : (
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <SignInButton mode="modal">
                                <button className="btn" style={{ background: 'transparent', color: 'var(--primary)', border: 'none', fontWeight: '600' }}>Log In</button>
                            </SignInButton>
                            <SignUpButton mode="modal">
                                <button className="btn btn-primary">Create Account</button>
                            </SignUpButton>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '4rem 2rem' }}>
                <div className="animate-fade-in" style={{ maxWidth: '800px' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--primary-dark)', lineHeight: '1.1', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
                        The Digital Future of <span style={{ color: 'var(--primary)' }}>Nigerian Citizen Services.</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: '1.6' }}>
                        One secure, centralized platform for all your government needs. Manage your National Identity Number (NIN), file taxes, and renew vehicle registrations from anywhere in the world.
                    </p>
                    
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {isSignedIn ? (
                            <button className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }} onClick={() => navigate('/dashboard')}>
                                Access Your Dashboard →
                            </button>
                        ) : (
                            <>
                                <SignUpButton mode="modal">
                                    <button className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                                        Get Started for Free
                                    </button>
                                </SignUpButton>
                                <button className="btn" style={{ padding: '1rem 2rem', fontSize: '1.1rem', background: 'white', color: 'var(--text)', border: '1px solid var(--border)' }} onClick={() => navigate('/about')}>
                                    Learn More
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {/* Feature Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '5rem', maxWidth: '1200px', width: '100%' }}>
                    
                    <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', textAlign: 'left', transition: 'transform 0.2s ease', cursor: 'default' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🆔</div>
                        <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary-dark)' }}>Identity Verification</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>Seamless NIMC integration. Verify and manage your NIN status without visiting physical offices.</p>
                    </div>

                    <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', textAlign: 'left', transition: 'transform 0.2s ease', cursor: 'default' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏛️</div>
                        <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary-dark)' }}>Tax Compliance</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>Direct access to FIRS. View your tax history, submit filings, and pay outstanding balances securely.</p>
                    </div>

                    <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', textAlign: 'left', transition: 'transform 0.2s ease', cursor: 'default' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚗</div>
                        <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary-dark)' }}>Transport Services</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>Renew your driver's license, register new vehicles, and settle FRSC traffic fines instantly.</p>
                    </div>

                </div>
            </main>

            {/* Footer */}
            <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.05)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                &copy; {new Date().getFullYear()} APB Services. All rights reserved. Securely powered by Vercel & Neon Postgres.
            </footer>
        </div>
    );
};

export default Landing;
