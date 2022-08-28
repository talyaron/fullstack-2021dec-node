import React, { useState } from "react";
import { User } from "../../App";

interface LoginProps {
    onSubmit: CallableFunction
}

const Login: React.FC<LoginProps> = (props) => {

    const { v4: uuidv4 } = require('uuid');

    const [user, setUser] = useState<User>({
        username: "",
        password: "",
        id: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
            id: uuidv4()
        }))
    }

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSubmit(user);
    }

    return (
        <form onSubmit={handleLogin}>
            <div>
                <label htmlFor="usernameLogin">Username:</label>
                <input onChange={handleChange} type="text" name="username" id="usernameLogin" required autoComplete="off" />
            </div>
            <div>
                <label htmlFor="passwordLogin">Password:</label>
                <input onChange={handleChange} type="password" name="password" id="passwordLogin" required />
            </div>
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;