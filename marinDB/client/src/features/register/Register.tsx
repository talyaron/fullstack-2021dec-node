import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerAsync } from "../../userRedux/userAPI";
import { useAppDispatch } from "../../app/hooks";

export const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChange = (e: React.FormEvent<Element> | any) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // console.log(inputs)

  const handleRegister = (e: React.FormEvent<Element> | any) => {
    e.preventDefault();
    dispatch(registerAsync(inputs));
    console.log(inputs);
    navigate("/login");
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Marina Social</h1>
          <p>
            Open Social gives you all the features you need for members to share
            more with one another.<br/> Simple & safe signup lets you grow and retain
            membership, while purpose-built features and extensions for sharing
            drives engagement.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              required
            />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};
