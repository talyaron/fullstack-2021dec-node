import React, { useState } from "react";

import { User } from "../../App";

interface FormProps {
    onSubmit: any
}



const Form:React.FC<FormProps> = (props) => {

    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [user, setUser] = useState<User>();

    const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsernameInput(e.target.value);
    }
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordInput(e.target.value);
    }

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUser({username: usernameInput, password: passwordInput})
        props.onSubmit(user);
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <div>
                <label htmlFor="username">Username:</label>
                <input onChange={handleChangeUsername} type="text" name="usernmae" id="username" required/>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input onChange={handleChangePassword} type="password" name="password" id="password" required/>
            </div>
            <button type="submit">Register</button>
        </form>
    );
}

export default Form;