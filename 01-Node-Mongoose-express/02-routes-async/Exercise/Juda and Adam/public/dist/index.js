function handleGetImg1() {
    try {
        console.log("img");
        axios.get("/api/img1")
            .then(function (_a) {
            var data = _a.data;
            console.log(data);
            var img = data.img, error = data.error;
            if (error)
                throw new Error(error);
            console.log(img);
            renderUser(imgs);
        })["catch"](function (err) { return console.error(err); });
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetImg2() {
    try {
        console.log("img2");
        var data = axios.get("/api/img2").data;
        console.log(data);
        var user = data.user, error = data.error;
        if (error)
            throw new Error(error);
        renderUser(imgs);
        console.log("get user After the end of fetch (3)");
    }
    catch (error) {
        console.error(error);
    }
}
function renderUser(img) {
    var root = document.querySelector("#root");
}
