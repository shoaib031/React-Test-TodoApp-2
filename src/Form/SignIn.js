import React from 'react'

const SignIn = () => {
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
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SignIn