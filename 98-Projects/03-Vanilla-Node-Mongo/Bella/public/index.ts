async function handleRegister(ev : any) {
    ev.preventDefault();
    try {
        const name:HTMLInputElement = ev.target.elements.name.value;
        const email:HTMLInputElement = ev.target.elements.email.value;
        const password:HTMLInputElement = ev.target.elements.password.value;
        console.log(name, email, password);

        //@ts-ignore
        const {data} = await axios.post("/users/register", {name, email, password});
        console.log(data);

        const {ok, error} = data;
        if (error) 
            throw error;

        if (error && error.includes("E11000")) 
            alert('email is already in use')

        else {
            window.location.href = "./login.html"
        }
        ev.target.reset()


    } catch (error) {
        console.error(error);
    }
};

async function handleLogin(ev : any) {
    ev.preventDefault();
    try {
        const email = ev.target.elements.email.value;
        const password = ev.target.elements.password.value;
        console.log(email, password);

        //@ts-ignore
        const {data} = await axios.post("/users/login", {email, password});
        console.log(data);

        const {ok} = data;
        if (ok) {
            window.location.href = "./dashboard.html"
        }
    } catch (error) {
        console.error(error);
    }
};