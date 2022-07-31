function handleLoad() {
    try {
        // //@ts-ignore const { data } = await axios.get("/data/get-all-data");
        // console.log(data); stocksAPI()

    } catch (error) {
        console.error(error)
    }
}

async function stocksAPI(ev) {
    try {
        ev.preventDefault();

        const userInput = ev.target.elements.userInput.value;
        console.log(userInput);
        //@ts-ignore

        const {data} = await axios.get(`https://cloud.iexapis.com/stable/tops?token=pk_421d8331d521478798685db9b5be24fa&symbols=${userInput}`);
        console.log(data);
        render(data)


    } catch (error) {
        console.error(error);
    }
};

function render(data) {
            
    const root = document.querySelector("#root");
    root.innerHTML = `<h3>${data}</h3>`;
}

async function getUserByCookie() {
    try{
   
   
    //@ts-ignore
    const { data } = await axios.get("/users/get-user");
    console.log(data);
    const {user} = data;
    if(!user){
        throw new Error('User not found');
    }

    const usernameDB = user.username;
    const root = document.getElementById('root');
    if(root){
        root.innerHTML = `<h1>Welcome ${usernameDB}</h1>`
    }
    } catch (error) {
        console.error(error)
    }
}