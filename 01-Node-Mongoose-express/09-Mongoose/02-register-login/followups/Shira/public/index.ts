async function handleRegister(ev) {
    ev.preventDefault();
    try {
        const email = ev.target.email.value;
        const password = ev.target.password.value;
        console.log(email,password);

        const {data} = await axios.post("/users/register", {email,password})
        const {register,error} = data;
        console.log(error);

        if (error && error.includes("E11000")) alert("Email already exists");
        console.log(data);
    } catch (error) {
        console.error(error);
        
    }
}

async function handleLogin(ev) {
    ev.preventDefault();
    try {
        const email = ev.target.email.value;
        const password = ev.target.password.value;
        console.log(email,password);

        const {data} = await axios.post("/users/login", {email,password})
        const {login,error} = data;
        console.log(error);

        if(login){
            window.location.href= './hello.html'
        }
        if(error) throw error;
        console.log(data);
        

 
    } catch (error) {
        console.error(error);
        
    }
}