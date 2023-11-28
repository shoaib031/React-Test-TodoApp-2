import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: localStorage.getItem('Name') || '',
    email: localStorage.getItem('Email') || '',
    password: localStorage.getItem('Password') || '',
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
    console.log(formData.name);
    console.log(formData.email);
    console.log(formData.password);
    localStorage.setItem('Name', formData.name);
    localStorage.setItem('Email', formData.email);
    localStorage.setItem('Password', formData.password);

    setFormData({
      name: '',
      email: '',
      password: '',
    });

    navigate('/signin');
  };

  return (
    <div className='form-parent'>
      <form>
        <h1>Sign Up Form</h1>
        <label>
          Name:
          <input type="text" name='name' placeholder='Enter Your Name' className='input-field' onChange={handleInputChange} value={formData.name} />
        </label>
        <label>
          Email:
          <input type="email" name='email' placeholder='Enter Your Email' className='input-field' onChange={handleInputChange} value={formData.email} />
        </label>
        <label>
          Password:
          <input type="password" name='password' placeholder='Enter Your password' className='input-field' onChange={handleInputChange} value={formData.password} />
        </label>
        <button type='button' onClick={handleSignUpClick}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
