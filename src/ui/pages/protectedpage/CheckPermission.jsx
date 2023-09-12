import { useMemo } from "react";
import useAuthContext from "../../../hook/useAuthContext";
import { Navigate } from "react-router-dom";

const CheckPermission = (props) => {
    // eslint-disable-next-line react/prop-types
    const { requiredPermission, children } = props;

    const { userInfo } = useAuthContext();

    const hasPermission = useMemo(() => {
        return userInfo?.permission?.includes(requiredPermission);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [requiredPermission]);

    return (
        <>
            {hasPermission ? (
                <>{children}</>
            ) : (
                <Navigate to={"/page-not-found"} />
            )}
        </>
    );
};

export default CheckPermission;
