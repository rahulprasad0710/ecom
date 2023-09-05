import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../../../hook/useAuthContext";

const AuthLayout = () => {
    const { userInfo } = useAuthContext();
    console.log("userInfo auth", userInfo);
    return <>{userInfo?.id ? <Navigate to={"/"} /> : <Outlet />}</>;
};

export default AuthLayout;
