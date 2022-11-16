import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAppDispatch } from "../../app/hooks";
import { hide } from "../../components/navbar/showNavbarSlice";


export const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<any>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  dispatch(hide())


  const handleChange = (e: React.FormEvent<Element> | any) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // console.log(inputs)

  const handleRegister = async (e: React.FormEvent<Element> | any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/auth/register", inputs);
      console.log(data);
      navigate("/login");
      // const error = new AxiosError();
    } catch (error) {
      console.error(error);
      // console.dir({ error: AxiosError });
      // console.dir(err.response.data);
      // setError(error.response.data);
    }
  };

  return (
    <div className="auth">
      <form onSubmit={handleRegister}>
        <h1>Register</h1>
        <input
          type="text"
          name="username"
          placeholder="username"
          className="formInput"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
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
          Register
        </button>
        {error && <p>{error}</p>}
        <span>
          Do you have an account?{" "}
          <Link className="link" to="/login">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};
