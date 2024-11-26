import { Helmet } from "react-helmet";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
    const {pathname} = useLocation();
    // console.log(pathname);
    return (
        <div>
            <Helmet>
                <title> Dashboard </title>
            </Helmet>
            <div className="bg-[#9538E2] text-center text-white py-12">
                <h2 className="text-4xl font-bold mb-6"> Dashboard </h2>
                <p className="text-md font-thin px-96 mb-8"> Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all! </p>

                <div className="space-x-4">
                    <NavLink to='/dashboard/cart' className={({isActive}) => 
                    `btn rounded-full px-12 py-2 bg-transparent text-lg hover:text-[#9538E2] hover:bg-white ${isActive ? 'bg-white text-purple-700' : ""} ${pathname === '/dashboard' ? "bg-white !text-purple-500" : ''}`}> Cart </NavLink>
                    
                    <NavLink to='/dashboard/wishlist' className={({isActive}) => 
                    `btn rounded-full px-12 py-2 bg-transparent text-lg hover:text-[#9538E2] hover:bg-white ${isActive ? 'bg-white text-purple-700' : ""}`}> Wishlist </NavLink>
                </div>
            </div>

            <Outlet></Outlet>


        </div>
    );
};

export default Dashboard;