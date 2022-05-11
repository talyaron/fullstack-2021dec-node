interface User {
    name: string;
    age: number;
    id: string;
  }
  
  function handleGetUser1() {
    try {
      console.log("get user 12");
      renderLoader();
      // @ts-ignore
      axios
        .get("/api/user1")
        .then(({ data }) => {
          console.log(data);
          const { user, error } = data;
          if (error) throw new Error(error);
          console.log(user);
          renderLoader();
          renderUser(user);
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.error(error);
    }
  }
  function renderUser(user: User) {
    const root: HTMLElement = document.querySelector("#root");
  
    root.innerHTML = `user ${user.name} is ${user.age} years old`;
  }

  async function handleDelete(userId: string) {
    try {
      console.log(userId);
  
      //@ts-ignore
      renderLoader()
      const { data } = await axios.delete("/api/delete-user", { data: { userId } });
      renderLoader()
      const { users, error } = data;
      if (error) throw new Error(error);
      console.log(users);
      renderUsers(users);
       
    } catch (error) {
      console.error(error);
    }
  }