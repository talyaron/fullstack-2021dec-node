

  function handleLoadData() {
    loadData();
  }
  
  function handleAddUser() {
   addUser();
  }
  
  async function loadData() {
    try {
      // @ts-ignore
      const { data } = await axios.get("/api/AllUsers");
  
      const { users, error } = data;
      if (error) throw new Error(error);
  
      renderData(users);
    } catch (err: any) {
      console.error(err);
    }
  }
  
  async function addUser() {
    try {
      // @ts-ignore
      const { data } = await axios.get("/api/addUser");
  
      const { users, error } = data;
      if (error) throw new Error(error);
  
      renderData(users);
    } catch (err: any) {
      console.error(err);
    }
  }
  
  function renderData(user) {
    const table: HTMLElement = document.querySelector("table");
  
    table.innerHTML = `<img src= ${user.src} alt="user"/>`;
  }
  
  
  