import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./assets/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import router from "./routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
