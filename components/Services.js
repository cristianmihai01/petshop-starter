import React from "react";
//import components
import ServiceSlider from "./ServiceSlider";

const Services = () => {
  return (
    <section className="bg-services bg-cover bg-no-repeat bg-center min-h-[862px]  py-8">
      <div className="container mx-auto pl-10 h-[862px]">
        <h2 className="h2 mb-12">Our Services</h2>
        <ServiceSlider />
      </div>
    </section>
  );
};

export default Services;
