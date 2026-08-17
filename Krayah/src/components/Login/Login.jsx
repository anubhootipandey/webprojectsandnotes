import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <>
    <div className="login">
        <h2>Login</h2>
        <p>New to Aphrodite?<Link to='/signup' className='links'> Sign up.</Link></p>
        <label>Email</label><br></br>
        <input placeholder='Enter email'></input><br></br>
        <label>Password</label><br></br>
        <input placeholder='Enter password'></input><br></br>
        <button>Submit</button>
        <button>Login with Google</button>
    </div>
    </>
  )
}

export default Login