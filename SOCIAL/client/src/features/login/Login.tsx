import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { updateUser } from "../../userRedux/userSlice";
import axios from "axios";
import { enabbleUser } from "../../userRedux/userSlice";

export const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChange = (e: React.FormEvent<Element> | any) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // console.log(inputs)

  const handleLogin = async (e: React.FormEvent<Element> | any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/auth/login", inputs, {
        withCredentials: true,
      });
      const { user } = data;
      console.log("user from handleLogin:", user);
      // console.log("Username from handleLogin:", data.user.username);

      if (user) {
        // currentUser as {}:
        localStorage.setItem("currentUser", JSON.stringify(user));
        localStorage.setItem("booleanCurrentUser", JSON.stringify(true));
        dispatch(updateUser(data.user));
        dispatch(enabbleUser());
        navigate("/home");
      }

      
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome Back</h1>
          <p>
            Expand your sphere of influence by growing your network and
            audience.
            <br />
            Having regular dialogue with your community helps you improve your
            products and services to serve them better.
            <br />
            Digital communities help you maintain touchpoints with your audience
            when being in the same physical space isn’t possible.
          </p>
          <span>Don`t you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
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
              placeholder="email"
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
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
