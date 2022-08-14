
function handleLoad() {
  try {
    getUserByCookie();
    getItems();
  } catch (error) {
    console.error(error);
  }
}

async function getItems() {
  try {
    const { data } = await axios.get("/items/get-item");
    const { item, user } = data;
    console.log(data);
    console.log(user);

    renderItem(item);
    
  } catch (error) {
    console.error(error);
  }
}


async function handleAddItem(e) {
  try {
    e.preventDefault();
    let { title, year, url } = e.target.elements;
    title = title.value;
    year = year.value;
    url = url.value;

    const { data } = await axios.post("/items/add", { title, year, url });
    const { item, error } = data;

    if (error) throw new Error(error);
    console.log(item);
    // e.target.reset();
    renderItem(item);

  } catch (error) {
    console.error(error);
  }
}


function renderItem(item) {
  try {
    const root = document.querySelector("#root");
    let html = "";
    item.forEach((element) => {
      html += `
            <div class="card-container">
                <div class='card'>
                    <p class="title">${element.title}</p>
                    <img src="${element.url}">
                    <p><span id="year">${element.year}</span></p>                                     
                </div>
            </div>               
               `;
    });
    root.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}


