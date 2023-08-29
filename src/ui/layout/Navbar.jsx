import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { BrightnessAltHigh, MoonFill } from "react-bootstrap-icons";

const Navbar = () => {
    const { isDarkMode, handleDarkMode } = useContext(ThemeContext);

    const handleToggleDarkMode = () => {
        handleDarkMode();
    };

    return (
        <nav
            className='navbar navbar-expand-lg bg-primary'
            data-bs-theme='dark'>
            <div className='container'>
                <NavLink className='navbar-brand' to='/'>
                    Home
                </NavLink>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarColor01'
                    aria-controls='navbarColor01'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarColor01'>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'>
                            <div onClick={handleToggleDarkMode}>
                                {isDarkMode ? (
                                    <MoonFill color='#ffffff' size={25} />
                                ) : (
                                    <BrightnessAltHigh
                                        color='#ffffff'
                                        size={25}
                                    />
                                )}
                            </div>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/auth/login'>
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
