import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import Service from "../../Components/Service/Service";


const Services = () => {

    const {services} = useContext(authContext)
    return (
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 ">
        {services.map((service) => (
          <Service
            key={service.id}
            service={service}
          ></Service>
        ))}
      </div>
    );
};

export default Services;