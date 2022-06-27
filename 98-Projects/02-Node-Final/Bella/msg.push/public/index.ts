
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
        if (error && error.includes("11000")) throw error;
        console.log(data);
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

        // @ts-ignore
        const {data} = await axios.post("/users/login", {email, password});
        const {login, error} = data;
        
        // if (login) {
        //     window.location.href= "/users.html";
        // }  
        
        if (error) 
        throw error;
        
        redirect(login)
        // else if (error) {
        //     alert('Login failed');
        //   }
          
        console.log(data);

    } catch (error) {
        console.error(error);
    }

};

async function redirect(login) {
    window.location.href= "/users.html";
}