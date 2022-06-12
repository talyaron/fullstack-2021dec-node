const root = document.querySelector('.root')

async function hadleGetDataClient() {
    const { data } = await axios.get('/get-data') // "/get-data"
    console.log(data)

    const { courses } = data
    console.log(courses)

    // let html = "";

    const html = courses.map((course) => {
        return `
            <div>
                <h1>${course.title}</h1>
                <p>${course.price}</p>
            </div>
        `
    }).join('')

    root.innerHTML = html
}