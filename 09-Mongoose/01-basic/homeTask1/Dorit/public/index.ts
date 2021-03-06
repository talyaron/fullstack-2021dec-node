interface Cat {
  name: string;
  age: number;
  color: string;
  src: string;
}
let allCats: Array<Cat> = [];

async function getAllCats(): Promise<any> {
  console.log("getAllCats");

  try {
    //@ts-ignore
    const { data } = await axios.get("/cats/get-all-cats");

    console.log(data);
    const { allCats, error } = data;
    if (error) throw error;
    renderAllCats(allCats);
  } catch (error) {
    console.error(error);
  }
}

function renderAllCats(allCats) {
  try {
    if (!Array.isArray(allCats)) throw new Error("All cats is not an array");
    let catRow: HTMLDivElement = document.querySelector("#catR");
    let html: string = "";
    allCats.forEach((element) => {
      html += `<p>name:${element.name}, age:${element.age}, color:${element.color} <img src='${element.src||""}' /></p>`;
    });
    catRow.innerHTML = html;
  } catch (err) {
    console.error(err);
  }
}

async function handleAddCat(ev: any) {
  console.log("handleAddCat");

  try {
    ev.preventDefault();

    const name = ev.target.name.value;
    const age = ev.target.age.valueAsNumber;
    const color = ev.target.color.value;
    const src = ev.target.src.value;

    if (!name || !age || !color || !src) throw new Error("not enough data");
    //@ts-ignore
    const { data } = await axios.post("/cats/add-cat", {
      name,
      age,
      color,
      src,
    });
    console.log(`data from server, index.ts ${data}`);

    const { cat } = data;
    console.log(cat.name, cat.age, cat.color, cat.src);

    renderCats(cat);
   
  } catch (error) {
    console.error(error);
  }
}
function renderCats(cat) {
  const catR = document.querySelector("#catR");
  catR.innerHTML = `new cat: name=${cat.name}, age:${cat.age}, color:${cat.color}, src:${cat.src}}`;
}

async function handleSelectAge(ev: any) {
  try {
    const value = ev.target.value;

    //@ts-ignore
    const { data } = await axios.get(`/cats/filter-cats-by-age?age=${value}`);
    const { cats, error } = data;
    if (error) throw error;
    renderAllCats(cats);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
