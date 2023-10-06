import { useContext } from "react";
import Banner from "../../Components/Banner/Banner";
import { authContext } from "../../AuthProvider/AuthProvider";
import Service from "../../Components/Service/Service";

const Home = () => {
  const { services } = useContext(authContext);
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 ">
        {services.map((service) => (
          <Service
            key={service.id}
            service={service}
          ></Service>
        ))}
      </div>
    </div>
  );
};

export default Home;
