
import mongoose from "mongoose";

const PaintingSchema = new mongoose.Schema({
  artist: String,
  title: String,
  technic: String,
  year: Number,
  url: String,
});

const Painting = mongoose.model("Paintings", PaintingSchema);

const painting1 = new Painting({
  artist: "Evgeny Volobuev",
  title: "Summer In The Village",
  technic: "oil",
  year: "1980",
  url: "https://soviet-art.ru/wp-content/uploads/2018/04/Summer-in-the-village.jpg",
  gallery: [{ name: "marina", age: 26 }],
});

const painting2 = new Painting({
  artist: "Evgeny Volobuev",
  title: "Skiers",
  technic: "oil",
  year: "1984",
  url: "https://arthive.net/res/media/img/oy800/work/cd9/584567@2x.jpg",
});

const painting3 = new Painting({
  artist: "Evgeny Volobuev",
  title: "Newspaper",
  technic: "oil",
  year: "1981",
  url: "https://soviet-art.ru/wp-content/uploads/2018/04/Newspaper.-Still-life.-1962.jpg",
});

const painting4 = new Painting({
  artist: "Evgeny Volobuev",
  title: "Morning",
  technic: "oil",
  year: "1982",
  url: "https://soviet-art.ru/wp-content/uploads/2018/04/Morning-Janitors.-1957.jpg",
});

const painting5 = new Painting({
  artist: "Evgeny Volobuev",
  title: "A Dog Is Running",
  technic: "oil",
  year: "1983",
  url: "https://soviet-art.ru/wp-content/uploads/2018/04/A-dog-is-running-through-the-field-1984.jpg",
});

const painting6 = new Painting({
  artist: "Dusan Malobabic",
  title: "Rain In The Night City",
  technic: "oil",
  year: "1980",
  url: "http://4.bp.blogspot.com/-AQ8LPQm3i4M/UdboAWyQdeI/AAAAAAAAUNk/heRMYSs7IXU/s1600/crossing_in_the_rain_by_dusanmalobabic.jpg",
});

const painting7 = new Painting({
  artist: "Dusan Malobabic",
  title: "Rain In The Night Street",
  technic: "oil",
  year: "1981",
  url: "https://pbs.twimg.com/media/DSyBQL3WsAAHaZA.jpg",
});

const painting8 = new Painting({
  artist: "Dusan Malobabic",
  title: "Beach",
  technic: "oil",
  year: "1982",
  url: "https://www.picclickimg.com/d/l400/pict/253674170206_/Dusan-Malobabic-Beach-Day-Original-Oil.jpg",
});

const painting9 = new Painting({
  artist: "Dusan Malobabic",
  title: "Dock",
  technic: "oil",
  year: "1984",
  url: "https://d2jv9003bew7ag.cloudfront.net/uploads/Jacob-Dhein-San-Francisco-Piers-2015.jpg",
});

const painting10 = new Painting({
  artist: "Dusan Malobabic",
  title: "A Walk",
  technic: "oil",
  year: "1985",
  url: "https://i.pinimg.com/736x/bd/5e/7b/bd5e7b3869e6fc7f0a2645f1ef42b304--a-walk.jpg",
});

const painting11 = new Painting({
  artist: "Robert Kelley",
  title: "A Girl",
  technic: "charcoal",
  year: "1980",
  url: "https://images.saatchiart.com/saatchi/419093/art/4053254/3123107-HSC00001-7.jpg  ",
});

const painting12 = new Painting({
  artist: "Robert Kelley",
  title: "Someone",
  technic: "charcoal",
  year: "1982",
  url: "https://5cc7c3ootfh3s6ncj47bjfv5-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/NightsceneRK-768x1024.jpg",
});

const painting13 = new Painting({
  artist: "Robert Kelley",
  title: "An Old Man",
  technic: "charcoal",
  year: "1983",
  url: "https://i.pinimg.com/736x/b2/b2/29/b2b229ae5330ef68e4e71095153dfa1a.jpg",
});

const painting14 = new Painting({
  artist: "Robert Kelley",
  title: "She",
  technic: "charcoal",
  year: "1984",
  url: "https://robertkelleyart.com/wp-content/uploads/2020/04/rkelleyart3.jpg",
});

const painting15 = new Painting({
  artist: "Robert Kelley",
  title: "Woman Portret",
  technic: "charcoal",
  year: "1985",
  url: "https://images.squarespace-cdn.com/content/v1/5ef2738a424c785ccc2cc849/1594233455714-11ASZI9SDK35PF5ZPCNY/image-asset.jpeg",
});

const painting16 = new Painting({
  artist: "Dusan Malobabic",
  title: "Fishing",
  technic: "oil",
  year: "1985",
  url: "https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.6435-9/117884264_229175781870361_2786077608018186889_n.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=111&ccb=1-7&_nc_sid=8024bb&_nc_ohc=lPNlWrNYW88AX90cDgG&_nc_ht=scontent.fhfa1-1.fna&oh=00_AT9yDuU4pBjEK-5Pk6kNJZ7OapgghMzrMQ2C7XnhE3q0LA&oe=62DD8B03",
});


export const getPaintings = async (req, res) => {
  try {
    const paintings = await Painting.find({});
    res.send({ ok: true, paintings });

  } catch (error) {
    console.error(error);
    res.send({error:error.message});
  }
}

export const handleAddAPainting = async (req, res) => {
  try {
   let { artist, title, year, technic, url } = req.body;

   const newPainting = new Painting({ artist, title, year, technic, url });
   const result = await newPainting.save();
   console.log(result);
   res.send({ result });

  } catch(error) {
    console.error(error);
    res.send({error:error.message});
  }
};

export const handleUpdateTitle = async (req, res) => {
  try {
    const {paintingID, title} = req.body;

    if (paintingID && title) {

      const painting = await Painting.updateOne(
        { _id: paintingID },
        { title: title }
      );
      res.send({ ok: true, painting });
      console.log(painting);

    } else {
      throw new Error("paintingID or title is missing");
    }

  } catch (error) {
    console.error(error);
    res.send({error:error.message});
  }
}


export const handleDelete = async (req, res) => {
  try {

    const { paintingID } = req.body;
    console.log(paintingID);

    if (paintingID) {

      const painting = await Painting.deleteOne({ _id: paintingID });
      res.send({ok: true, painting});
      console.log(painting);

    } else {
      throw new Error("Didnt find such paintingID");
    }

  } catch (error) {
    console.error(error);
    res.send({error:error.message});
  }
};


export const handleSelectTechnic = async (req, res) => {
  try {
    const { technic } = req.query; 
    const selectOil = await Painting.find({technic: 'oil'});
    const selectCharcoal = await Painting.find({ technic: "charcoal" });

    if(technic === 'oil') {
      res.send({ ok: true, selectOil });
    } 
    if (technic === "charcoal") {
      res.send({ ok: true, selectCharcoal });
    }
    console.log(selectOil);
    console.log(selectCharcoal);
   
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};

Painting.find({year: {$gte: 1984}}).then(docs => console.log(docs)).catch(error => console.log(error.message));
Painting.find({artist: 'Dusan Malobabic', year: 1980}).then(docs => console.log(docs)).catch(error => console.log(error.message));
Painting.find({technic: 'charcoal'}).then(docs => console.log(docs)).catch(error => console.log(error.message));


// painting1.save();
// painting2.save();
// painting3.save();
// painting4.save();
// painting5.save();
// painting6.save();
// painting7.save();
// painting8.save();
// painting9.save();
// painting10.save();
// painting11.save();
// painting12.save();
// painting13.save();
// painting14.save();
// painting15.save();
// painting16.save();
// painting17.save();

// console.log(painting1);
// console.log(painting2);
// console.log(painting3);
// console.log(painting4);
// console.log(painting5);
// console.log(painting6);
// console.log(painting7);
// console.log(painting8);
// console.log(painting9);
// console.log(painting10);
// console.log(painting11);
// console.log(painting12);
// console.log(painting13);
// console.log(painting14);
// console.log(painting15);
// console.log(painting16);
// console.log(painting17);