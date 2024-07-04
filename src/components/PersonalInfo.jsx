import React from 'react';

const PersonalInfo = ({ formData, handleInputChange, errors }) => {
  return (
    <div className="flex flex-col">
      <label className="block mb-2" htmlFor="name">
        Name
      </label>
      <input
        type="text"
        id="name"
        value={formData.name}
        onChange={(event) => handleInputChange(event, 'personalInfo', 'name')}
        className={`block w-full px-4 py-2 ${errors.name? 'border-red-500' : 'border-gray-300'}`}
        placeholder="Enter your name"
      />
      {errors.name && <p className="text-red-500">{errors.name}</p>}
      <label className="block mb-2" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        id="email"
        value={formData.email}
        onChange={(event) => handleInputChange(event, 'personalInfo', 'email')}
        className={`block w-full px-4 py-2 ${errors.email? 'border-red-500' : 'border-gray-300'}`}
        placeholder="Enter your email"
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}
      <label className="block mb-2" htmlFor="phone">
        Phone
      </label>
      <input
        type="tel"
        id="phone"
        value={formData.phone}
        onChange={(event) => handleInputChange(event, 'personalInfo', 'phone')}
        className={`block w-full px-4 py-2 ${errors.phone? 'border-red-500' : 'border-gray-300'}`}
        placeholder="Enter your phone number"
      />
      {errors.phone && <p className="text-red-500">{errors.phone}</p>}
    </div>
  );
};

export default PersonalInfo;