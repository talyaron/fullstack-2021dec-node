

// function makeImage() {
//    let img = document.innerHTML('img')
//    img.src = images[index];
//    document.getElementById('content').appendChild(img);
// }

async function handleGetImg1() {
    try {
      console.log("get image1");
    console.log("get user After fetch (2)");
      
      
      const { data } = await axios.get("/api/image1");
      console.log(data)
      const { image, error } = data;
    console.log("get user After fetch (2.5)");
      
      if (error) throw new Error(error);
     
      renderImg(image);
      console.log("get user After the end of fetch (3)");

    } catch (error) {
      console.error(error);
    }
  }
  
  function handleGetImg2() {
    try {
      axios.get("/api/image2").then(({ data }) => {
        console.log(data);
        const { image, error } = data;
        if (error) throw new Error(error);
        renderImg(image);
      });
    } catch (error) {
      console.error(error);
    }
  }


function renderImg(image: Image) {
    const root: HTMLElement = document.querySelector("#root");
    root.innerHTML = `Hi! this cat:${image.src} is ${image.name} `;
  }