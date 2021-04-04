import { useState } from "react";
import { Link } from "react-router-dom";

import "./Register.css";

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <h1 className="register-title">Register</h1>
      <form
        className="authform signup-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister(formData);
        }}
      >
        <label htmlFor="username-input">
          Choose your username. 
          Don't worry, you can always change this later.
          <input
            id='username-input'
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            placeholder="Username"
          />
        </label>
        <br />
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        />
        <br />
        <button disabled={!username || !password || !email}>Submit</button>
      </form>
      <div className="bottomlink">
        Have an account?
        <Link to="/login"> Log In.</Link>
      </div>
    </div>
  );
}
