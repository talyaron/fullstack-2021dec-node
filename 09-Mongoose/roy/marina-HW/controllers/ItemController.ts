
import ItemModel from "../models/ItemModel";


const picture1 = new ItemModel({
  title: "A Girl",
  year: "1980",
  url: "https://images.saatchiart.com/saatchi/419093/art/4053254/3123107-HSC00001-7.jpg  ",
  ownerId: "userId",
});

const picture2 = new ItemModel({
  title: "Someone",
  year: "1980",
  url: "https://5cc7c3ootfh3s6ncj47bjfv5-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/NightsceneRK-768x1024.jpg",
  ownerId: "userId",
});

// const picture3 = new ItemModel({
//   title: "An Old Man",
//   year: "1981",
//   url: "https://i.pinimg.com/736x/b2/b2/29/b2b229ae5330ef68e4e71095153dfa1a.jpg",
//   ownerId: "userId",
// });

// const picture4 = new ItemModel({
//   title: "She",
//   year: "1982",
//   url: "https://robertkelleyart.com/wp-content/uploads/2020/04/rkelleyart3.jpg",
//   ownerId: "userId",
// });

// const picture5 = new ItemModel({
//   title: "Woman Portret",
//   year: "1983",
//   url: "https://images.squarespace-cdn.com/content/v1/5ef2738a424c785ccc2cc849/1594233455714-11ASZI9SDK35PF5ZPCNY/image-asset.jpeg",
//   ownerId: "userId",
// });

// picture1.save();
// picture2.save();
// picture3.save();
// picture4.save();

// picture5.save();
console.log(picture1);
console.log(picture2);
// console.log(picture3);
// console.log(picture4);

// console.log(picture5);

export const getProduct = async (req, res) => {
  try {
    // get userID
    const { user } = req.cookies;
    if (!user) throw new Error("The user not found");
    console.log(user);
    const { userId } = user;

    const itemDB = await ItemModel.find({ ownerId: userId });
   
    res.send({ success: true, user, item: itemDB });
    console.log(itemDB);

  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};


export const addItem = async (req, res) => {
  try {
    const { title, year, url } = req.body;
    const { user } = req.cookies;
    const { userId } = user;

    const itemDB = new ItemModel({ title, year, url, ownerId: userId });

    await itemDB.save();

    if (!user) throw new Error("The user not found");
    console.log(user);

    res.send({ success: true, item: itemDB });
    console.log(itemDB);
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};


export const yearRange = async (req, res) => {
  try {
    const year = req.query.year;
    // const itemDB = await ItemModel.find({});
    if (year) {
      console.log(year);
      const year1980 = await ItemModel.find({ year: 1980 });
      const year1981 = await ItemModel.find({ year: 1981 });
      const year1982 = await ItemModel.find({ year: 1982 });
      const year1983 = await ItemModel.find({ year: 1983 });

      const yearDB = await ItemModel.find({ year: { $gte: 1981 } });
      res.send({ year1980, year1981, year1982, year1983, yearDB });   
    } 
    
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
}



// export const updateItem = async (req, res) => {
//   try {
//     const updatedItem = await ItemModel.findOneAndUpdate({title: 'test@test'}, {year: 1982}, {$set: {title: 'test@test-2'}});
//     res.send({ updatedItem });
//     console.log(updatedItem);

//   } catch (error) {
//     console.error(error);
//     res.send({ error: error.message });
//   }
// }


