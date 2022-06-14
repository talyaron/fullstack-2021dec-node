function handleGetUser1() {
    try {
        axios.get('/api/user1').then(function (_a) {
            var data = _a.data;
            console.log(data);
            var user = data.user, error = data.error;
            if (error)
                throw new Error(error);
            console.log(user);
            renderUser(user);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetUser2() {
    try {
        axios.get('/api/user2').then(function (_a) {
            var data = _a.data;
            console.log(data);
            var user = data.user, error = data.error;
            if (error)
                throw new Error(error);
            console.log(user);
            renderUser(user);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetUser3() {
    try {
        axios.get('/api/user3').then(function (_a) {
            var data = _a.data;
            console.log(data);
            var user = data.user, error = data.error;
            if (error)
                throw new Error(error);
            console.log(user);
            renderUser(user);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderUser(user) {
    var root = document.querySelector("#root");
    root.innerText = "user " + user.name + " is " + user.age + " years old";
}
