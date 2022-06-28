async function handleLogin(ev : any) {
    ev.preventDefault();

    try {
        const email = ev.target.elements.email.value;
        const password = ev.target.elements.password.value;

        console.log(email, password);

        // @ts-ignore
        const {data} = await axios.post("/users/login", {email, password});
        const {login, error} = data;
        console.log(data);

        runLogin(login)

        if (error) throw error;
        ev.target.reset();

    } catch (error) {
        console.error(error);
    }
};

async function runLogin(login) {
    window.location.href= "/users.html";
    console.log(login);
};