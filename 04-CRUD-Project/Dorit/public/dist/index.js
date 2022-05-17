function handleGetCake(event) {
    event.preventDefault();
    console.dir(event);
    console.dir(event.target.elements.cakeName.value);
    // try {
    //     const cakeName:string = event.target.value;
    //     console.log(`${cakeName}`)
    //     // @ts-ignore
    //     const { data } = await axios.put('/api/get-cake', { cakeName });
    //     const { fullCake, error } = data;
    //     console.log(fullCake);
    //     if (error) throw new Error(error);
    //     renderFullCake(fullCake);
    // } catch (error) {
    //     console.error(error);
    // } 
}
function renderFullCake(fullCake) {
    var root = document.querySelector("#root");
    var html = "";
    html = "<div id=\"name\">fullCake.name</div>";
    var ingNo = fullCake.ingredients.length;
    for (var i = 0; i < ingNo; i++) {
        html += "<div class=\"ingredients\">" + fullCake.ingredients[i] + "</div>";
    }
    var preNo = fullCake.prepareMode.length;
    for (var j = 0; j < preNo; j++) {
        html += "<div class=\"prepares\">" + fullCake.prepareMode[j] + "</div>";
    }
    root.innerHTML = html;
}
