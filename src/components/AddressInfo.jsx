import React from 'react';
import { useSpring, animated } from 'react-spring';

const AddressInfo = ({ formData, handleInputChange, errors }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 300 },
  });

  return (
    <animated.div style={props} className="confirmation-container">
      <div className="flex flex-col border-[1px] p-4">
      <label className="block mb-2 font-semibold" htmlFor="addressLine1">
        Address Line 1
      </label>
      <input
        type="text"
        id="addressLine1"
        value={formData.addressLine1}
        onChange={(event) => handleInputChange(event, 'addressInfo', 'addressLine1')}
        className={`block w-full px-4 py-2 ${errors.addressLine1? 'border-red-500' : 'border-gray-300'}`}
        placeholder="Enter your address line 1"
      />
      {errors.addressLine1 && <p className="text-red-500">{errors.addressLine1}</p>}
      <label className="block mb-2 font-semibold" htmlFor="addressLine2">
        Address Line 2
      </label>
      <input
        type="text"
        id="addressLine2"
        value={formData.addressLine2}
        onChange={(event) => handleInputChange(event, 'addressInfo', 'addressLine2')}
        className={`block w-full px-4 py-2 ${errors.addressLine2? 'border-red-500' : 'border-gray-300'}`}
        placeholder="Enter your address line 2"
      />
      {errors.addressLine2 && <p className="text-red-500">{errors.addressLine2}</p>}
      <label className="block mb-2 font-semibold" htmlFor="city">
        City
      </label>
      <input
        type="text"
        id="city"
        value={formData.city}
        onChange={(event) => handleInputChange(event, 'addressInfo', 'city')}
        className={`block w-full px-4 py-2 ${errors.city? 'border-red-500' : 'border-gray-300'}`}
        placeholder="Enter your city"
      />
      {errors.city && <p className="text-red-500">{errors.city}</p>}
      <label className="block mb-2 font-semibold" htmlFor="state">
        State
      </label>
      <input
        type="text"
        id="state"
        value={formData.state}
        onChange={(event) => handleInputChange(event, 'addressInfo', 'state')}
        className={`block w-full px-4 py-2 ${errors.state? 'border-red-500' : 'border-gray-300'}`}
        placeholder="Enter your state"
      />
      {errors.state && <p className="text-red-500">{errors.state}</p>}
      <label className="block mb-2 font-semibold" htmlFor="zipCode">
        Zip Code
      </label>
      <input
        type="text"
        id="zipCode"
        value={formData.zipCode}
        onChange={(event) => handleInputChange(event, 'addressInfo', 'zipCode')}
        className={`block w-full px-4 py-2 ${errors.zipCode? 'border-red-500' : 'border-gray-300'}`}
        placeholder="Enter your zip code"
      />
      {errors.zipCode && <p className="text-red-500">{errors.zipCode}</p>}
    </div>
    </animated.div>
    
  );
};

export default AddressInfo;