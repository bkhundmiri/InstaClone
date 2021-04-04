import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Login.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  
  return (
    <div className='container'>
      <h1>InstaClone</h1>
      <form className='authform signin-form' onSubmit={(e)=>{
        e.preventDefault();
        handleLogin(formData);
      }}>
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
          placeholder='Username'
          required
        />
        <br />
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          placeholder='Password'
          required
        />
        <br />
        <button disabled={!username || !password}>Log In</button>
      </form>
      <div className='bottomlink sign-up-link'>
        Don't have an account? 
        <Link to='/register'> Sign Up.</Link>
      </div>
    </div>
  )
}
