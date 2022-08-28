import React, { useState } from "react";
import { User } from "../../App";

interface RegisterProps {
    onSubmit: CallableFunction
}

const Register: React.FC<RegisterProps> = (props) => {
    const { v4: uuidv4 } = require('uuid');

    const [user, setUser] = useState<User>({
        username: "",
        password: "",
        id: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
            id: uuidv4()
        }));
    }

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSubmit(user);
    }

    return (
        <form onSubmit={handleRegister}>
            <div>
                <label htmlFor="usernameRegister">Username:</label>
                <input onChange={handleChange} type="text" name="username" id="usernameRegister" required autoComplete="off"/>
            </div>
            <div>
                <label htmlFor="passwordRegister">Password:</label>
                <input onChange={handleChange} type="password" name="password" id="passwordRegister" required/>
            </div>
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;