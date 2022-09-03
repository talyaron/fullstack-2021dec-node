import React, { useState } from "react";

interface FormProps {
    onSubmit: any
}

const Form: React.FC<FormProps> = (props) => {

    const [user, setUser] = useState({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSubmit(user);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input onChange={handleChange} type="text" name="username" id="username" required/>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input onChange={handleChange} type="password" name="password" id="password" required/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;