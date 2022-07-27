
async function handleRegister(ev:any){
    try {
        ev.preventDefault()
        const email = ev.target.email.value;
        const password = ev.target.password.value;
        //@ts-ignore
        const {data} = await axios.post('/users/register', {email, password});
        console.log(data);
        if(!data) throw new Error;
        } catch (error) {
        console.log(error);
        
    }
}

async function handleLogin(ev:any){
    try {
        ev.preventDefault();
        const email = ev.target.email.value;
        const password = ev.target.password.value;
        //@ts-ignore
        const {data} = await axios.post('/users/login', {email, password});
        const {ok} = data;
        if(ok){
            window.location.href = './events.html';
        }

    } catch (error) {
        console.log(error);
        
    }
}



async function handleCoachLogin(ev:any){
    try {
        ev.preventDefault();
        const email = ev.target.email.value;
        const password = ev.target.password.value;
        //@ts-ignore
        const {data} = await axios.post('/users/coachLogin', {email, password});
        const {ok} = data;
        if(ok){
            window.location.href = './coach.html';
        }

    } catch (error) {
        console.log(error);
        
    }
}