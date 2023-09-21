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
// import ProductPage from "../ui/pages/ProductList";
import EmployeesLayout from "../ui/pages/admin/employees/EmployeesLayout";
import EmployeesList from "../ui/pages/admin/employees/EmployeesList";
import AddEmployees from "../ui/pages/admin/employees/AddEmployees";
import CheckPermission from "../ui/pages/protectedpage/CheckPermission";

// user Routes
import UserLayout from "../ui/pages/admin/users/UserLayout";
import UserList from "../ui/pages/admin/users/UserList";
// category ROutes
import CategoryLayout from "../ui/pages/admin/categories/CategoryLayout";
import CategoryList from "../ui/pages/admin/categories/CategoryList";
import AddCategory from "../ui/pages/admin/categories/AddCategory";

// products Routes
import ProductLayout from "../ui/pages/admin/products/ProductLayout";
import ProductList from "../ui/pages/admin/products/ProductList";
import AddProduct from "../ui/pages/admin/products/AddProduct";

// public product Routes

import PublicProductLayout from "../ui/pages/products/ProductLayout";
import MainProduct from "../ui/pages/products/MainProduct";
import SingleProductPage from "../ui/pages/products/SingleProductPage";

import ViewProduct from "../ui/pages/admin/products/ViewProduct";

import CustomerLayout from "../ui/pages/customers/CustomerLayout";
import CustomerDashboard from "../ui/pages/customers/CustomerDashboard";
import CustomerWishlist from "../ui/pages/customers/CustomerWishlIst";

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
                element: <PublicProductLayout />,
                children: [
                    {
                        path: "",
                        element: <MainProduct />,
                    },
                    {
                        path: ":productSlug",
                        element: <SingleProductPage />,
                    },
                ],
            },

            {
                path: "my-account",
                element: <CustomerLayout />,
                children: [
                    {
                        path: "",
                        element: <CustomerDashboard />,
                    },
                    {
                        path: "wishlist",
                        element: <CustomerWishlist />,
                    },
                ],
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
                        path: "employees",
                        element: <EmployeesLayout />,
                        children: [
                            {
                                path: "list",

                                element: (
                                    <CheckPermission requiredPermission='ADMIN_VIEW'>
                                        <EmployeesList />
                                    </CheckPermission>
                                ),
                            },
                            {
                                path: "add",
                                element: (
                                    <CheckPermission requiredPermission='ADMIN_ADD'>
                                        <AddEmployees />
                                    </CheckPermission>
                                ),
                            },
                        ],
                    },
                    {
                        path: "categories",
                        element: <CategoryLayout />,
                        children: [
                            {
                                path: "list",

                                element: (
                                    <CheckPermission
                                        x='5'
                                        requiredPermission='CATEGORY_VIEW'>
                                        <CategoryList />
                                    </CheckPermission>
                                ),
                            },
                            {
                                path: "add",
                                element: (
                                    <CheckPermission requiredPermission='CATEGORY_CREATE'>
                                        <AddCategory />
                                    </CheckPermission>
                                ),
                            },
                        ],
                    },
                    {
                        path: "products",
                        element: <ProductLayout />,
                        children: [
                            {
                                path: ":productId",

                                element: (
                                    <CheckPermission requiredPermission='PRODUCT_VIEW'>
                                        <ViewProduct />
                                    </CheckPermission>
                                ),
                            },
                            {
                                path: "list",

                                element: (
                                    <CheckPermission requiredPermission='PRODUCT_VIEW'>
                                        <ProductList />
                                    </CheckPermission>
                                ),
                            },
                            {
                                path: "add",
                                element: (
                                    <CheckPermission requiredPermission='PRODUCT_CREATE'>
                                        <AddProduct />
                                    </CheckPermission>
                                ),
                            },
                        ],
                    },
                    {
                        path: "customers",
                        element: <UserLayout />,
                        children: [
                            {
                                path: "list",

                                element: (
                                    <CheckPermission requiredPermission='USER_VIEW'>
                                        <UserList />
                                    </CheckPermission>
                                ),
                            },
                        ],
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
