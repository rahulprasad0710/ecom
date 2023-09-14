import { useMemo } from "react";
import useAuthContext from "../../hook/useAuthContext";
import { useNavigate } from "react-router-dom";
import BackButton from "../molecules/BackButton";

const PermissionButton = (props) => {
    // eslint-disable-next-line react/prop-types
    const { toTitle, toPath, requiredPermission } = props;
    const navigate = useNavigate();
    // eslint-disable-next-line react/prop-types

    const { userInfo } = useAuthContext();

    const hasPermission = useMemo(() => {
        return userInfo?.permission?.includes(requiredPermission);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [requiredPermission]);

    return (
        <>
            {hasPermission ? (
                <>
                    {
                        <button
                            className='btn btn-sm btn-success'
                            onClick={() => navigate(toPath)}>
                            {toTitle}
                        </button>
                    }
                </>
            ) : (
                <BackButton />
            )}
        </>
    );
};

export default PermissionButton;
