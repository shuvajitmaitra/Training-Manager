import { useContext } from "react";
import { useParams } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";


const ServiceDetails = () => {
    const {services} = useContext(authContext)

    const {id} = useParams()
    console.log(7,id);

    const service = services.find(singleService => singleService.id === parseInt(id))

    return (
        <div className="h-screen flex justify-center items-center p-6 bg-slate-200 rounded-md">
            <img src={service.image} className="h-60  rounded-md" />
            <h2>{service.title}</h2>
            <p>{service.price}</p>
            <p>{service.description}</p>
           {/* <Link to={`/view-details/${id}`}> <button>View Details</button></Link> */}
        </div>
    );
};

export default ServiceDetails;