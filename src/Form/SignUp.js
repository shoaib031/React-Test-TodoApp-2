import React from 'react'

const SignUp = () => {
  return (
    <div className='form-parent'>
      <form>
        <h1>Sign Up Form</h1>
        <label>
          Name:
          <input type='text' name='text' placeholder='Enter Your Name' className='input-field' />
        </label>
        <label>
          Email:
          <input type="email" name='email' placeholder='Enter Your Email' className='input-field' />
        </label>
        <label>
          Password:
          <input type="password" name='password' placeholder='Enter Your password' className='input-field' />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SignUp