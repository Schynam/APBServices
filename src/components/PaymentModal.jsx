import { useState } from 'react';

const PaymentModal = ({ isOpen, onClose, amount, description }) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    if (!isOpen) return null;

    const handlePayment = () => {
        setIsProcessing(true);
        // Simulate network request
        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);
            // Auto close after success
            setTimeout(() => {
                setIsSuccess(false);
                onClose(true); // pass true to indicate success
            }, 2000);
        }, 1500);
    };

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(4px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
        }}>
            <div className="animate-fade-in" style={{
                background: 'var(--bg-panel)', width: '100%', maxWidth: '400px',
                borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-hover)'
            }}>
                {isSuccess ? (
                    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                        <div style={{ fontSize: '4rem', color: 'var(--primary)', marginBottom: '1rem' }}>✅</div>
                        <h2 style={{ marginBottom: '0.5rem', color: 'var(--text-main)' }}>Payment Successful!</h2>
                        <p style={{ color: 'var(--text-muted)' }}>Your transaction via Remita was completed.</p>
                    </div>
                ) : (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h3 style={{ margin: 0 }}>Secure Payment</h3>
                            <button onClick={() => onClose(false)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--text-muted)' }}>×</button>
                        </div>
                        
                        <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px solid var(--border)', textAlign: 'center' }}>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Amount to Pay</div>
                            <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary)' }}>{amount}</div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>{description}</div>
                        </div>

                        <button 
                            className="btn btn-primary" 
                            style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem', opacity: isProcessing ? 0.7 : 1 }}
                            onClick={handlePayment}
                            disabled={isProcessing}
                        >
                            {isProcessing ? 'Processing...' : 'Pay via Remita'}
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default PaymentModal;
