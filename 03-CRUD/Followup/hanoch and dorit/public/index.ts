
async function handleGetPictures(){
    try {
    const {data} = await axios.get("/api/get-pictures")
    const { pictures, error } = data;
    if (error) throw new Error(error);

    renderPictures(pictures);
  } catch (err: any) {
    console.error(err);
  }

}

function renderPictures(pictures){
    const root: HTMLElement = document.querySelector("#root");

    let html = "";
    pictures.forEach((picture) => {
      html += ` <img src="${picture.src}" width="200px" height="200px"> <br> <p>${picture.dis}</p>  <button onclick='handleDelete("${picture.id}")'>DELETE</button> <br> <br>`;
    });
    root.innerHTML = html;

}
function handleDelete(id:string){
  

}