import { NavLink } from "react-router-dom";
import { BrightnessAltHigh, Heart, MoonFill } from "react-bootstrap-icons";
import useThemeContext from "../../hook/useThemeContext";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Navbar = () => {
    const { userInfo, handleLogoutFn } = useContext(AuthContext);
    // console.log(userInfo, "userInfo from navbar");
    const { handleDarkMode, isDarkMode } = useThemeContext();
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
                        {userInfo?.id && userInfo?.isAdmin && (
                            <>
                                <li className='nav-item'>
                                    <NavLink
                                        className='nav-link'
                                        to='/admin/dashboard'>
                                        Dashboard
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <button
                                        onClick={() => handleLogoutFn()}
                                        className='nav-link'
                                        to='/auth/login'>
                                        Logout
                                    </button>
                                </li>
                            </>
                        )}

                        {userInfo?.id && !userInfo?.isAdmin && (
                            <>
                                <li className='nav-item'>
                                    <NavLink
                                        className='nav-link'
                                        to='/my-account/profile'>
                                        My account
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink
                                        className='nav-link'
                                        to='/my-account/wishlist'>
                                        <Heart />
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <button
                                        onClick={() => handleLogoutFn()}
                                        className='nav-link'
                                        to='/auth/login'>
                                        Logout
                                    </button>
                                </li>
                            </>
                        )}

                        {!userInfo.accessToken && (
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/auth/login'>
                                    Login
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
