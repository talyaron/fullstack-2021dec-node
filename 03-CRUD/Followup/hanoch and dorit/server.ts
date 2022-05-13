const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));

interface Picture{
    src:string,
    dis:string,
    id:string
    
}
let pictures:Array<Picture> = [
    {src:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
    dis:"cute dog",
    id:"a"
     },
     {src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyhIrl5ABJ7N9z4ERf5WULVCsMUVIoRyXXWA&usqp=CAU",
    dis:"cute hen",
    id:"b"
     },
     {src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeWkXy00ZIFJ2MgcpmoobR-MMkMzBNxx-_8Q&usqp=CAU",
    dis:"cute cat",
    id:"c"
     },
     


]

app.get("/api/get-pictures", (req, res) => {
    try {
      res.send({ pictures });
    } catch (error) {
      res.send({ error: error.message });
    }
  });

  app.delete("/api/delete-image", (req, res) => {
    try {
      req.send({ ID:id });
    } catch (error) {
      res.send({ error: error.message });
    }
  });





app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  