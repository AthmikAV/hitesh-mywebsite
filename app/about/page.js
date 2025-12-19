import React from "react";

const About = () => {
  return (
    <div className="max-w-250 mx-auto mb-7">
      <h1 className="font-extrabold text-2xl md:text-4xl mt-10 text-center">
        About Us
      </h1>

      <p className="text-sm mt-3 text-center">
        Learn more about our story and what drives us forward
      </p>

      <div className="flex justify-center">
        <div className="max-w-180 mx-auto text-center space-y-7">
          <div className="mt-10 shadow-lg p-6">
            <h2 className="font-bold my-1">Our Story</h2>
            <p className="text-sm">
              MyWebsite is a modern web platform created to deliver a simple,
              fast, and user-friendly digital experience. We focus on clean
              design, intuitive navigation, and responsive layouts to ensure
              accessibility across all devices.
            </p>
          </div>
          <div className="md:grid md:grid-cols-2 space-y-5 md:space-y-0">
            <div className="shadow-lg p-5">
               <h2 className="font-bold my-1">Our Mission</h2>
               <p className="text-sm">
                To create a fast, simple, and user-friendly digital
                platform that delivers clean design, smooth navigation,
                and reliable performance—helping users access information
                and services effortlessly on any device.
            </p>
            </div>
            <div className="shadow-lg p-5">
               <h2 className="font-bold my-1">Our Vision</h2>
               <p className="text-sm">
                To become a trusted and innovative web platform known for simplicity,
                accessibility, and modern user experience—empowering people and businesses
                through thoughtful digital solutions.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
