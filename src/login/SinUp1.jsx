import React, { useState } from 'react';

const FormValidationExample = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let validationErrors = { ...errors };

    if (!value.trim()) {
      validationErrors[fieldName] = `${fieldName} is required`;
    } else if (fieldName === 'email' && !isValidEmail(value)) {
      validationErrors[fieldName] = 'Invalid email format';
    } else {
      delete validationErrors[fieldName];
    }

    setErrors(validationErrors);
  };

  const validateForm = () => {
    let validationErrors = {};

    Object.keys(formData).forEach((fieldName) => {
      const value = formData[fieldName];

      if (!value.trim()) {
        validationErrors[fieldName] = `${fieldName} is required`;
      } else if (fieldName === 'email' && !isValidEmail(value)) {
        validationErrors[fieldName] = 'Invalid email format';
      }
    });

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform form submission or API call
      console.log('Form submitted:', formData);
    }
  };

  const isValidEmail = (email) => {
    // Perform email validation logic (regex, etc.) as needed
    return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidationExample;