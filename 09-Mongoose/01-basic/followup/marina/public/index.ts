let axios;

async function getPaintings() {
  try {
    const { data } = await axios.get("/art/painting-get");
    console.log(data);

    const { ok, paintings } = data;
    console.log({ ok, paintings });

    if (paintings) {
      renderPainting(paintings);
    }

  } catch (error) {
    console.error(error);
  }
}

async function handleAddAPainting(e) {
  try {
    e.preventDefault();

    let { artist, title, year, technic, url } = e.target.elements;
    artist = artist.value;
    title = title.value;
    year = year.valueAsNumber;
    technic = technic.value;
    url = url.value;

    console.log(artist, title, year, technic, url);
    document.querySelector("form").reset();

    const { data } = await axios.post("/art/painting-add", {
      artist,
      title,
      year,
      technic,
      url,
    });
    console.log(data);

    //   artist: Vitaliy Koshlyak
    //   title: A Woman
    //   oil
    //   1983
    //   https://i.pinimg.com/564x/b3/a3/c4/b3a3c4d5758ee79169095993fba0a583.jpg
    
  } catch (error) {
    console.error(error);
  }
}


async function handleUpdateTitle(e: any, paintingID: string) {
  try {
    e.preventDefault();
    console.log(e, paintingID);
    const title = e.target.value;

    const { data } = await axios.patch("/art/painting-update", {paintingID, title});
    console.log(data);

  } catch (error) {
    console.error(error.message);
  }
}


async function handleDelete(paintingID: string) {
    try {

        const {data} = await axios.delete('/art/painting-delete', {data: {paintingID}});
        console.log(data);

    } catch (error) {
        console.error(error.message);
    }
}

async function handleSelectTechnic(e: any) {
  try {
    e.preventDefault();
    const technic = e.target.value;
    console.log(technic);

    const { data } = await axios.get(`/art/painting-by-technic?technic=${technic}`);
    const { paintiselectOil, selectCharcoalng } = data;

    renderPainting(data);    
    console.log(data);

  } catch (error) {
    console.error(error.message);
  }
}


function renderPainting(paintings) {
  const root = document.querySelector("#root");
  let html = "";
  paintings.forEach((painting) => {
    html += `
            <div class="card-conteiner">
                <div class='card'>
                    <p class="title">${painting.artist}</p>
                    <p class="title">${painting.title}</p>
                    <img src="${painting.url}">
                    <p><span id="year">${painting.year}</span></p>                                     
                </div>
                <input type="text" value="${painting.title}" onblur="handleUpdateTitle(event, '${painting._id}')">
                <button onclick="handleDelete('${painting._id}')">Hide</button>
            </div>               
               `;
  });

  root.innerHTML = html;
}

document.querySelector<HTMLElement>("#scrollToTopBtn").addEventListener("click", () => {
    try {
        scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    } catch (error) {
        console.error(error);
    }
})