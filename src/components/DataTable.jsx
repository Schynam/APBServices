const DataTable = ({ columns, data }) => {
    return (
        <div style={{ overflowX: 'auto', background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead style={{ background: 'var(--secondary)', borderBottom: '1px solid var(--border)' }}>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index} style={{ padding: '1rem', fontWeight: '600', color: 'var(--text-muted)' }}>
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} style={{ borderBottom: '1px solid var(--border)' }}>
                            {columns.map((col, colIndex) => (
                                <td key={colIndex} style={{ padding: '1rem', color: 'var(--text-main)' }}>
                                    {col.render ? col.render(row[col.accessor], row) : row[col.accessor]}
                                </td>
                            ))}
                        </tr>
                    ))}
                    {data.length === 0 && (
                        <tr>
                            <td colSpan={columns.length} style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                                No records found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
