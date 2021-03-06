async function handleRegister(ev : any) {
    ev.preventDefault();

    try {
        const email = ev.target.elements.email.value;
        const password = ev.target.elements.password.value;
        console.log(email, password);

        // @ts-ignore
        const {data} = await axios.post("/users/register", {email, password});
        console.log(data);

        const {ok} = data;
        if (ok) {
            window.location.href = "./login.html";
        }

    } catch (error) {
        console.error(error);
    }
}

async function handleLogin(ev : any) {
    ev.preventDefault();

    try {
        const email = ev.target.elements.email.value;
        const password = ev.target.elements.password.value;
        console.log(email, password);

        // @ts-ignore
        const {data} = await axios.post("/users/login", {email, password});
        console.log(data);

        const {ok} = data;
        if (ok) {
            window.location.href = `./products.html?${ok._id}`;
        }

    } catch (error) {
        console.error(error);
    }
}