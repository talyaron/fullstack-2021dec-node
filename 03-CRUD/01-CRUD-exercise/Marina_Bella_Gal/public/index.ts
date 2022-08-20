
interface Img{
    name:string,
    src:string
    id: string;
  }

  async function handleGetImages() {
  try {
    const { data } = await axios.get("/api/getImgs");
    const { img, error } = data;
    if (error) throw new Error(error);
    renderImg(img);

  } catch (error) {
    console.error(error);
  }
}

// function renderImgs() {
//     let root: HTMLElement = document.querySelector("#root");
//     root.innerHTML = `<img src= ${Img.src} alt="meme"/>`;

//     renderLoader();

//     // let html = "";
//     // imgs.forEach((img) => {
//     //   html += `<img ${img.name} ${img.src}> <button onclick='handleDelete("${img.id}")>DELETE</button>`;
//     // });
//     // root.innerHTML = html;
//   }
  
  function renderImg(imgs: Img) {
    const root: HTMLElement = document.querySelector("#root");
  
    root.innerHTML = `${imgs.name} ${imgs.src}`;
  }

  