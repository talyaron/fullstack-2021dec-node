async function getProfile(){
    try {
        const userId = getThatuserByParams()
        const user = await handleGetthisUserHome()
        const welcome = document.querySelector('#welcome')
        welcome.innerHTML = `<h1>welcome ${user.username}</h1>`
    } catch (error) {
        console.log(error);
    }
  }
  

function getThatuserByParams{
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString);
    const userId = urlParams.get("userID");
    return userId
}

async function handleGetthisUserHome() {
    try {
        const userId = getThatuserByParams();
        if (userId.match(/^[0-9a-fA-F]{24}$/)) {
            //@ts-ignore
            const { data } = await axios.post('/user/get-user', { userId });
            if (!data) throw new Error("couldn't recieve data from axios POST URL: *** /user/userId ***");
            const { user, error } = data;
            return user
            
            if (!error) throw new Error(error);
        }
        else {
            console.log(`home.ts not a valid id`)
        }

    } catch (error) {
        console.error(error);
    }
}