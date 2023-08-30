import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import AuthLayout from "../ui/pages/auth/AuthLayout";
import UserSignup from "../ui/pages/auth/UserSignup";
import UserLogin from "../ui/pages/auth/UserLogin";
import AdminLogin from "../ui/pages/auth/AdminLogin";
import PageNotFound from "../ui/pages/utils/PageNotFound";
import AdminLayout from "../ui/pages/admin/AdminLayout";
import AdminDashboard from "../ui/pages/admin/AdminDashboard";
import HomePage from "../ui/pages/HomePage";
import ProductPage from "../ui/pages/ProductList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "products",
                element: <ProductPage />,
            },
            {
                path: "auth",
                element: <AuthLayout />,
                children: [
                    {
                        path: "login",
                        element: <UserLogin />,
                    },
                    {
                        path: "admin-login",
                        element: <AdminLogin />,
                    },
                    {
                        path: "signup",
                        element: <UserSignup />,
                    },
                ],
            },
            {
                path: "admin",
                element: <AdminLayout />,
                children: [
                    {
                        path: "dashboard",
                        element: <AdminDashboard />,
                    },
                    {
                        path: "employee",
                        element: <h3>Employee List</h3>,
                    },
                ],
            },
        ],
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
]);

export default router;
