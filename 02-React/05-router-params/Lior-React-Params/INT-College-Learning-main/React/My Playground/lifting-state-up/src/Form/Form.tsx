import { Attributes, useState } from "react";

interface FormProps {
    onSubmit: any
}

const Form: React.FC<FormProps> = (props) => {

    const [user, setUser] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSubmit(user)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;