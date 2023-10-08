import { useContext } from "react";
import { useParams } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";

const Member = () => {
  const { teams } = useContext(authContext);

  const { id } = useParams();

  const member = teams.find((singleMember) => singleMember.id === parseInt(id));

  return (
    <div className="bg-team-background bg-cover py-28">
        <div className="min-h-screen max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 p-6 rounded-md gap-6">
      <div className="md:col-span-2 bg-white p-8 rounded-lg space-y-6">
        <img
          src={member.image}
          className=" h-96  rounded-md block right-0 left-0 mx-auto"
        />
        <p>{member.introduction}</p>
      </div>
      <div className="md:col-span-1">
        <h3 className="text-xl font-bold  uppercase w-fit pb-2 border-b">Profile Details</h3>
        <h2 className="w-fit py-2 border-b">
          <span className="font-semibold uppercase ">Name: </span>
          {member.name}
        </h2>
        <p className="w-fit py-2 border-b">
          <span className="font-semibold uppercase ">Address: </span> {member.address}
        </p>
        <p className="w-fit py-2 border-b">
          {" "}
          <span className="font-semibold uppercase ">Phone: </span> {member.number}
        </p>
        <p  className="w-fit py-2 ">
          <span className="font-semibold uppercase ">Email: </span> {member.gmail}
        </p>
      </div>
    </div>
    </div>
  );
};

export default Member;
