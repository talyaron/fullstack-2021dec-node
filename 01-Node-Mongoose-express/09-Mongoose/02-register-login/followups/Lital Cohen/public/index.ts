async function handleRegister(ev:any){
    ev.preventDefault()

    try {
        const email = ev.target.email.value;
        const password = ev.target.password.value;
         console.log(email, password)
//@ts-ignore
         const {data} = await axios.post('/users/register',{email, password})
         console.log(data)
         const {register, error} = data
         console.log(error)
         if(error && error.includes('E11000')) alert ('Email is already registed, Please login')

    } catch (error) {
        console.error(error)
    }
}

async function handleLogin(ev:any){
    ev.preventDefault()

    try {
        const email = ev.target.email.value;
        const password = ev.target.password.value;
         console.log(email, password)
//@ts-ignore
         const {data} = await axios.post('/users/login',{email, password})
         console.log(data)
         const {login, error} = data
         if (error) throw error;

if(login){
    //redirect to another page
    window.location.href = './home.html'
}


         console.log(error)
         if (error) throw error;

    } catch (error) {
        console.error(error)
    }
}