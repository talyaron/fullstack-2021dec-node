

let html = "";
async function handleUpBook(ev){
   ev.preventDefault()
   const image = ev.target.element.bookImg.value
   const name = ev.target.element.namOfBook.value
   const description = ev.target.element.description.value
   const price = ev.target.element.price.value

   
  
   
   //@ts-ignore
   const {data} = await axios.post('/booksStore', image, name, description, price)
   console.log(data)


}

async function postBook(book) {
   const books = document.querySelector("#books")
   let html = "";
   html = `<img src="${book.bookImage}" id="bookImg"> <br>
   <h3>${book.name}</h3> <br>
   <p>${book.description}</p> <br>
   <h1>${book.price}</h1> <br>`

   books.innerHTML = html
   
}