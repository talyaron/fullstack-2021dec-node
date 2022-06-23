interface Book {
  image: String,
  name: string,
  description: string,
  price: number,
  serialNo: string
}

interface cart {
  image: String,
  name: string,
  description: string,
  price: number,
  serialNo: string
}



async function handleUpBook(ev) {
  ev.preventDefault();
  try {
    console.log('handleUpBook', ev.target.elements);
    const image = ev.target.elements.bookImg.value;
    const name = ev.target.elements.name.value;
    const description = ev.target.elements.description.value;
    const price = ev.target.elements.price.value;

    //@ts-ignore
    const { data } = await axios.post("/booksStore", { image, name, description, price });
    console.log('booksStore', data);
    const { addBook } = data;
    // console.log(addBook)
    renderBook(addBook)

    ev.target.reset()
  } catch (error) {
    console.log('error', error);
  }
}

function renderBook(books: Array<Book>) {


  const htmlBooksHolder = document.querySelector("#books");
  let html = "";
  books.forEach(book => {
    html += `<div id="wrapper"> <img src="${book.image}"  id="bookImg">  
    <p class="details">${book.name} </p> 
    
    <p class="details, des" >description: ${book.description} </p>  <button class="des" onclick="handleUpdateDesc( '${book.serialNo}')" class="buttonUp">update</button> <br>
   <p class="details, price" >price: ${book.price} nis </p> <button class="price" onclick="handleUpdatePrice( '${book.serialNo}')" class="buttonUp">update</button>  <br>
   
   <button onclick="handleDeleteBook('${book.serialNo}')" class="details" class="buttonUp">delete</button>
   </div> <br> <br>`
  });

  htmlBooksHolder.innerHTML = html;
}

async function getBook() {

  try {


    //@ts-ignore
    const { data } = await axios.get("/booksStore");
    console.log(data);
    const { addBook, error } = data;
    if (error) throw new Error(error.message)
    if (addBook) {
      renderBook(addBook)
    }
  } catch (error) {
    console.log(error)
  }
}
// getBook();

async function handleUpdateDesc(serialNo) {
  try {
    const description: string = prompt("pleas enter description!");

    const { data } = await axios.put('/updateDesc', { serialNo, description })
    const { addBook } = data;
    renderBook(addBook)




  } catch (error) {
    console.log(error)
  }

}

async function handleUpdatePrice(serialNo) {
  try {
    const price = prompt("pleas enter price!");
    // const price = parseInt(p)
    console.log(price)
    const { data } = await axios.put('/updatePrice', { serialNo, price })
    console.log(data)
    const { addBook } = data;
    console.log(addBook)
    renderBook(addBook)




  } catch (error) {
    console.log(error)
  }
}

async function handleDeleteBook(serialNo) {
  try {
    const { data } = await axios.delete('/deleteBook', { data: { serialNo } });
    const { addBook, error } = data
    if (error) throw new Error(error);
    console.log(addBook)
    renderBook(addBook)


  } catch (error) {
    console.log(error)
  }
}



//client page


async function renderClientBook(books: Array<Book>) {
  try {
    const client = document.querySelector('#clientBody');
    //@ts-ignore

    let html1 = "";
    books.forEach(book => {
      html1 += `<div id="wrapperClient" >
         <img src="${book.image}" alt="">
      <h1>${book.name}</h1>
      <p>description:${book.description}</p>
      <h1>price: ${book.price} $</h1>
      <button onclick('handleCart(${book.serialNo})')>add to cart</button>
      </div>`


    })

    client.innerHTML = html1;


  } catch (error) {
    console.log(error)
  }
}

async function getClientList(ev) {
  try {
    ev.preventDefault();

    const { data: { addBook } } = await axios.get('/clientGet');
    renderClientBook(addBook)



  } catch (error) {
    console.log(error, 'an error occurred');
  }

}


function renderCart(clientCart: Array<Book>) {
  try {
    console.log(clientCart)
    const cartBody = document.querySelector('#cartBody')
    let html = "";
    clientCart.forEach(book => {
      console.log(book)
      html += `<div id="clientCart">
      <img src="${book.image}" alt="">
      <h1>${book.name}</h1>
      <p>description; ${book.description}</p>
      <h1>price; ${book.price}</h1>
      <button onclick="deleteFromCart('${book.serialNo}')">delete from cart</button>

  </div>`
    })
    cartBody.innerHTML = html;

    const totalPrice = document.querySelector('#totalToPay');
    let total: number = 0;
    for (let i = 0; i < clientCart.length; i++) {
      if (clientCart && clientCart[i] !== clientCart[i]) {
        total = clientCart[i].price + clientCart[i].price
      }
    }

    totalPrice.innerHTML = `<h1>total to pay ${total} nis</h1>`


  } catch (error) {
    console.log(error)
  }
}

async function handleCart(serialNo) {
  try {
    //@ts-ignore
    const { data } = await axios.post('/clientCart', { serialNo })
    console.log(data)
    const { clientCart } = data;

    console.log(clientCart)

    renderCart(clientCart)

  } catch (error) {
    console.log(error)
  }
}

async function cartGet() {
  try {
    //@ts-ignore
    const { data:clientCart } = await axios.get('/clientCart')
    // console.log(data);
    // const { clientCart } = data;
    console.log(clientCart);
    
    
    renderCart(clientCart);

  } catch (error) {
    console.log(error)

  }
}

