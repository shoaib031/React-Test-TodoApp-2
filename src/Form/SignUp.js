import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
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
    console.log(formData.name);
    console.log(formData.email);
    console.log(formData.password);
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));

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

