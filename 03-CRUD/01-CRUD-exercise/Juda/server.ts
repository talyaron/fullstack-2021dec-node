const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use(express.static("public"));

interface Images {
    url:string,
    description:string,
    id:string
}

let images:Array<Images> = [
    {description: 'Kitchen',id:"dfgd", url:'https://img.freepik.com/free-photo/kitchen-interior-design-with-wooden-table_23-2148848661.jpg?w=900&t=st=1654196358~exp=1654196958~hmac=c16d9cb1fbf00816431813c14b3e5bedc356740d3c15458a1ea36c04ff3be7cc'},
    {description: 'Games',id:"dfsdfgd", url:'https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=900&t=st=1654196360~exp=1654196960~hmac=9b4316fd32efeab2f12e1bf209f1359451e9386936fbdee857e725005845e736'},
    {description: 'Plane',id:"d456fgd", url:'https://img.freepik.com/free-photo/top-view-white-plane-green-background_23-2148971056.jpg?w=900&t=st=1654196368~exp=1654196968~hmac=b2b1083f3bfaeb9f5b5c385f983e86a37162b5a2cfdcf5c6ef748733d07c3283'},
    {description: 'Girl',id:"dfdfgd4gd", url:'https://img.freepik.com/free-photo/intrigued-girl-points-promotional-text-left-side-empty-copy-space-asks-question-about-product-looking-interested-item-sale-standing-white-background_176420-55011.jpg?w=900&t=st=1654196374~exp=1654196974~hmac=d1e2be909b4323fd85c5e59dd0f6fa913f056c9a0b34dcd2a4ba2116ed7ad3c7'},
]

app.get('/api/get-all-images', (req,res) => {
    try {
        res.send({images})


    } catch (error) {
        console.error(error)
    }
})


app.delete('/api/delete-image', (req, res) => {
    try {
  
      const { imageId } = req.body
      console.log(imageId)
      const index = images.findIndex(image => image.id === imageId)
      console.log(index)
     images.splice(index,1);
     
      res.send({ images });
  
      if (index === -1) throw new Error('couldnt find user to delete')
  
    } catch (error) {
      res.send({ error: error.message });
    }
  })







app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  