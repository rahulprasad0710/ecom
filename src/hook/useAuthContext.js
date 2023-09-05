import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const useAuthContext = () => {
    const { userInfo, handleLogoutFn, handleLoginFn } = useContext(AuthContext);

    return {
        userInfo,
        handleLogoutFn,
        handleLoginFn,
    };
};

export default useAuthContext;
