import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Service = ({service}) => {
    const {id, title, image, price, descriptions} = service;
    return (
        <div className="p-6 bg-[#daf5be] rounded-md space-y-2">
            <img src={image} className="h-60 w-full rounded-md" />
            <div className="flex justify-between ">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="font-semibold">{price} $</p>
            </div>
            <p>{descriptions.slice(0, 100)}....</p>
           <Link to={`/view-details/${id}`}> <button className="py-2 px-4 rounded font-semibold  bg-[#A8DF8E] block right-0 left-0 mx-auto">View Details</button></Link>
        </div>
    );
};
Service.propTypes = {
    service: PropTypes.object,
  };
export default Service;