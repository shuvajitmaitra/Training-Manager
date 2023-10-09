import { useContext } from "react";
import { useParams } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";


const ServiceDetails = () => {
    const {services} = useContext(authContext)

  const { id } = useParams();

  const service = services.find(singleService => singleService.id === parseInt(id))

  return (
    <div className="bg-team-background bg-cover py-28">
        <div className="min-h-screen max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 p-6 rounded-md gap-6">
      <div className="md:col-span-2 bg-white p-8 rounded-lg space-y-6">
        <img
          src={service.image}
          className=" h-96  rounded-md block right-0 left-0 mx-auto"
        />
        <p>{service.descriptions}</p>
      </div>
      <div className="md:col-span-1">
        <h3 className="text-xl font-bold  uppercase w-fit pb-2 border-b">Service Details</h3>
        <h2 className="w-fit py-2 border-b">
          <span className="font-semibold uppercase ">Title: </span>
          {service.title}
        </h2>
        <p className="w-fit py-2 border-b">
          <span className="font-semibold uppercase ">price: </span> {service.price} $
        </p>
      </div>
    </div>
    </div>
  );
};

export default ServiceDetails;