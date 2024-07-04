import React from 'react';
import { useSpring, animated } from 'react-spring';


const Confirmation = ({ formData }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 300 },
  });

  return (
    <animated.div style={props} className="confirmation-container">
      <div className="flex flex-col border-[1px] p-4">
        <h2 className="text-2xl font-bold mb-4">Confirmation</h2>
        <div className="flex flex-col  md:justify-between">
          <div className="flex flex-col mb-4 md:mb-4">
            <label className="block mb-2 font-semibold" htmlFor="name">
              Name
            </label>
            <p>{formData.personalInfo.name}</p>
          </div>
          <div className="flex flex-col mb-4 md:mb-4">
            <label className="block mb-2 font-semibold" htmlFor="email">
              Email
            </label>
            <p>{formData.personalInfo.email}</p>
          </div>
          <div className="flex flex-col mb-4 md:mb-4">
            <label className="block mb-2 font-semibold" htmlFor="phone">
              Phone
            </label>
            <p>{formData.personalInfo.phone}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col mb-4 md:mb-4">
            <label className="block mb-2 font-semibold" htmlFor="addressLine1">
              Address Line 1
            </label>
            <p>{formData.addressInfo.addressLine1}</p>
          </div>
          <div className="flex flex-col mb-4 md:mb-4">
            <label className="block mb-2 font-semibold" htmlFor="addressLine2">
              Address Line 2
            </label>
            <p>{formData.addressInfo.addressLine2}</p>
          </div>
          <div className="flex flex-col mb-4 md:mb-4">
            <label className="block mb-2 font-semibold" htmlFor="city">
              City
            </label>
            <p>{formData.addressInfo.city}</p>
          </div>
          <div className="flex flex-col mb-4 md:mb-4">
            <label className="block mb-2 font-semibold" htmlFor="state">
              State
            </label>
            <p>{formData.addressInfo.state}</p>
          </div>
          <div className="flex flex-col mb-4 md:mb-4">
            <label className="block mb-2  font-semibold" htmlFor="zipCode">
              Zip Code
            </label>
            <p>{formData.addressInfo.zipCode}</p>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Confirmation;