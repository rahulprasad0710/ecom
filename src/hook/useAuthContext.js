import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const useAuthContext = () => {
    const { userInfo, handleLogoutFn } = useContext(AuthContext);

    return {
        userInfo,
        handleLogoutFn,
    };
};

export default useAuthContext;
