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

 function postBook(book: Array <Book>) {


  const books =  document.querySelector("#books");
  let html = "";
  console.log(book)
  book.forEach(bookDetails => {
    html += `<div id="wrapper"> <img src="${bookDetails.image}"  id="bookImg">  
    <p class="details">${bookDetails.name} </p> 
    
    <p class="details">${bookDetails.description} </p>  <button onclick="handleUpdateDesc( '${bookDetails.serialNo}')" class="buttonUp">update</button>
   <p class="details">${bookDetails.price}  </p> <button onclick="handleUpdatePrice( '${bookDetails.serialNo}')" class="buttonUp">update</button>  <br>
   
   <button onclick="handleDeleteBook('${bookDetails.serialNo}')" class="details" class="buttonUp">delete</button>
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
   
    const {data} = await axios.put('/updateDesc', { serialNo, description})
    const {addBook} = data;
    postBook(addBook)
  
  

 
} catch (error) {
    console.log(error)
}
 
}

async function handleUpdatePrice(serialNo){
  try {
    const price = prompt("pleas enter price!");
    // const price = parseInt(p)
    console.log(price)
    const {data} = await axios.put('/updatePrice', { serialNo, price})
    console.log(data)
    const {addBook} = data;
    console.log(addBook)
    postBook(addBook)
  
  

 
} catch (error) {
    console.log(error)
}
}

async function handleDeleteBook(serialNo){
  try {
    const {data} = await axios.delete('/deleteBook', {data: {serialNo} });
    const {addBook, error} = data
    if (error) throw new Error(error);
    console.log(addBook)
    postBook(addBook)
 

  } catch (error) {
    console.log(error)
  }
}



//client page


async function renderClientBook(books:Array <Book>){
  try {
    const client = document.querySelector('#wrapperClient') ;
    //@ts-ignore
   
    let html1 = "";
    books.forEach(book => {
      html1 += `<img src="${book.image}" alt="">
      <h1>${book.name}</h1>
      <p>description:${book.description}</p>
      <h1>price: {book.price} $</h1>
      <button onclick('handleCart(${book.serialNo})')>add to cart</button>`

      
    })

    client.innerHTML = html1;
    

  } catch (error) {
    console.log(error)
  }
}

async function getClientList(ev) {
  try {
    ev.preventDefault();

    const {data} = await axios.get('/clientGet');
    let {addBook} = data;

    console.log(addBook)
    renderClientBook(addBook)
  
 

} catch (error) {
    console.log(error)
}
  
}

