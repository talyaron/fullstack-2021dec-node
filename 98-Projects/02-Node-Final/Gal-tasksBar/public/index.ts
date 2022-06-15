interface user{
    userName: string,
    email: string,
    uid: string,
    password: number
};

interface tasks{
    title: string,
    uid: string,
    description: string,
    date: Date,
}

async function handleAddUser(ev: any) {
    try {
        ev.preventDefault();

        const elements = ev.target.elements;
        const userName = elements.userName.value;
        const email = elements.email.value;
        const password = elements.permissions.value;

        if (!userName || !email || !password)
            throw new Error("Details are required");

        const {
            data
             // @ts-ignore
        } = await axios.post('/api/add-user', {
            userName,
            email,
            password
        });

        const {
            users,
            error
        } = data;
        if (error)
            throw new Error(error);
        renderUsers(users);

    } catch (error) {
        console.error(error);
    }
};


function renderUsers(users: Array < user > ) {
    const renderUsers = document.querySelector("#usersTasks");
}


function handleLoad() {
	try {
		
	} catch (error) {
		console.error(error);
	}
}
