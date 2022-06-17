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
    const price = ev.target.elements.price.valueAsNumber;
   
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
    
    <p class="details">${bookDetails.description} </p>  <button onclick="handleUpdateDesc( '${bookDetails.serialNo}')" class="buttonUp">update</button>
   <p class="details">${bookDetails.price}  </p> <button onclick="handleUpdatePrice( '${bookDetails.serialNo}')" class="buttonUp">update</button>  <br>
   
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

async function handleUpdateDesc( serialNo){
  try {
    const description:string = prompt("pleas enter description!");
   
    const {data} = await axios.put('/updateBook', { serialNo, description})
    const {addBook} = data;
    postBook(addBook)
  
  

 
} catch (error) {
    console.log(error)
}
 
}

async function handleUpdatePrice(serialNo){
  try {
    const p = prompt("pleas enter price!");
    const price = parseInt(p)
   
    const {data} = await axios.put('/updateBook', { serialNo, price})
    const {addBook} = data;
    postBook(addBook)
  
  

 
} catch (error) {
    console.log(error)
}
}