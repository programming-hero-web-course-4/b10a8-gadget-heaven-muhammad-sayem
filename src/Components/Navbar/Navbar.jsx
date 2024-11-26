import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const {pathname} = useLocation();
    // console.log(pathname);
    return (
        <div className={`w-11/12 mx-auto ${pathname === '/' ? 'text-white' : 'text-[#9538E2]'}`}>
            <div className={`navbar ${pathname === '/' ? 'bg-[#9538E2]' : ''}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink to='/' className={({isActive}) => `font-bold ${isActive? 'bg-black text-white px-2 py-1 rounded-md': ""}`
                        }> Home </NavLink>

                        <NavLink to='/statistics' className={({isActive}) => `font-bold ${isActive? 'bg-black text-white px-2 py-1 rounded-md': ""}`}> Statistics </NavLink>

                        <NavLink to='/dashboard' className={({isActive}) => `font-bold ${isActive? 'bg-black text-white px-2 py-1 rounded-md': ""}`}> Dashboard </NavLink>

                        <NavLink to='/privacyPolicy' className={({isActive}) => `font-bold ${isActive? 'bg-black text-white px-2 py-1 rounded-md': ""}`}> Privacy Policy </NavLink>
                        </ul>
                    </div>
                    <NavLink to='/' className="btn btn-ghost text-xl">Gadget Heaven</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        <NavLink to='/' className={({isActive}) => `font-bold ${isActive? 'bg-black text-white px-2 py-1 rounded-md': ""}`
                        }> Home </NavLink>

                        <NavLink to='/statistics' className={({isActive}) => `font-bold ${isActive? 'bg-black text-white px-2 py-1 rounded-md': ""}`}> Statistics </NavLink>

                        <NavLink to='/dashboard' className={({isActive}) => `font-bold ${isActive? 'bg-black text-white px-2 py-1 rounded-md': ""}`}> Dashboard </NavLink>

                        <NavLink to='/privacyPolicy' className={({isActive}) => `font-bold ${isActive? 'bg-black text-white px-2 py-1 rounded-md': ""}`}> Privacy Policy </NavLink>
                    </ul>
                </div>
                <div className="navbar-end space-x-2 text-black">
                    <a className="rounded-full p-2 bg-white shadow-xl"> <IoCartOutline size={25}></IoCartOutline> </a>

                    <a className="rounded-full p-2 bg-white shadow-xl"> <CiHeart size={25}></CiHeart> </a>

                </div>
            </div>
        </div>
    );
};

export default Navbar;