

interface Book{
  image: String,
  name: string,
  description: string,
  price: number,
  serialNo: string
}

let addBook:Array <Book> = [];



let clientCart:Array <Book> = [];



export async function postBook(req, res) {
  try {
    const { image, name, description, price } = await req.body;
    if (!image) throw new Error("image is required");
    if (!name) throw new Error("name is required");
    if (!price) throw new Error("price is required");
    

    const bookDetails = { image, name, description, price,  serialNo:uid() };
    addBook.push(bookDetails);
    res.send({ addBook });
    console.log(addBook)
  } catch (error) {
    res.send({ error });
  }
};

export function getBook(req, res){
  try {
     res.send({addBook}) 
  } catch (error) {
      res.send({error }); 
  }
}

export function updateDescription(req, res){
  try {
  
    const { serialNo, description} = req.body;
    if (!description) throw new Error('description is require');
    if (!serialNo) throw new Error ('serialNo is require')
    const filter = addBook.findIndex(book => book.serialNo = serialNo )
    addBook[filter].description = description;
    res.send({addBook})
    

} catch (error) {
  res.send({ error: error.message });
}
}

export function updatePrice(req, res){
  try {
  
    const {serialNo, price} = req.body;
    if (!price) throw new Error('price is require');
    if (!serialNo) throw new Error ('serialNo is require')
    const indexBook = addBook.findIndex(book => book.serialNo = serialNo )
    addBook[indexBook].price = price;
    res.send({addBook})
    

} catch (error) {
  res.send({ error: error.message });
}
}

export function deleteBook(req, res){
  try {
    const {serialNo} = req.body;
     addBook = addBook.filter(book => book.serialNo !== serialNo )
    res.send({addBook})
} catch (error) {
  res.send({ error: error.message });
}

}




 export function clientGet(req, res){
  try {
    

    res.send({addBook})
    
  } catch (error) {
    res.send({Error: error.message})
  }
 


  
}
 



export function clientCartPost(req, res){
  try {
    const {serialNo} = req.body;
    const cartFilter = addBook.find(book => book.serialNo === serialNo)
    if(cartFilter){
     clientCart.push(cartFilter)}
     console.log(clientCart)
    res.send({clientCart})
  } catch (error) {
    res.send({Error: error.message})
  }
}

export function cartGet(req, res){
  res.send({clientCart})
}

export function deleteBookCart(req, res){
  try {
    const {serialNo} = req.body;
    clientCart = clientCart.filter(book => book.serialNo !== serialNo )
    res.send({clientCart})
} catch (error) {
  res.send({ error: error.message });
}

}
















function uid(){
  const id = "id" + Math.random().toString(16).slice(2)
  return id
}



