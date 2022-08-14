console.log("Connected!");
var catImagesWrapper = document.querySelector('#catImagesWrapper');
console.log(catImagesWrapper);
function handleGetImages() {
    try {
        // @ts-ignore
        axios
            .get('/api/cat-images')
            .then(function (_a) {
            var data = _a.data;
            console.log(data);
            var imageArray = data.imageArray, error = data.error;
            console.log(imageArray);
            if (error)
                throw new Error(error);
            var html = '';
            imageArray.forEach(function (image) {
                html += "<img src=\"" + image.src + "\"> <button onclick='handleDelete(\"" + image.id + "\")'>DELETE</button>";
            });
            catImagesWrapper.innerHTML = html;
        })["catch"](function (err) { return console.error(err); });
    }
    catch (error) {
        console.error(error);
    }
}
