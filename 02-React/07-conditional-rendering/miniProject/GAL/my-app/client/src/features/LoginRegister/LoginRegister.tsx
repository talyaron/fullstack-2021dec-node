import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  function handlePage(ev: any) {
    try {
      if (ev.target.id === "login") {
        setIsLogin(true);
      } else if (ev.target.id === "register") {
        setIsLogin(false);
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <button id="login" onClick={handlePage}>
        Login
      </button>
      <button id="register" onClick={handlePage}>
        Register
      </button>
      {isLogin ? <Login /> : <Register />}
    </div>
  );
};

export default LoginRegister;
