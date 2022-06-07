var form = document.querySelector('form');
form.addEventListener('keyup', function (e) {
    var divSongs = document.querySelector('.songs');
    var inputEl = document.createElement('input');
    inputEl.setAttribute("type", "text");
    inputEl.setAttribute("name", "songName");
    inputEl.setAttribute("placeholder", "Enter song name");
    if (e.key === "Control") {
        divSongs.append(inputEl);
        inputEl.focus();
    }
});
function hendleSubmit(e) {
    e.preventDefault();
    var obj = {};
    var songs = [];
    for (var _i = 0, _a = e.target; _i < _a.length; _i++) {
        var field = _a[_i];
        if (field.type !== "submit") {
            if (field.name.includes("songName")) {
                if (field.value.length > 0) {
                    songs.push(field.value);
                }
            }
            else if (field.value.length > 0) {
                obj[field.name] = field.value;
            }
        }
    }
    obj["songs"] = songs;
    console.log(obj);
}
