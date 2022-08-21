
  // function handleGetMeme1() {
  //   try {
  //     axios
  //     .get("/api/meme1")
  //     .then(({ data }) => {
  //       console.log(data);
  //       const { meme, error } = data;
  //       if (error) throw new Error(error);
  //       renderMeme(meme);
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  
  // function handleGetMeme2() {
  //   try {
  //     axios
  //     .get("/api/meme2")
  //     .then(({ data }) => {
  //       console.log(data);
  //       const { meme, error } = data;
  //       if (error) throw new Error(error);
  //       renderMeme(meme);
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  
  // function handleGetMeme3() {
  //   try {
  //     axios
  //     .get("/api/meme3")
  //     .then(({ data }) => {
  //       console.log(data);
  //       const { meme, error } = data;
  //       if (error) throw new Error(error);
  //       renderMeme(meme);
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  
  function handleGetmemeSurprise() {
    try {
      axios
      .get("/api/memeSurprise")
      .then(({ data }) => {
        console.log(data);
        const { meme, error } = data;
        if (error) throw new Error(error);
        renderMeme(meme);
      });
    } catch (error) {
      console.error(error);
    }
  }
  
//   function choosemMeme() {
//     const randomMeme = Math.floor(Math.random() * memes.length);
//     // console.log(randomMeme);
//   }
  
  function renderMeme(meme: meme) {
    const root: HTMLElement = document.querySelector("#root");
  
    root.innerHTML = `<img src= ${meme.src} alt="meme"/>`;
  }
  
  