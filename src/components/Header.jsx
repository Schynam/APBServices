import { UserButton } from '@clerk/clerk-react';

const Header = () => {
    return (
        <header className="header">
            <div className="header-search">
                {/* Placeholder for search */}
            </div>
            <div className="user-profile" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="text-dark" style={{ fontWeight: '500' }}>My Account</span>
                <UserButton afterSignOutUrl="/" />
            </div>
        </header>
    );
};

export default Header;
