import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Service = ({service}) => {
    const {id, title, image, price, description} = service;
    return (
        <div className="p-6 bg-slate-200 rounded-md">
            <img src={image} className="h-60 w-full rounded-md" />
            <h2>{title}</h2>
            <p>{price}</p>
            <p>{description}</p>
           <Link to={`/view-details/${id}`}> <button>View Details</button></Link>
        </div>
    );
};
Service.propTypes = {
    service: PropTypes.object,
  };
export default Service;