import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Services = () => {
  const [service_data, setService_data] = useState([]);
  useEffect(() => {
    axios
      .get("/api/service/")
      .then((response) => {
        setService_data(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="h-[90%] w-[100%]">
      <div className="container mx-auto py-8">
        <div className="mx-[10%] flex">
          <div className="flex-col h-[100%]">
            <h1 className="text-3xl font-bold mb-1">Our Services</h1>
            <div className="h-[100vh] w-[0vh] ml-[60%] border border-black "></div>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-[7%]">
            {service_data.map((service) => (
              <Link key={service.id} className="p-6 border border-gray-300 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-2">{service.name}</h2>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at elit nec augue ultrices vehicula.</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
