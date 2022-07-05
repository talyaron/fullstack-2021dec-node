// import {getUserId, onscondPageLoad } from './users'


async function handleLogin(ev: any) {
    ev.preventDefault();

    try {
        const email = ev.target.elements.email.value;
        const password = ev.target.elements.password.value;

        console.log(email, password);

        // @ts-ignore
        const {data} = await axios.post("/users/login", {email, password});
        const {login, error} = data;
        console.log(data);

        runLogin(data)

        if (error) throw error;
    } catch (error) {
        console.error(error);
    }
};

async function runLogin(user) {
    window.location.href = `./users.html?userId=${user._id}&name=${user.name}`;
    console.log(user);
};