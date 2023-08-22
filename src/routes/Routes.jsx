import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import AuthLayout from "../ui/pages/auth/AuthLayout";
import UserSignup from "../ui/pages/auth/UserSignup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "auth",
                element: <AuthLayout />,
                children: [
                    {
                        path: "signup",
                        element: <UserSignup />,
                    },
                ],
            },
        ],
    },
]);

export default router;
