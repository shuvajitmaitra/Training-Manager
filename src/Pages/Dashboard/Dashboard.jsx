import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";


const Dashboard = () => {
    
        const {user} = useContext(authContext)



  
  return (
    <div className="bg-team-background bg-cover py-6">
        <div className="max-w-screen-lg mx-auto p-6 rounded-md gap-6">
      <div className=" bg-white p-8 rounded-lg space-y-6">
        <img
          src={user.photoURL}
          className=" h-96  rounded-md block right-0 left-0 mx-auto"
        />
        <h3 className="capitalize"><span className="font-bold ">User Name:</span> {user.displayName}</h3>
        <p><span className="font-bold">User Email:</span> {user.email}</p>
      </div>
      
    </div>
    </div>
  );
    
};

export default Dashboard;