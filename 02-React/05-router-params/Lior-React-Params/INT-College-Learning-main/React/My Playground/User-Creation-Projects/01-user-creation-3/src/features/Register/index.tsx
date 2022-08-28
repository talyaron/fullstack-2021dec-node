import React, { FormEvent, InsHTMLAttributes, useState } from "react";
import { User } from "../../App";

interface RegisterProps {
    onSubmit: CallableFunction
}

const Register: React.FC<RegisterProps> = (props) => {

    const [user, setUser] = useState<User>({
        username: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setUser((prevState) => ({
                ...prevState,
                [e.target.id] : e.target.value
            }));
        } catch (error) {
            console.error(error);
        }
    }

    const handleRegister = (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            props.onSubmit(user);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form onSubmit={handleRegister}>
            <div>
                <label htmlFor="username">Username:</label>
                <input onChange={handleChange} type="text" name="username" id="username" required/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input onChange={handleChange} type="password" name="password" id="password" required/>
            </div>
            <button type="submit">Login</button>
        </form>
    );
}

export default Register;