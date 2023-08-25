import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className='container'>
                <Link to='/auth/admin-login'>Admin Login</Link>
            </div>
        </div>
    );
};

export default Footer;
