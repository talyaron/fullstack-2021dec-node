
async function handleRegister(ev : any) {
    ev.preventDefault();

    try {
        const email = ev.target.elements.email.value;
        const password = ev.target.elements.password.value;

        console.log(email, password);

        // @ts-ignore
        const {data} = await axios.post("/users/register", {email, password});
        const {register, error} = data;
        console.log(error, register);
        
        runRegister(register)

        if (error && error.includes("11000")) throw error;
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};


async function runRegister(register) {
    window.location.href= "/login.html";
    console.log(register);
};
