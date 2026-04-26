const StatusBadge = ({ status }) => {
    let type = 'outline';
    
    switch (status.toLowerCase()) {
        case 'compliant':
        case 'paid':
        case 'active':
        case 'verified':
            type = 'success';
            break;
        case 'pending':
        case 'processing':
        case 'action required':
            type = 'warning';
            break;
        case 'expired':
        case 'overdue':
        case 'failed':
            type = 'error'; // We'll add this to CSS
            break;
        default:
            type = 'outline';
    }

    // Adding error badge style inline just in case it's not in CSS
    const errorStyle = type === 'error' ? { background: '#FEF2F2', color: '#DC2626', border: '1px solid #FECACA' } : {};

    return (
        <span className={`badge badge-${type}`} style={errorStyle}>
            {status}
        </span>
    );
};

export default StatusBadge;
