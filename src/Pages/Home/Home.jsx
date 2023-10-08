import { useContext } from "react";
import Banner from "../../Components/Banner/Banner";
import { authContext } from "../../AuthProvider/AuthProvider";
import Service from "../../Components/Service/Service";
import Footer from "../../Components/Footer/Footer";
import Teams from "../../Components/Teams/Teams";
import Feedback from "../../Components/Feedback/Feedback";

const Home = () => {
  const { services, teams } = useContext(authContext);
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
     <div className="bg-team-background py-10">
     <h2 className="text-5xl font-bold text-center">Meet Our Team</h2>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10 ">
        {teams.map((member) => (
          <Teams
            key={member.id}
            member={member}
          ></Teams>
        ))}
      </div>
     </div>
     <div>
      <Feedback></Feedback>
     </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
