function handleGetmeme1() {
  try {
    axios.get("/meme1")
      .then(({ data }) => {
        console.log(data);
        const { memes, error } = data;
       
        if (error) throw new Error(error);
        console.log(memes);
        rendermeme(memes);
      })
      .catch((err) => console.error(err));
  } catch (error) {
    console.error(error);
  }
}

async function handleGetmeme2() {
  try {
    const { data } = await axios.get("/meme2");
    console.log(data)
    const { memes, error } = data;
    if (error) throw new Error(error);
    rendermeme(memes)
  } catch (error) {
    console.error(error);
  }
}

function handleGetmeme3() {
  try {
    axios.get("/meme3")
      .then(({ data }) => {
        console.log(data);
        const { memes, error } = data;
       
        if (error) throw new Error(error);
        console.log(memes);
        rendermeme(memes);
      })
      .catch((err) => console.error(err));
  } catch (error) {
    console.error(error);
  }
}

function rendermeme(meme:img) {
    const image: HTMLImageElement = document.querySelector("#imageToChange");
    image.src = `${meme.src}`;
   
  }