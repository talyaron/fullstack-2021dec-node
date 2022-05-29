


function getUser() {
    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);

    const userId = urlParams.get('userId')
    console.log(userId);
}

getUser();