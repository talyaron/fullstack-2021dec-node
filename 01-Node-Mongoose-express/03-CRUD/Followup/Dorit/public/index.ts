interface Image {
    src: string;
    desc: string;
    id: string;
  }
  function handleGetAllImages() {
    getAllImages();
  }
  
  async function getAllImages() {
    
    try {
      // @ts-ignore
      const { data } = await axios.get("/api/get-images");
      console.log(data);
      const { images, error } = data;
      if (error) throw new Error(error);
  
      renderImages(images);
    } catch (error: any) {
      console.error(error);
    }
  } 

  function renderImages(images: Array<Image>) {
    const root: HTMLElement = document.querySelector("#root");
 
    let html = "";
    images.forEach((image) => {
      html += `<img src= "${image.src}"><p>"${image.desc}"</p><button onclick='handleDelete("${image.id}")'>DELETE</button>`;
    });
    root.innerHTML = html;
  }

  async function handleDelete(imageId: string) {
    try {
      console.log(`imageId to delete in client: ${imageId}`);
  
      //@ts-ignore
      const { data } = await axios.delete("/api/delete-image", { data: { imageId } });
      const { images, error } = data;
      if (error) throw new Error("data not sent");
      console.log(images);
      renderImages(images);
       
    } catch (error) {
      console.error(error);
    }
  }

