import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const Root = () => {
  return (
    <div className="relative ">
       <div className="absolute w-full">
       <Navbar></Navbar>
       </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
