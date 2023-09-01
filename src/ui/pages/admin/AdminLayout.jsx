import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "../../layout/Sidebar";
import useAuthContext from "../../../hook/useAuthContext";

const AdminLayout = () => {
    const { userInfo } = useAuthContext();

    return (
        <>
            {userInfo?.id && userInfo?.isAdmin ? (
                <div className='d-flex'>
                    <div className='shadow shadow-sm h-100'>
                        <Sidebar />
                    </div>
                    <Outlet />
                </div>
            ) : (
                <Navigate to={"/"} />
            )}
        </>
    );
};

export default AdminLayout;
