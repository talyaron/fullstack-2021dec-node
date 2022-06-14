function handleGetUser1(){
    
    try {
        
        axios.get('/api/user1').then(({data})=>{
            console.log(data);
            const {user, error} = data;
            if (error) throw new Error(error)
            console.log(user)
            renderUser(user)
        })
    } catch (error) {
        console.error(error);
    }
}

function handleGetUser2(){
    
    try {
        
        axios.get('/api/user2').then(({data})=>{
            console.log(data);
            const {user, error} = data;
            if (error) throw new Error(error)
            console.log(user)
            renderUser(user)
        })
    } catch (error) {
        console.error(error);
    }
}

function handleGetUser3(){
    
    try {
        
        axios.get('/api/user3').then(({data})=>{
            console.log(data);
            const {user, error} = data;
            if (error) throw new Error(error)
            console.log(user)
            renderUser(user)
        })
    } catch (error) {
        console.error(error);
    }
}
function renderUser(user:User) {
    const root: HTMLElement =document.querySelector("#root");
    root.innerText = `user ${user.name} is ${user.age} years old`;
}