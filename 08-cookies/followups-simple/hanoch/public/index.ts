function handleLoad(){
    getCookie()
}
async function handleCookies(ev){
    ev.preventDefault()
    try {
        const email = ev.target.email.value;
        const password = ev.target.password.value;
        //@ts-ignore
        const {data} = await axios.post('/user/addUser', {email, password});
        const {user} = data;
        console.log(user);
        console.log(data);
        
        
        
        handleWC(user.email)
    } catch (error) {
        console.log(error);
        
    }

}

async function getCookie(){
    try {
        //@ts-ignore
        const {data} = await axios.get('/user/getCookie')
        const {user} = data;
        console.log(user);
        
            const root = document.querySelector('#root');
            if (root){
                const userEmail = user.email;
            root.innerHTML = `welcome ${userEmail}`;
        console.log(data);
            }
    } catch (error) {
        console.log(error);
        
    }
}

function handleWC(userEmail:string){
   
}