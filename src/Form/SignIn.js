

import React, { useState, useEffect } from 'react'

const SignIn = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignInClick = () => {
    console.log('Sign In button clicked');
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Password:', formData.password);
    localStorage.setItem('formData', JSON.stringify(formData));
  };
  return (
    <div className='form-parent'>
      <form>
        <h1>Sign In Form</h1>
        <label>
          Email:
          <input type="email" name='email' placeholder='Enter Your Email' className='input-field' onChange={handleInputChange} />
        </label>
        <label>
          Password:
          <input type="password" name='password' placeholder='Enter Your password' className='input-field' onChange={handleInputChange} />
        </label>
        <button type='submit' onClick={handleSignInClick}>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;