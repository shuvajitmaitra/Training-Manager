import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Teams = ({ member }) => {
  const { id, name, image, designation } = member;
  return (
    <div className="p-6rounded-md">
      <Link to={`/member/${id}`}>
        {" "}
        <img
          src={image}
          className="h-60 block right-0 left-0 mx-auto border-[5px] border-white hover:border-gray-300 rounded-full"
        />
        <h2 className="text-xl font-semibold text-center hover:text-gray-600 ">{name}</h2>
        <p className="text-lg text-center">{designation}</p>{" "}
      </Link>
    </div>
  );
};
Teams.propTypes = {
  member: PropTypes.object,
};
export default Teams;
