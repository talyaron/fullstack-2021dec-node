
const mainRoot = document.querySelector('#mainRoot')

function getUserIdByParams(): string {
    const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    const userId: string = urlParams.get("userId");
    return userId;
}

async function handleGetUser() {
    try {

        const userId = getUserIdByParams();
        if (userId.match(/^[0-9a-fA-F]{24}$/)) {
            //@ts-ignore
            const { data } = await axios.post('/user/get-user', { userId });
            if (!data) throw new Error("couldn't recieve data from axios POST URL: *** /user/userId ***");
            const { user, error } = data;
            renderUser(user)
            if (!error) throw new Error(error);

        }
        else {
            console.log(`userprofile.ts not a valid id`)
        }

    } catch (error) {
        console.error(error);
    }
}


function handleEditProfile() {
    const userId = getUserIdByParams();
    window.location.href = `./editProfile.html?userId=${userId}`;
}

function renderUser(user) {
    let html = `<img id="userProfilePicture" src="" alt="userProfilePicture">
<p>Username: ${user.username}</p>
<p>Email: ${user.email}</p>
<p>password:</p>
<p>proffesion:${user.job}</p>
<p>address:${user.address}</p>`;

mainRoot.innerHTML = html;
}