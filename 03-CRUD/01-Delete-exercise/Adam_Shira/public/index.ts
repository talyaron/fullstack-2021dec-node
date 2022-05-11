interface image {
    name: string;
    src: string;
    id: string;
  }
  
  async function handleGetImg1() {
    try {
      // @ts-ignore
       await axios
        .get("/api/img1")
        .then(({ data }) => {
          console.log(data);
          const { image, error } = data;
          if (error) throw new Error(error);
          console.log(image);
          renderImg(image);
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.error(error);
    }
  }
  
  async function handleGetImg2() {
    try {
      // @ts-ignore
      const { data } = await axios.get("/api/img2");
      console.log(data);
      const { image, error } = data;
      if (error) throw new Error(error);
      renderImg(image);

    } catch (error) {
      console.error(error);
    }
  }
  

  


  
  function renderImg(image: image) {
    const root: HTMLElement = document.querySelector("#root");
    root.innerHTML = `<img src= ${image.src} alt="image"/>`;
  }
  

  

  
//   async function handleDelete(userId: string) {
//     try {
//       console.log(userId);
  
//       //@ts-ignore
//       renderLoader()
//       const { data } = await axios.delete("/api/delete-user", { data: { userId } });
//       renderLoader()
//       const { users, error } = data;
//       if (error) throw new Error(error);
//       console.log(users);
//       renderUsers(users);
       
//     } catch (error) {
//       console.error(error);
//     }
//   }
  