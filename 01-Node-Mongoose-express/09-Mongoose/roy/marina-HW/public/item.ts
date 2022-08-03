let slider: any = document.querySelector("#item-slider");
let currentValue: any = document.querySelector("#current-value");

function handleLoad() {
  try {
    // let e;
    getProduct();
    // handleRange(e);
  } catch (error) {
    console.error(error);
  }
}

async function getProduct() {
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


async function handleRange(e) {
  try {
    let year = e.target.value;
    console.log(year);
    currentValue.innerText = year;

    const { data } = await axios.get(`/items/range-by-year?year=${year}`);
    const { year1980, year1981, year1982, year1983, yearDB } = data;

    console.log(year1980);
    console.log(year1983);
    console.log(year1981);
    console.log(year1982);
    console.log(year1983);

    // console.log(yearDB);

    // renderItem(year1980);
    // renderItem(year1981);
    // renderItem(year1982);
    // renderItem(year1983);

    // renderItem(yearDB);

    if (1980){
      renderItem(year1980);
    } else if(1981) {
      renderItem(year1981);
    } else if(1982) {
      renderItem(year1982);
    } else if(1983) {
      renderItem(year1983);
    }

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

// slider.addEventListener("input", async (e) => {
//   try {
//     const year: any = e.target.value;
//     currentValue.innerText = year;
//     console.log(year);

//     if (year) {
//       const { data } = await axios.get(`/items/range-by-year?year=${year}`);
//       const { year1980, year1981, year1982, year1983, yearDB } = data;
//       renderItem(data);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// });


// async function update() {
//   try {
//     const { data } = await axios.post("/items/update-one");
//     console.log(data);
//     renderItem(data);

//   } catch (error) {
//     console.error(error);
//   }
// }
