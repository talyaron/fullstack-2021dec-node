function getUserId(): string | false {
  try {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const userId = urlParams.get("userId");
    console.log(userId)
    return userId;
  } catch (error) {
    console.error(error);
    return false;
  }
}


async function onscondPageLoad() {
  try {
    //get params of userId
    const userId = getUserId();

    if (!userId) throw new Error("couldnt find user id in url");

    // @ts-ignore
    const { data } = await axios.post("/profile/get-name", { userId });
    const { error, userDB } = data;
    console.log(data);
    if (error) throw error;
    const name = data.name


    const email = data.email
    if (name) {
      const nav = document.querySelector("#Navbar");
      nav.innerHTML = `<img
      src="https://toppng.com/uploads/preview/medical-symbol-11563573249uiwcpj6pbe.png"/>
      <h1>Hello ${name}! What would you like to do?</h1>`;
    } else {
      const nav = document.querySelector("#Navbar");
      nav.innerHTML = `<img src="https://toppng.com/uploads/preview/medical-symbol-11563573249uiwcpj6pbe.png"/>
      <h1>Hello ${email}! What would you like to do?</h1>`;
    }

  } catch (error) {
    console.log(error);
  }
}

function renderUsers(users) {
  const html = users
    .map((user) => {
      console.log(user);
      return `<div>${user.username} 
          <input type='text' placeholder='role' value="${user.role}" onblur='handleUpdate(event, "${user._id}")'/>
          <button onclick='handleDelete("${user._id}")'>DELETE</button>
          </div>`;
    })
    .join("");
  console.log(html);

  document.getElementById("users").innerHTML = html;
}
