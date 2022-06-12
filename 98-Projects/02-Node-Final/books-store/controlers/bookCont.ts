

interface Book{
  image: String,
  name: string,
  description: string,
  price: number,
  serialNo: string
}

let addBook:Array <Book> = [];



export async function postBook(req, res) {
  try {
    const { image, name, description, price } = await req.body;
    if (!image) throw new Error("image is required");
    if (!name) throw new Error("name is required");
    if (!price) throw new Error("price is required");
    

    const bookDetails = { image, name, description, price,  serialNo:uid() };
    addBook.push(bookDetails);
    res.send({ addBook });
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

function uid(){
  const id = "id" + Math.random().toString(16).slice(2)
  return id
}



