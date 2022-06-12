async function handleUpBook(ev) {
  ev.preventDefault();
  try {
    console.log(ev.target.elements);
    const image = ev.target.elements.bookImg.value;
    const name = ev.target.elements.name.value;
    const description = ev.target.elements.description.value;
    const price = ev.target.elements.price.value;
    console.log(image, name, description, price);
    //@ts-ignore
    const { data } = await axios.post(
      "/booksStore",
      image,
      name,
      description,
      price
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

async function postBook(book) {
  const books = document.querySelector("#books");
  let html = "";
  html = `<img src="${book.bookImage}" id="bookImg"> <br>
   <h3>${book.name}</h3> <br> <br>
   <p>${book.description}</p> <br> <br>
   <h1>${book.price}</h1> <br> <br> <br>`;

  books.innerHTML = html;
}
