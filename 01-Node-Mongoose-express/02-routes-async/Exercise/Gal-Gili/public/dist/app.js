console.log("Connected!");
function handleGetClick() {
    try {
        axios.get("/api/randomImage").then(function (_a) {
            var data = _a.data;
            console.log(data);
            var imagetry = data;
            var picture = data.picture, error = data.error;
            if (error)
                throw new Error(error);
            console.log(imagetry);
            renderPicture(picture);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderPicture(picture) {
    var image = document.querySelector("#imageToChange");
    image.src = "" + picture.src;
}
