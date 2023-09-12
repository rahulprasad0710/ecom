import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "../../layout/Sidebar";
import useAuthContext from "../../../hook/useAuthContext";

const AdminLayout = () => {
    const { userInfo } = useAuthContext();
    console.log("userInfo Asdas", userInfo);

    return (
        <>
            {userInfo?.isAdmin ? (
                <div className='d-flex w-100'>
                    <div className='shadow shadow-sm h-100'>
                        <Sidebar />
                    </div>
                    <div className='w-100 p-3'>
                        <Outlet />
                    </div>
                </div>
            ) : (
                <Navigate to={"/"} />
            )}
        </>
    );
};

export default AdminLayout;
