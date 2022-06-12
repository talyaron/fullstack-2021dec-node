let axios;
const video: any = document.querySelector("#video");
const videoPouseBtn: any = document.querySelector("#videoPouseBtn");
const scrollToTopBtn = document.querySelector("#scrollToTopBtn");
const shopIcon: any = document.querySelector("#cart-icon");
const times: any = document.querySelector("#cart-notification");
let clickTime = 0;
let timesClicked = 0;

async function initStore() {
  try {
    const { data } = await axios.get("/albums/albums-all");
    const { records, error } = data;
    if (error) throw new Error(error);
    renderToStore(data);
  } catch (error) {
    console.error(error);
  }
}

async function initErp() {
  try {
    const { data } = await axios.get("/albums/albums-all");
    const { records, error } = data;
    if (error) throw new Error(error);
    renderToErp(data);
  } catch (error) {
    console.error(error);
  }
}

async function getAllRecords() {
  try {
    const { data } = await axios.get("/albums/albums-all");
    const { records, error } = data;
    if (error) throw new Error(error);
    const root: HTMLElement = document.querySelector("#root");
    root.style.display = "grid";
    renderToStore(data);
  } catch (error) {
    console.error(error);
  }
}

async function handleUpdateAlbum(e: any, id: string) {
  e.preventDefault();
  try {
    const name = e.target.elements.name.value;
    const title = e.target.elements.title.value;
    const type = e.target.elements.type.value;
    const year = e.target.elements.year.valueAsNumber;
    const raiting = e.target.elements.raiting.valueAsNumber;
    const url = e.target.elements.url.value;
    const { data } = await axios.put("/albums/album-update", {
      name,
      title,
      type,
      year,
      raiting,
      url,
      id,
    });
    const { records, error } = data;
    if (error) throw new Error(error);
    renderToStore(data);
    renderToErp(data);
    e.target.reset();
  } catch (error) {
    console.error(error);
  }
}

async function handleAddAlbum(e) {
  try {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const title = e.target.elements.title.value;
    const type = e.target.elements.type.value;
    const year = e.target.elements.year.valueAsNumber;
    const raiting = e.target.elements.raiting.valueAsNumber;
    const url = e.target.elements.url.value;

    const { data } = await axios.post("/albums/album-add", {
      name,
      title,
      type,
      year,
      raiting,
      url,
    });
    renderToStore(data);
    renderToErp(data);
    e.target.reset();
  } catch (error) {
    console.error(error);
  }
}

function handleSearch(e) {
  try {
    const input = e.target.value;
    axios.get(`/albums/search?input=${input}`).then(({ data }) => {
      renderToStore(data);
    });
  } catch (error) {
    console.error(error);
  }
}

function handleSelectType(e) {
  e.preventDefault();
  try {
    const type = e.target.value;
    console.log(e.target.value);

    axios.get(`/albums/select-type?type=${type}`).then(({ data }) => {
      renderToStore(data);
    });
  } catch (error) {
    console.error(error);
  }
}

async function handleDeleteAlbum(recordID: string) {
  try {
    const { data } = await axios.post("/albums/album-delete", { recordID });
    renderToStore(data);
    renderToErp(data);
  } catch (error) {
    console.error(error);
  }
}

async function handleDoubleClick(recordID: string) {
  try {
    const { data } = await axios.post("/albums/album-clicked", { recordID });
    if (clickTime === 0) {
      clickTime = new Date().getTime();
    } else {
      if (new Date().getTime() - clickTime < 800) {
        clickTime = 0;
        times.textContent = ++timesClicked;
        times.style.color = "orange";
        shopIcon.style.color = "white";
      } else {
        clickTime = new Date().getTime();
      }
      const root: HTMLElement = document.querySelector("#root");
      root.style.display = "flex";
      renderAddedToCart(data);      
    }
  } catch (error) {
    console.error(error);
  }
}



function renderAddedToCart(records) {
  try {
    const root: HTMLElement = document.querySelector("#root");
    let html = "";
    records.forEach((record) => {
      html += `
                <div class="addedToCart">
                   <p style="color: orange;">Just added to your cart:</p>
                   <a href="${record.url}">${record.title}</a> <br>
                   <p>${record.name}</p>
                   <img src="${record.url}" onclick='handleDoubleClick("${record.id}")'>
                   <p>${record.year}</p> 
                   <p>${record.type} </p> <p style="color: orange;"> ${record.raiting}</p>                                                      
                </div>
                  `;
    });
    root.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function renderToStore(records) {
  try {
    const root: HTMLElement = document.querySelector("#root");
    let html = "";
    records.forEach((record) => {
      html += `
                <div class="card">
                   <a href="${record.url}">${record.title}</a> <br>
                   <p>${record.name}</p>
                   <img src="${record.url}" onclick='handleDoubleClick("${record.id}")'>
                   <p>${record.year}</p> 
                   <p>${record.type} </p> <p style="color: orange;"> ${record.raiting}</p>                                                      
                </div>
                  `;
    });
    root.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function renderToErp(records) {
  try {
    const root: HTMLElement = document.querySelector("#root");
    let html = "";
    records.forEach((record) => {
      html += `
                <div class="card">
                   <a href="${record.url}">${record.title}</a> <br>
                   <p>${record.name}</p>
                   <img src="${record.url}">
                   <p>${record.year}</p> 
                   <p>${record.type}</p> 
                   <p>raiting ${record.raiting}</p>
                                     
                   <form onsubmit="handleUpdateAlbum(event, '${record.id}')">
                   <input type="text" name="name" value="${record.name}"><br>
                   <input type="text" name="title" value="${record.title}"><br>       
                   <input type="number" name="year" value="${record.year}"><br>
                   <input type="number" name="raiting" value="${record.raiting}"><br>
                   <input type="text" name="url" value="${record.url}"><br>
                   <input type="text" name="id" value="${record.id}" readonly><br>
                      <select name="type" id="type"><br>
                         <option value="Choose type" disabled selected>Choose type</option>
                         <option value="classic">Classic</option>
                         <option value="coolJazz">Cool jazz</option>
                         <option value="bebop">Bebop</option>
                         <option value="ethnic">Ethnic</option>
                     </select><br> 
                    <button class="button">Update</button> 
                    <button class="button" onclick='handleDeleteAlbum("${record.id}")'>Delete</button> 
                   </form>                           
               </div>
                  `;
    });
    root.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function videoBackground() {
  if (video.paused) {
    video.play();
    videoPouseBtn.innerHTML = "Pause";
  } else {
    video.pause();
    videoPouseBtn.innerHTML = "Play";
  }
}

scrollToTopBtn.addEventListener("click", scrollToTop);
function scrollToTop() {
  try {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } catch (error) {
    console.log(error);
  }
}

// humburger toggle menu with animation
function handleToggle(e) {
   document.body.classList.toggle("activeNav");
}

const textService = document.querySelector<HTMLElement>(".textService");
const textAbout = document.querySelector<HTMLElement>(".textAbout");
const textContact = document.querySelector<HTMLElement>(".textContact");
const linkService = document.querySelector<HTMLElement>(".linkService");
const linkAbout = document.querySelector<HTMLElement>(".linkAbout");
const linkContact = document.querySelector<HTMLElement>(".linkContact");
textAbout.style.display = "none";
textContact.style.display = "none";
textService.style.display = "none";

linkService.addEventListener("click", () => {
  textAbout.style.display = "none";
  textContact.style.display = "none";
  textService.style.display = "block";
  document.querySelector(".textService").innerHTML = document
    .querySelector(".textService")
    .textContent.replace(/./g, "<span>$&</span>");
  let spans = document.querySelectorAll<HTMLElement>(".textService span");

  for (let i = 0; i < spans.length; i++) {
    let left = innerWidth * Math.random();
    let top = innerHeight * Math.random();

    if (Math.random() < 0.5) {
      spans[i].style.left = "-" + left + "px";
    } else {
      spans[i].style.left = left + "px";
    }

    if (Math.random() < 0.5) {
      spans[i].style.top = "-" + top + "px";
    } else {
      spans[i].style.top = top + "px";
    }
  }
});

linkAbout.addEventListener("click", () => {
  textAbout.style.display = "block";
  textContact.style.display = "none";
  textService.style.display = "none";
  document.querySelector(".textAbout").innerHTML = document
    .querySelector(".textAbout")
    .textContent.replace(/./g, "<span>$&</span>");
  let spans = document.querySelectorAll<HTMLElement>(".textAbout span");

  for (let i = 0; i < spans.length; i++) {
    let left = innerWidth * Math.random();
    let top = innerHeight * Math.random();

    if (Math.random() < 0.5) {
      spans[i].style.left = "-" + left + "px";
    } else {
      spans[i].style.left = left + "px";
    }

    if (Math.random() < 0.5) {
      spans[i].style.top = "-" + top + "px";
    } else {
      spans[i].style.top = top + "px";
    }
  }
});

linkContact.addEventListener("click", () => {
  textAbout.style.display = "none";
  textContact.style.display = "block";
  textService.style.display = "none";
  document.querySelector(".textContact").innerHTML = document
    .querySelector(".textContact")
    .textContent.replace(/./g, "<span>$&</span>");
  let spans = document.querySelectorAll<HTMLElement>(".textContact span");

  for (let i = 0; i < spans.length; i++) {
    let left = innerWidth * Math.random();
    let top = innerHeight * Math.random();

    if (Math.random() < 0.5) {
      spans[i].style.left = "-" + left + "px";
    } else {
      spans[i].style.left = left + "px";
    }

    if (Math.random() < 0.5) {
      spans[i].style.top = "-" + top + "px";
    } else {
      spans[i].style.top = top + "px";
    }
  }
});


// social counter
const counters = document.querySelectorAll<HTMLElement>(".counter");
counters.forEach((counter) => {
  counter.innerText = "0";
  counter.style.color = "rgba(248, 244, 244, 0.509)";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c: any = +counter.innerText;

    const increment = target / 1500;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

// clock
const clock = document.querySelector(".clock");
const tick = () => {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  // console.log(h, m, s);
  const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
  `;
  clock.innerHTML = html;
};
setInterval(tick, 1000);
