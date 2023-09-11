import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            <div className='d-flex flex-column flex-shrink-0 p-3 bg-light me-2'>
                <a
                    href='/'
                    className='d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none'>
                    <span className='fs-4'>Sidebar</span>
                </a>
                <hr />
                <ul className='nav nav-pills flex-column mb-auto'>
                    <li>
                        <a href='#' className='nav-link link-dark'>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <NavLink
                            to='/admin/orders/list'
                            className='nav-link link-dark'>
                            Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/admin/employees/list'
                            className='nav-link link-dark'>
                            Employees
                        </NavLink>
                    </li>

                    <li>
                        <a href='#' className='nav-link link-dark'>
                            Products
                        </a>
                    </li>
                    <li>
                        <NavLink
                            to='/admin/categories/list'
                            className='nav-link link-dark'>
                            Categories
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/admin/customers/list'
                            className='nav-link link-dark'>
                            Customers
                        </NavLink>
                    </li>
                </ul>
                <hr />
                <div className='dropdown'>
                    <a
                        href='#'
                        className='d-flex align-items-center link-dark text-decoration-none dropdown-toggle'
                        id='dropdownUser2'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'>
                        <img
                            src='https://github.com/mdo.png'
                            alt=''
                            width='32'
                            height='32'
                            className='rounded-circle me-2'
                        />
                        <strong>mdo</strong>
                    </a>
                    <ul
                        className='dropdown-menu text-small shadow'
                        aria-labelledby='dropdownUser2'>
                        <li>
                            <a className='dropdown-item' href='#'>
                                New project...
                            </a>
                        </li>
                        <li>
                            <a className='dropdown-item' href='#'>
                                Settings
                            </a>
                        </li>
                        <li>
                            <a className='dropdown-item' href='#'>
                                Profile
                            </a>
                        </li>
                        <li>
                            <hr className='dropdown-divider' />
                        </li>
                        <li>
                            <a className='dropdown-item' href='#'>
                                Sign out
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
