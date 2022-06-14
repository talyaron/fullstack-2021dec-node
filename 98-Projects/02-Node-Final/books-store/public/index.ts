interface Book{
  image: String,
  name: string,
  description: string,
  price: number,
  serialNo: string
}


async function handleUpBook(ev) {
  ev.preventDefault();
  try {
    console.log(ev.target.elements);
    const image = ev.target.elements.bookImg.value;
    const name = ev.target.elements.name.value;
    const description = ev.target.elements.description.value;
    const price = ev.target.elements.price.value;
   
    //@ts-ignore
    const { data } = await axios.post("/booksStore",{image,name,description,price});
    console.log(data);
    const {addBook} = data;
    console.log(addBook)
      postBook(addBook)
      
  } catch (error) {
    console.log(error);
  }
}

async function postBook(book: Array <Book>) {
  const books = document.querySelector("#books");
  let html = "";
  book.forEach(bookDetails => {
    html += `<div id="wrapper"> <img src="${bookDetails.image}"  id="bookImg">  
    <p class="details">${bookDetails.name} </p> 
    
    <p class="details">${bookDetails.description} </p>  <button onclick="handleUpdateDetails(${bookDetails.description}, ${bookDetails.serialNo})" class="buttonUp">update</button>
   <p class="details">${bookDetails.price}  </p>   
   
   <button onclick="handleDeleteBook(event)" class="details" class="buttonUp">delete</button>
   </div> <br> <br>`
  });
  
  books.innerHTML = html;
}

async function getBook(){
  
   try {
     
   
    //@ts-ignore
    const { data } = await axios.get("/booksStore");
    console.log(data);
    const {addBook, error} = data;
    if(error) throw new Error(error.message)
    if (addBook){
      postBook(addBook)
    }
  } catch (error) {
     console.log(error)
  }
}
getBook();

async function handleUpdateDetails(){
  const bookUpdate = document.querySelector("#update")

 

 
}