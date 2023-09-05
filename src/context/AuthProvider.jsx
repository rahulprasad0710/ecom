import { useState, useEffect } from "react";
import axios from "axios";
import API_ROUTES from "../api/apiRoutes";
import { AuthContext } from "./AuthContext";
import Loader from "../ui/molecules/Loader";

const AuthProvider = (props) => {
    // eslint-disable-next-line react/prop-types
    const { children } = props;
    const intialState = {
        id: "",
        name: "",
        email: "",
        accessToken: undefined,
        isAdmin: false,
        permission: [],
    };

    const [userInfo, setuserInfo] = useState(intialState);
    const tokenFromLocalStore = localStorage.getItem("token");
    const [token, setToken] = useState(tokenFromLocalStore ?? null);
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const handleAuthenticateFn = async () => {
        setIsAuthenticating(true);
        try {
            const response = await axios.get(API_ROUTES.AUTH_ME, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response, "response fron context");

            if (response?.data?.success) {
                const userFromBackend = response?.data?.data;
                setuserInfo(userFromBackend);
                setToken(userFromBackend?.accessToken);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsAuthenticating(false);
        }
    };

    const handleLoginFn = async (payload) => {
        setuserInfo(payload);
    };

    const handleLogoutFn = () => {
        localStorage.removeItem("token");
        setuserInfo(intialState);
    };
    useEffect(() => {
        if (token) {
            handleAuthenticateFn();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <AuthContext.Provider
            value={{ userInfo, handleLogoutFn, handleLoginFn }}>
            {isAuthenticating ? <Loader /> : children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
