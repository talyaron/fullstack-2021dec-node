// const arr = [
//     { id: 11, name: "Marina", hobbie: "Fishing" },
//     { id: 23, name: "Dorit", hobbie: "Druming" },
//     { id: 36, name: "Meir", hobbie: "Programing" }
// ]

// const user = arr.find(item => item.name == "Marina")
// console.log(user)

const root = document.querySelector('.root')

// let html = ''

// const getHobbie = (userId) => {
//     // const user = arr.find(item => item.id == userId)
//     // console.log(user.hobbie)
//     const user = arr.filter(item => item.id == userId)
//     console.log(user[0].hobbie)
// }

// arr.forEach(element =>
//     html += `
//     <div onclick="getHobbie('${element.id}')">${element.name}</div>
//     `)

// root.innerHTML = html;

const getData = async () => {
    const { data } = await axios.get('/get-index')
    console.log(data)

    render(data)
}

getData()

const hendlePostData = async (e) => {
    e.preventDefault();

    let { name, hobbie } = e.target.elements

    name = name.value
    hobbie = hobbie.value

    console.log(name, hobbie)

    const { data } = await axios.post('/post-data', { name, hobbie })
    console.log(data)

    e.target.reset()
}

const getObj = async (userId) => {
    console.log(userId)

    const { data } = await axios.post('/get-one-user', { userId })
    console.log(data)
}

// root.addEventListener('click', (e) => {

// })

const render = (arr) => {
    let html

    arr.forEach(element =>
        html += `
            <div onclick="getObj('${element._id}')">${element.name}</div>
            `)

    root.innerHTML = html;
}