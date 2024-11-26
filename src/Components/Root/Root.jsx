import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div>
            <Toaster></Toaster>
            
            <Navbar></Navbar>

            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Root;