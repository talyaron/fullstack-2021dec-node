
console.log(`connected`)
const editProfileForm = document.querySelector('#editProfileForm') as HTMLFormElement

async function handleGetthisUser() {
    try {
        const userId = getUserIdParams();
        if (userId.match(/^[0-9a-fA-F]{24}$/)) {
            //@ts-ignore
            const { data } = await axios.post('/user/get-user', { userId });
            if (!data) throw new Error("couldn't recieve data from axios POST URL: *** /user/userId ***");
            const { user, error } = data;
            renderUserOnForm(user)
            
            if (!error) throw new Error(error);
        }
        else {
            console.log(`editprofile.ts not a valid id`)
        }

    } catch (error) {
        console.error(error);
    }
}

async function handleEditUser(event) {
    event.preventDefault()
    try {
        const userId = getUserIdParams();
        console.log(userId)
        let { email, username, job, address, profilePic } = event.target.elements;
        email = email.value;
        username = username.value;
        job = job.value;
        address = address.value;
        profilePic = profilePic.value;

        //@ts-ignore
        const { data } = await axios.patch("/user/edit-user", 
           { email,
            username,
            job,
            address,
            profilePic,
            userId
           }
        );

        const { user, error } = data;
            console.log(user)
            console.log(`Changes Saved Succssesfully, redirectiong now...`)
            window.location.href = `./home.html?userID=${userId}`
    } catch (error) {

    }
}

function getUserIdParams(): string {
    const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    const userId: string = urlParams.get("userId");
    return userId;
}

function handleUserProfile() {
    try {
    const userid = getUserIdParams();
        window.location.href = `./userProfile.html?userId=${userid}`;
    } catch (error) {
        console.error(error);
    }
}

function renderUserOnForm(user) {
    console.log(`trying to render form`)
    editProfileForm.email.value = `${user.email}`;
    editProfileForm.username.value = `${user.username}`;
    editProfileForm.job.value = `${user.job}`;
    editProfileForm.address.value = `${user.address}`;

    console.log(`succssfuly rendered to form`)
}