function handleImg1() {
    try {
        axios
            .get("/api/img1")
            .then(function (_a) {
            var data = _a.data;
            console.log(data);
            var img = data.img, error = data.error;
            if (error)
                throw new Error(error);
            console.log(img);
            renderImg(img);
        })["catch"](function (err) { return console.error(err); });
    }
    catch (error) {
        console.error(error);
    }
}
function handleImg2() {
    try {
        axios
            .get("/api/img2")
            .then(function (_a) {
            var data = _a.data;
            console.log(data);
            var img = data.img, error = data.error;
            if (error)
                throw new Error(error);
            console.log(img);
            renderImg(img);
        })["catch"](function (err) { return console.error(err); });
    }
    catch (error) {
        console.error(error);
    }
}
function renderImg(img) {
    var image = document.querySelector("#imageToShow");
    image.src = "" + img;
}
