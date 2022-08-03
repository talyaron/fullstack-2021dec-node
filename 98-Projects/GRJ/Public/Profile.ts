function getUserId(): string | false {
    try {
      const queryString = window.location.search;
      console.log(queryString);
  
      const urlParams = new URLSearchParams(queryString);
      console.log(urlParams);
      const userId = urlParams.get("userId");
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
      const { data } = await axios.get(`/users/get-user?userId=${userId}`);
  
      const { error, user } = data;
      if (error) throw error;
      console.log(user);
      const { name, age, image } = user;
  
      const nav = document.querySelector("#Navbar");
      nav.innerHTML = `<h1>Hello ${name}! What would you like to do</h1>`;
  
      console.log(data);
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
