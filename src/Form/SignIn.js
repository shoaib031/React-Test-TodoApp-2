import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ onSignInSuccess, setIsSignedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

  const handleSignInClick = () => {
    const storedData = {
      email: localStorage.getItem('Email') || '',
      password: localStorage.getItem('Password') || '',
    };

    if (!storedData.email) {
      alert('User is not registered. Please sign up first.');
    } else if (formData.email === storedData.email && formData.password === storedData.password) {
      onSignInSuccess(formData);
      navigate('/addtodo');
      setIsSignedIn(true);

      localStorage.setItem('Email', formData.email);
      localStorage.setItem('Password', formData.password);
    } else {
      alert('Pls Check Email or Password');
    }
  };


  return (
    <div className='form-parent'>
      <form>
        <h1>Sign In Form</h1>
        <label>
          Email:
          <input type="email" name='email' placeholder='Enter Your Email' className='input-field' onChange={handleInputChange} value={formData.email} />
        </label>
        <label>
          Password:
          <input type="password" name='password' placeholder='Enter Your password' className='input-field' onChange={handleInputChange} value={formData.password} />
        </label>
        <button type='button' onClick={handleSignInClick}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;






