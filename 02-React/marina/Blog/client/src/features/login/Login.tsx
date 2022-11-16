import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import User from "../../userInterface";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { login } from "./loginSlice";
import { show, hide } from "../../components/navbar/showNavbarSlice";
import { updateUser, userSelector } from "./userSlice";

export const Login = () => {
  const [error, setError] = useState<any>(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const user = useAppSelector(userSelector);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(hide());
  }, []);

  const handleLogin = async (e: React.FormEvent<Element> | any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/auth/login", inputs);
      const { other } = data;
      console.log("data:", data);
      console.log("other:", other);
      // console.log("other:", other.user_id);

      if (other) {
        navigate("/");
        dispatch(login());
        dispatch(show());
        console.log("setCurrentUser.....", other);
        setCurrentUser(other);
        console.log("currentUser", other);
        localStorage.setItem("currentUser", JSON.stringify(other));
        dispatch(updateUser(user));
      }
      // const error = new AxiosError();
    } catch (error) {
      console.error(error);
      // console.dir({ error: AxiosError });
      // console.dir(err.response.data);
      // setError(error.response.data);
    }
  };

  useEffect(() => {
    console.log("currentUser", currentUser);
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  const handleChange = (e: React.FormEvent<Element> | any) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // console.log(inputs)

  return (
    <div className="auth">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <input
          type="text"
          name="username"
          placeholder="username"
          className="formInput"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="formInput"
          required
          onChange={handleChange}
        />
        <button type="submit" className="formBtn">
          Login
        </button>
        {error && <p>{error}</p>}
        <span>
          Don`t you have an account?{" "}
          <Link className="link" to="/register">
            Register
          </Link>
        </span>
      </form>
    </div>
  );
};
