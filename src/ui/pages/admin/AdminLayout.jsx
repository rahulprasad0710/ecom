import { Outlet } from "react-router-dom";
import Sidebar from "../../layout/Sidebar";
const AdminLayout = () => {
    return (
        <div className='d-flex'>
            <div className='shadow shadow-sm h-100'>
                <Sidebar />
            </div>
            <Outlet />
        </div>
    );
};

export default AdminLayout;
