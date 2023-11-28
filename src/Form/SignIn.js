import React from 'react'

const SignIn = () => {
  const handleSignInClick = (e) => {
    e.preventDefault();
    console.log("Sign In button clicked");
  };
  return (
    <div className='form-parent'>
      <form>
        <h1>Sign In Form</h1>
        <label>
          Email:
          <input type="email" name='email' placeholder='Enter Your Email' className='input-field' />
        </label>
        <label>
          Password:
          <input type="password" name='password' placeholder='Enter Your password' className='input-field' />
        </label>
        <button type='submit' onClick={handleSignInClick}>
          Sign In
        </button>
      </form>
    </div>
  )
}

export default SignIn