function handleGetImg1() {
    try {
      console.log("img");
      axios.get("/api/img1")
        .then(({ data }) => {
          console.log(data);
          const { img, error } = data;
          if (error) throw new Error(error);
          console.log(img);
          renderUser(imgs);
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.error(error);
    }
  }
 
 function handleGetImg2() {
    try {
      console.log("img2");

      const { data } =  axios.get("/api/img2");
      console.log(data)
      const { user, error } = data;
      if (error) throw new Error(error);
     
      renderUser(imgs);
  
      console.log("get user After the end of fetch (3)");
    } catch (error) {
      console.error(error);
    }
  }
  
  
function renderUser(img: any) {
    const root: HTMLElement = document.querySelector("#root");
}