
import axios from "axios"

async function getRandomSpaceGif() {
    try {
      console.log("getRandomSpaceGif");
    console.log("get Gif After fetch (2)");
      
      
      const { data } = await axios.get("/api/SpaceGif");
      console.log(data)
      const { gifUrl, error } = data.gifUrl;
      console.log(gifUrl);
    console.log("get GIF After fetch (2.5)");
      
      if (error) throw new Error(error);
     
      placeSpaceGifOnDiv(gifUrl);
      console.log("get GIF After the end of fetch (3)");

    } catch (error) {
      console.error(error);
    }
  }


function placeSpaceGifOnDiv(spaceGif) {
    const spaceGifDiv: HTMLElement = document.querySelector("#spaceGif");
    spaceGifDiv.innerHTML = `<img src="${spaceGif}" alt="" srcset=""/>`;
    
  }


