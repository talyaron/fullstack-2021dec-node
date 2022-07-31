function renderUsers(users) {
    var html = users
        .map(function (user) {
        console.log(user);
        return "<div>\n                <form>\n            \n                </form>\n            </div>";
    })
        .join("");
    console.log(html);
    document.getElementById("users").innerHTML = html;
}
