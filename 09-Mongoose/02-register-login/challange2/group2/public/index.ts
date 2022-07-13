async function handleRegister(ev : any) {
    ev.preventDefault();
    try {
        const email = ev.target.email.value;
        const password = ev.target.password.value;

        console.log(email, password);
        //@ts-ignore
        const {data} = await axios.post("/users/register", {email, password});
        const {register, error} = data;
        if (error) 
            throw error;
        console.log(data);

        if (register) {
            window.location.href = `./login.html?userId=${register._id}`;
        }

        if (error && error.includes("E11000")) 
            alert('email is already in use')
    } catch (error) {
        console.error(error)
    }

}

async function handleLogin(ev : any) {
    ev.preventDefault();
    try {
        const name = ev.target.name.value;
        const email = ev.target.email.value;
        const password = ev.target.password.value;

        console.log(name, email, password);
        //@ts-ignore
        const {data} = await axios.post("/users/login", {name, email, password});
        const {login, error} = data;
        if (error) 
            throw error;
        
        if (login) {
            window.location.href = `./profile.html?userId=${login._id}`;
        }

        if (error) 
            throw error;
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

async function handleSaveInfo(ev : any) {
    ev.preventDefault();
    try {
        const name = ev.target.elements.name.value;
        const age = ev.target.elements.age.valueAsNumber;
        const image = ev.target.elements.image.value;

        console.log(name, age, image);
        //@ts-ignore
        const {data} = await axios.post("/users/SaveInfo", {name, age, image});
        const {user, error} = data;
        if (error) 
            throw error;
        
        if (user) {
            window.location.href = `./user.html?userId=${user._id}`;
        }

        if (error) 
            throw error;
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

function getUserId() : string | false {
    try {
        const queryString = window.location.search;
        console.log(queryString);

        const urlParams = new URLSearchParams(queryString);
        console.log(urlParams)
        const userId = urlParams.get("userId");
        // const age = urlParams.get("age");
        // console.log(age);
        return userId;
        
    } catch (error) {
        console.error(error);
        return false;
    }
}

async function onscondPageLoad() {
    try {
        //get params of userId
        const userId = getUserId();

        if (!userId) 
            throw new Error("couldnt find user id in url");
        
        // @ts-ignore
        const {data} = await axios.get(`/users/get-user?userId=${userId}`);

        const {error, user} = data;
        if (error) 
            throw error;
        console.log(user);
        const {name, age, image} = user;

        const root = document.querySelector("#root");
        root.innerHTML = `<h1>Welcome ${name} ${age}</h1>`;

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
