import React, { useState, useEffect } from 'react';
import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
import Confirmation from './Confirmation';
import { Button } from '@mui/material';

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: { name: '', email: '', phone: '' },
    addressInfo: { addressLine1: '', addressLine2: '', city: '', state: '', zipCode: '' },
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (event, stepName, fieldName) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [stepName]: { ...prevFormData[stepName], [fieldName]: value },
    }));
  };

  const handleNextStep = () => {
    if (step === 3) return;
    const isValid = validateForm(step);
    if (isValid) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step === 1) return;
    setStep(step - 1);
  };

  const handleSubmit = () => {
    const isValid = validateForm(step);
    if (isValid) {
      // Simulate API call with setTimeout
      setTimeout(() => {
        alert('Form submitted successfully!');
      }, 500);
    }
  };

  const validateForm = (step) => {
    let isValid = true;
    let errors = {};

    switch (step) {
      case 1:
        if (!formData.personalInfo.name) {
          errors.name = 'Name is required';
          isValid = false;
        }
        if (!formData.personalInfo.email) {
          errors.email = 'Email is required';
          isValid = false;
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.personalInfo.email)) {
          errors.email = 'Invalid email format';
          isValid = false;
        }
        if (!formData.personalInfo.phone) {
          errors.phone = 'Phone is required';
          isValid = false;
        }
        break;
      case 2:
        if (!formData.addressInfo.addressLine1) {
          errors.addressLine1 = 'Address Line 1 is required';
          isValid = false;
        }
        if (!formData.addressInfo.city) {
          errors.city = 'City is required';
          isValid = false;
        }
        if (!formData.addressInfo.state) {
          errors.state = 'State is required';
          isValid = false;
        }
        if (!formData.addressInfo.zipCode) {
          errors.zipCode = 'Zip Code is required';
          isValid = false;
        }
        break;
      default:
        break;
    }

    setErrors(errors);
    return isValid;
  };

  return (
    <div className="flex flex-col min-h-screen ">
      <div className="container mx-auto px-4 py-8 border-[1px]">
        {step === 1 && <PersonalInfo formData={formData.personalInfo} handleInputChange={handleInputChange} errors={errors} />}
        {step === 2 && <AddressInfo formData={formData.addressInfo} handleInputChange={handleInputChange} errors={errors} />}
        {step === 3 && <Confirmation formData={formData} />}
        <div className="flex justify-between mt-4">
          {step > 1 && (
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" onClick={handlePreviousStep}>
              Previous
            </button>
          )}
          {step < 3 && (
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" onClick={handleNextStep}>
              Next
            </button>
          )}
          {step === 3 && (
            <Button variant='contained' color='success' className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;