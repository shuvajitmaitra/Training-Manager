import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"


const Navbar = () => {
    const navLink = (
        <>
          <li>
            {" "}
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={"/services"}>Services</NavLink>
          </li>
          <li>
            <NavLink to={"/blog"}>Blog</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact Us</NavLink>
          </li>
        </>
      );
    
    return (
        <div className="max-w-screen-xl mx-auto navbar bg-transparent ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#A8DF8E] rounded-box w-52">
        {navLink}
      </ul>
    </div>
   <img src={logo} className="h-16" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLink}
    </ul>
  </div>
  <div className="navbar-end gap-3 ">
   <Link to="/login"> <button className="btn capitalize bg-[#A8DF8E] btn-sm rounded">Login</button></Link>
   <Link to="/register"> <button className="btn capitalize bg-[#FFE5E5] btn-sm rounded" >Join Us</button></Link>
  </div>
</div>
    );
};

export default Navbar;