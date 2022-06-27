async function handleUserReg(ev){
    ev.preventDefault()
    try {
        const name = ev.target.name.value;
        const email = ev.target.email.value;
        const password = ev.target.password.value;

        const {data} = await axios.post('/user/register', {name, email, password});
        const {register, error} = data;

        console.log(data);
        
        
        if( error && error.includes("E11000")) alert ('email is already in use')



    } catch (error) {
       console.log(error);
        
    }
}

async function handleUserLogin(ev){
    ev.preventDefault()
    try {
        const name = ev.target.name.value;
        const email = ev.target.email.value;
        const password = ev.target.password.value;

        const {data} = await axios.post('/user/login', {name, email, password});
        const {login, error} = data;
        console.log(data);
        

        if(error) throw error;
        if(login){
            window.location.href= './home.html'
        }


    } catch (error) {
       console.log(error);
        
    }
}