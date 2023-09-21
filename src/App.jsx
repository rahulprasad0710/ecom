import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./ui/layout/Navbar";
import Footer from "./ui/layout/Footer";

function App() {
    return (
        <div className='app bg-light'>
            <Navbar />
            <div className='container main'>
                <Outlet />
            </div>
            <Footer />
            <ToastContainer />
        </div>
    );
}

export default App;
