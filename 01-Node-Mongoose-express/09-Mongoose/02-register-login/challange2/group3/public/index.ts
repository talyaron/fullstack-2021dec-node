async function handleRegister(ev : any) {
    ev.preventDefault();
    try {
        const email = ev.target.elements.email.value;
        const password = ev.target.elements.password.value;

        // @ts-ignore
        const {data} = await axios.post("/users/register", {email, password});
        const {register, error} = data;

        if (error) 
            throw error;
        
        if (register) {
            window.location.href = "/login.html";
        }

    } catch (error) {
        console.error(error);
    }
};

async function handleLogin(e) {
    e.preventDefault();
    try {
        let {email, password} = e.target.elements;
        email = email.value;
        password = password.value;

        // @ts-ignore
        const {data} = await axios.post("/users/login", {email, password});
        const {user, login, error} = data;
        console.log(user);
        console.log("This is the logged in USER", user);

        console.log("This is the logged in DATA", data);

        if (login) {
            window.location.href = `./profile.html?userId=${user._id}`;
        }
    } catch (error) {
        console.error(error);
    }
};

function getUserId() : string | false {
    try {
        const queryString = window.location.search;
        console.log(queryString);

        const urlParams = new URLSearchParams(queryString);
        console.log(urlParams)
        const userId = urlParams.get("userId");
        console.log(userId);

        return userId;
    } catch (error) {
        console.error(error);
        return false;
    }
}

async function onscondPageLoad() {
    try {
        // get params of userId
        const userId = getUserId();

        if (!userId) 
            throw new Error("couldnt find user id in url");
        
        // @ts-ignore
        const {data} = await axios.get(`/users/get-user?userId=${userId}`);

        const {error, user} = data;
        if (error) 
            throw error;
        console.log(user);
        const {name} = user;

        const userName = document.querySelector("#userName");
        userName.innerHTML = `<h1>Welcome  ${name}</h1>`;

        console.log(data);
    } catch (error) {
        console.log(error);
    }
};
