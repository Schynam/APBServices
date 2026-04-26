import ServiceCard from '../components/ServiceCard';

const Dashboard = () => {
    return (
        <>
            <div className="mb-8">
                <h1>Welcome, Peter</h1>
                <p>Access your federal services and applications.</p>
            </div>

            <div className="services-grid">
                <ServiceCard 
                    icon="🆔" 
                    title="Identity Verification" 
                    description="Manage and verify your National Identity Number efficiently." 
                    badgeText="Verified" 
                    badgeType="success" 
                />
                
                <ServiceCard 
                    icon="🏛️" 
                    title="Tax & Revenue" 
                    description="Access tax portals, view statements, and complete filings." 
                    linkTo="/taxes" 
                    linkText="Pay Taxes" 
                    badgeType="success" 
                />

                <ServiceCard 
                    icon="🚗" 
                    title="Transport Services" 
                    description="Apply for or renew your driver's license and vehicle registration." 
                    linkTo="/transport" 
                    linkText="Renew License" 
                />

                <ServiceCard 
                    icon="🎓" 
                    title="Education & Admissions" 
                    description="Access educational admissions, register for exams, and check results." 
                    linkTo="/education" 
                    linkText="View Portal" 
                />

                <ServiceCard 
                    icon="✈️" 
                    title="Passport Services" 
                    description="Apply for new travel documents or renew your existing passport." 
                    badgeText="Action Required" 
                    badgeType="warning" 
                />

                <ServiceCard 
                    icon="💼" 
                    title="Business Registration" 
                    description="Register your company and manage corporate affairs seamlessly." 
                    linkTo="/business" 
                    linkText="Register" 
                />

                <ServiceCard 
                    icon="🌍" 
                    title="Diaspora & Consular" 
                    description="Access consular services and diaspora initiatives abroad." 
                    linkTo="/diaspora" 
                    linkText="View Services" 
                />
            </div>
        </>
    );
};

export default Dashboard;
