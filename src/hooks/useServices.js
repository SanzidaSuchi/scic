import { useState, useEffect } from "react";

const useServices = () => {
        const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://stark-mountain-90454.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [services, setServices];
    
};

export default useServices;