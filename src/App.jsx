import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./ui/layout/Navbar";

function App() {
    return (
        <div className='app bg-light'>
            <Navbar />
            <Outlet />
        </div>
    );
}

export default App;
