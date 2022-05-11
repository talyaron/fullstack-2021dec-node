interface image{
    name:string;
    src:string;
}


function handleGetImg1() {
  try {
    renderLoader();
    // @ts-ignore
    axios
      .get("/api/img1")
      .then(({ data }) => {
        console.log(data);
        const { image, error } = data;
        if (error) throw new Error(error);
        console.log(image);
        renderLoader();
        renderUser(image);
      })
      .catch((err) => console.error(err));
  } catch (error) {
    console.error(error);
  }
}

async function handleGetImg2() {
  try {
    renderLoader();
     // @ts-ignore
    const { data } = await axios.get("/api/img2");
    renderLoader();
    console.log(data);
    const { image, error } = data;
    if (error) throw new Error(error);

    renderUser(image);
  } catch (error) {
    console.error(error);
  }
}

function renderUser(img: image) {
  const root: HTMLElement = document.querySelector("#root");

  root.innerHTML = `user ${img.name} is ${img.src} years old`;
}

async function handleDelete(userId: string) {
  try {
    console.log(userId);

    //@ts-ignore
    renderLoader()
     // @ts-ignore
    const { data } = await axios.delete("/api/delete-user", { data: { userId } });
    renderLoader()
    const { image, error } = data;
    if (error) throw new Error(error);
    renderUsers(image);

  } catch (error) {
    console.error(error);
  }
}