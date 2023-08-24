import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./ui/layout/Navbar";

function App() {
    return (
        <div className='app bg-light'>
            <Navbar />
            <Outlet />
            <ToastContainer />
        </div>
    );
}

export default App;
