async function handleGetUser1() {
  try {

    console.log('ready')

    const { data } = await axios.get("/api/user1");
    console.log(data)
    const { user, error } = data
    if (error) throw new Error('error')
    console.log(user)
    renderUser(user)

  } catch (error) {
    console.log(error)
  }
}

function handleGetUser2() {
  try {
    axios.get('/api/user2').then(({ data }) => {

      console.log(data)
      const { user, error } = data
      if (error) throw new Error('error')
      console.log(user)
      renderUser(user)
    })
  } catch (error) {
    console.log(error)
  }
}

async function handleGetAllUsers() {
  try {
    const { data } = await axios.get('/api/getUsers')
    console.log(data)
    const { users, error } = data
    console.log(users)

    renderAllUsers(users)
  } catch (error) {
    console.log(error)
  }
}




function renderUser(user) {
  const root: HTMLDivElement = document.querySelector('#root');
  root.innerText = `${user.name} is ${user.age} years old`
}

function renderAllUsers(users) {
  const root: HTMLDivElement = document.querySelector('#root');
  let html = ""
  users.forEach((user) => {
    html += ` <p> ${user.name} is ${user.age} years old <button onclick='handleDelete("${user.id}")'>Delete</button> </p> `
  });
  root.innerHTML = html
}

async function handleDelete(userId:string) {
  try {
    console.log(userId)
const {data} = await axios.delete('/api/delete-user', {data:{userId}})
const {users, error} = data
console.log(users)
renderAllUsers(users)
  } catch (error) {
    console.error(error)
  }
}