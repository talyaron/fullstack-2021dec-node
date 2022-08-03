interface Images {
    image?: string;
    description: string;
    id: string;
  }

  async function handleGetImages(){
      try {
        
          //@ts-ignore
          const {data} = await axios.get("/api/get-all-images");
          const {arrayOfImages, error} = data;
          if (error) throw new Error(error);
          renderImages(arrayOfImages)
          console.log(data)
      } catch (err:any) {
              console.error(err);

      }
  }

  function renderImages(arrayOfImages: Array<Images>) {
    const root1: HTMLImageElement = document.querySelector("#root1");
    const root2: HTMLImageElement = document.querySelector("#root2");
    const root3: HTMLImageElement = document.querySelector("#root3");
    const rootBtn: HTMLElement = document.querySelector("#rootBtn");


    root1.src = `${arrayOfImages[0].image }` ;
    root2.src = `${arrayOfImages[1].image }` ;
    root3.src = `${arrayOfImages[2].image }` ;

    let html = "";
    arrayOfImages.forEach((arrayOfImages) => {
      html += `<p>this picture is ${arrayOfImages.description} and its id is ${arrayOfImages.id}<button onclick="handleDeleteImage()>Delete</button>`
    });
    rootBtn.innerHTML = html;
  }
  
  async function handleDeleteImage(imageId: string) {
    try {
      // send to server the Id of the user that we wnat to delete
      // @ts-ignore
      const { data } = await axios.delete("/api/delete-image", { data: { imageId } });
  
   
       const { arrayOfImages, error } = data;
      console.log("ee")
   if (error) throw new Error(error);
  renderImages(arrayOfImages)
    } catch (error) {
      console.error(error);
    }
  }


  

