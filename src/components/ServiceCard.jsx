import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, linkTo, linkText, badgeText, badgeType = 'outline' }) => {
    return (
        <div className="service-card">
            <div className="service-icon">{icon}</div>
            <h3 className="service-title">{title}</h3>
            <p className="service-desc">{description}</p>
            <div className="mt-4">
                {linkTo && (
                    <Link to={linkTo} className={`btn btn-${badgeType === 'success' ? 'primary' : 'outline'}`}>
                        {linkText}
                    </Link>
                )}
                {!linkTo && badgeText && (
                    <span className={`badge badge-${badgeType}`}>
                        {badgeText}
                    </span>
                )}
            </div>
        </div>
    );
};

export default ServiceCard;
