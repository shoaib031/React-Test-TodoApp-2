import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name : '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUpClick = () => {
    console.log('Sign Up button clicked');
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Password:', formData.password);
  };

  return (
    <div className='form-parent'>
      <form>
        <h1>Sign Up Form</h1>
        <label>
          Name:
          <input
            type="text" name='name' placeholder='Enter Your Name' className='input-field' onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input type="email" name='email' placeholder='Enter Your Email' className='input-field' onChange={handleInputChange}
          />
        </label>
        <label>
          Password:
          <input type="password" name='password' placeholder='Enter Your password' className='input-field' onChange={handleInputChange}
          />
        </label>
        <button type='button' onClick={handleSignUpClick}>
          Sign Up
          </button>
          </form>
    </div>
  );
};
export default SignUp