import PropTypes from "prop-types";

const Service = ({service}) => {
    const {title, image, price, description} = service;
    return (
        <div className="p-6 bg-slate-200 rounded-md">
            <img src={image} className="h-60 w-full rounded-md" />
            <h2>{title}</h2>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    );
};
Service.propTypes = {
    service: PropTypes.object,
  };
export default Service;