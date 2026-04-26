import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-logo">
                    <img src="/logo.png" alt="APB Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '10px' }} />
                </div>
                <h3>Citizen Hub</h3>
            </div>
            <nav className="sidebar-nav">
                <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} end>
                    <span>Dashboard</span>
                </NavLink>
                <NavLink to="/identity" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <span>Identity (NIN)</span>
                </NavLink>
                <NavLink to="/taxes" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <span>Taxes & Revenue (FIRS)</span>
                </NavLink>
                <NavLink to="/transport" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <span>Transport (FRSC)</span>
                </NavLink>
                <NavLink to="/education" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <span>Education (JAMB)</span>
                </NavLink>
                <NavLink to="/business" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <span>Business Reg</span>
                </NavLink>
                <NavLink to="/passport" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <span>Passport Services</span>
                </NavLink>
                <NavLink to="/diaspora" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <span>Diaspora & Consular</span>
                </NavLink>
                <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
                    <NavLink to="/about" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                        <span>About APBServices</span>
                    </NavLink>
                    <NavLink to="/help" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                        <span>Help Center & Docs</span>
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                        <span>Contact Us</span>
                    </NavLink>
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;
