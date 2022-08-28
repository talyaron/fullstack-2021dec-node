import React, { useState } from "react";
// import { uuid } from "uuidv4";

import { User } from "../../App";

interface RegisterProps {
    onSubmit: CallableFunction
}

const Register:React.FC<RegisterProps> = (props) => {

    const [user, setUser] = useState<User>({ username: "", password: "", id: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value,
            id: "1234"
        }));
    }
    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSubmit(user);
    } 
    return (
        <form onSubmit={handleRegister}>
            <div>
                <label htmlFor="username">Username:</label>
                <input onChange={handleChange} type="text" name="username" id="username" />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input onChange={handleChange} type="password" name="password" id="password" />
            </div>
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;