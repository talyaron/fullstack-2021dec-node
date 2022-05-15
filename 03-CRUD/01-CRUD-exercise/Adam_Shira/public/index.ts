interface Image {
    name: string;
    src: string;
    id: string;
  }
  

async function handleGetImg1() {
    try {
      // @ts-ignoreb
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

  function handleGetAllImages() {
    getAllImgs();
  }

  async function handleDelete(Id: string) {
    try {
      // send to server the Id of the user that we wnat to delete
      // @ts-ignore
      const { data } = await axios.delete('/api/delete-user', { data: { Id } });
  
      const { users, error } = data;
      if (error) throw new Error(error);
  
      renderUsers(users);
    } catch (error) {
      console.error(error);
    }
  }
  


  
  async function getAllImgs() {
    try {
      // @ts-ignore
      const { data } = await axios.get("/api/get-imgs");
      console.log(data);
  
      const { images, error } = data;
      if (error) throw new Error(error);
  
      renderAllImgs(images);
    } catch (err: any) {
      console.error(err);
    }
  }
  
  
  function renderImg(images) {
    const root: HTMLDivElement = document.querySelector("#root");
    console.log(images.src)
    root.innerHTML = `<img src="${images.src}" alt="image"/>`;
  }
  
  function renderAllImgs(images: Array<Image>) {
    const root: HTMLElement = document.querySelector("#root");
  
    let html = "";
    images.forEach((image) => {
      html += `<p>image ${image.name} is ${image.src} years old <button onclick='handleDelete("${image.id}")'>DELETE</button></p>`;
      html += `<img src="${image.src}" alt="image"/>`;

    //   root.innerHTML = `<img src="${images.src}" alt="image"/>`;
    });
    root.innerHTML = html;
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
  