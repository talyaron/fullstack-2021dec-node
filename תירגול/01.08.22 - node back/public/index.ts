const getAllTasks = async () => {
    const { data } = await axios.get('/api/get-all-tasks')
    console.log(data)

    renderTasks(data)
}

const saveTask = async (ev) => {
    ev.preventDefault();

    const title = ev.target.elements.title.value
    const desc = ev.target.elements.desc.value

    console.log(title, desc)

    const { data } = await axios.post('/api/save-task', { title, desc })
    console.log(data)

    renderTasks(data)
}


const renderTasks = (tasks) => {
    console.log(tasks)

    let html = tasks.map(task => {
        return `
            <div>
                <h2>${task.title}</h2>
                <p>${task.description}</p>
            </div>
        `
    }).join('');

    document.querySelector('.root').innerHTML = html
}