console.log(`Connected!`)

function handleGetClick() {
    try {
        axios.get("/api/randomImage").then(({ data }) => {
          console.log(data);
          const imagetry = data;
          const { picture, error } = data;
          if (error) throw new Error(error);
          console.log(imagetry);
          renderPicture(picture);
        });
      } catch (error) {
        console.error(error);
      }
}

function renderPicture(picture) {
    const image: HTMLImageElement = document.querySelector("#imageToChange");

    image.src = `${picture.src}`;
  }
  