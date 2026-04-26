import StatusBadge from '../components/StatusBadge';

const Education = () => {
    return (
        <div className="animate-fade-in">
            <div className="mb-8">
                <h1 style={{ color: 'var(--primary)' }}>Education & Admissions (JAMB)</h1>
                <p>Access your UTME profile, check exam results, and process admissions.</p>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
                    <div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>JAMB Registration Number</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: '700', letterSpacing: '1px', marginTop: '0.25rem' }}>2026194829AZ</div>
                        <div style={{ fontSize: '1rem', fontWeight: '500', marginTop: '0.5rem' }}>Candidate: BALOGUN, Peter O.</div>
                    </div>
                    <StatusBadge status="Verified" />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                    <div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Exam Year</div>
                        <div style={{ fontWeight: '600' }}>2026</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Center Name</div>
                        <div style={{ fontWeight: '600' }}>CBT Center, Yaba College of Technology</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>First Choice Institution</div>
                        <div style={{ fontWeight: '600' }}>University of Lagos (UNILAG)</div>
                    </div>
                </div>
            </div>

            <h3 style={{ marginBottom: '1rem' }}>UTME Results Breakdown</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ background: 'var(--secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Use of English</div>
                    <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--primary)' }}>78</div>
                </div>
                <div style={{ background: 'var(--secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Mathematics</div>
                    <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--primary)' }}>85</div>
                </div>
                <div style={{ background: 'var(--secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Physics</div>
                    <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--primary)' }}>72</div>
                </div>
                <div style={{ background: 'var(--secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Chemistry</div>
                    <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--primary)' }}>69</div>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#F8FAFC', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px dashed var(--border)' }}>
                <div style={{ fontSize: '2rem' }}>📄</div>
                <div style={{ flex: 1 }}>
                    <h4 style={{ margin: 0, marginBottom: '0.25rem' }}>Original Result Slip</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>Print your official result slip for admission processing.</p>
                </div>
                <button className="btn btn-primary">Print Slip</button>
            </div>
        </div>
    );
};

export default Education;
