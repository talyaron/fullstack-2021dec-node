
import uid from "../helpers";

interface Jazz {
  cartItems: Array<Item>;
  records: Array<Item>;
  additem(Item);
  addCartCounter(cartCount);
  renderCartCounter(rootCartCounter);
}

interface Item {
  name: string;
  title: string;
  type: string;
  year: number;
  raiting: number;
  url: string;
  id: string;
}

let store = {
  cartItems: [],

  records: [
    {
      name: "Miles Davis",
      title: "Kind of Blue",
      type: "classic",
      year: 1959,
      raiting: 4.2,
      url: "https://m.media-amazon.com/images/I/71dQKN2UEfL._SL1500_.jpg",
      id: uid(),
    },
    {
      name: "John Coltrane",
      title: "A Love Supreme",
      type: "classic",
      year: 1965,
      raiting: 4.3,
      url: "https://cdn2.jazztimes.com/2021/08/John-Coltrane-Cover-Art.jpg",
      id: uid(),
    },
    {
      name: "Duke Ellington",
      title: "Ellington At Newport",
      type: "classic",
      year: 1956,
      raiting: 3.9,
      url: "https://www.jazzmessengers.com/27301/the-complete-newport-1956-concert.jpg",
      id: uid(),
    },
    {
      name: "John Coltrane",
      title: "Blue Trail",
      type: "classic",
      year: 1957,
      raiting: 4.2,
      url: "https://m.media-amazon.com/images/I/71aSnR4uTNL._SX425_.jpg",
      id: uid(),
    },
    {
      name: "Sonny Rollins",
      title: "Saxophone Colossus",
      type: "classic",
      year: 1956,
      raiting: 3.9,
      url: "https://www.jazzmessengers.com/57498-thickbox_default/saxophone-colossus.jpg",
      id: uid(),
    },
    {
      name: "Mola Sylla",
      title: "Count Till Zen",
      type: "ethnic",
      year: 2015,
      raiting: 3.2,
      url: "https://lastfm.freetls.fastly.net/i/u/500x500/b326fb64c55e5c5c12458a4a2ec6db0f.jpg",
      id: uid(),
    },
    {
      name: "Richard Bona",
      title: "Reverence",
      type: "ethnic",
      year: 2001,
      raiting: 4.2,
      url: "https://lastfm.freetls.fastly.net/i/u/500x500/96e29825b4c6360458421530d70812ed.jpg",
      id: uid(),
    },
    {
      name: "Stan Getz",
      title: "For Musicians Only",
      type: "bebop",
      year: 1954,
      raiting: 3.8,
      url: "https://dgwh4hty77sxy.cloudfront.net/12694-medium_zoomcrop/image.jpg",
      id: uid(),
    },
    {
      name: "Silver Serenade",
      title: "The Horace Silver Quintet",
      type: "bebop",
      year: 1963,
      raiting: 3.7,
      url: "https://e.snmc.io/i/600/w/c3c431dd9d0fc3e531ea5ec87e4ca819/2131870/the-horace-silver-quintet-silvers-serenade-Cover-Art.jpg",
      id: uid(),
    },
    {
      name: "Ben Webster",
      title: "The Consummate Artistry",
      type: "bebop",
      year: 1954,
      raiting: 3.7,
      url: "https://m.media-amazon.com/images/I/61FHqeSW39L._SL1070_.jpg",
      id: uid(),
    },
    {
      name: "Jim Hall",
      title: "Concierto",
      type: "cool jazz",
      year: 1975,
      raiting: 3.8,
      url: "https://i.discogs.com/DLOIT8ifKvvY_annT-G0loS1ts2tYIbA-Io4QTkTDNU/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyMjY5/NjItMTM1NjkwNzc3/NC01MDE4LmpwZWc.jpeg",
      id: uid(),
    },
    {
      name: "Oscar Peterson",
      title: "We Get Requests",
      type: "cool jazz",
      year: 1965,
      raiting: 3.8,
      url: "https://c8.alamy.com/zooms/9/c1eb104cd58540949322a07797e01048/2dp2kmf.jpg",
      id: uid(),
    },
  ],
};

export const initStore = (req: any, res: any) => {
  try {
    res.send(store.records);
  } catch (error) {
    res.send({ error: error.message });
  }
};

export const deleteAlbum = (req: any, res: any) => {
  const recordID = req.body.recordID;
  store.records = store.records.filter((record) => record.id !== recordID);
  res.send(store.records);
};

export const addAlbum = (req, res) => {
  const { name, title, type, year, raiting, url } = req.body;
  if (!name) throw new Error("name is required");
  if (!title) throw new Error("title is required");
  if (!type) throw new Error("type is required");
  if (!raiting) throw new Error("raiting is required");
  if (!url) throw new Error("URL is required");
  const record: Item = { name, title, type, year, raiting, url, id: uid() };
  store.records.push(record);
  res.send(store.records);
};

export const updateAlbum = (req, res) => {
  const { name, title, type, year, raiting, url, id } = req.body;
  const index = store.records.findIndex((record) => record.id === id);
  if (index === -1) throw new Error("record not found");
  if (index >= 0) {
    store.records[index].name = name;
    store.records[index].title = title;
    store.records[index].type = type;
    store.records[index].year = year;
    store.records[index].raiting = raiting;
    store.records[index].url = url;
  }

  res.send(store.records);
};

export const searchAlbum = (req, res) => {
  const search = req.query.input;
  const filteredItems = filteredSearch(search);
  res.send(filteredItems);
};

function filteredSearch(search) {
  const regex = new RegExp(search, "g");
  return store.records.filter(
    (record) =>
      regex.test(record.title) ||
      regex.test(record.name) ||
      regex.test(record.type)
  );
}

export const selectTypeAlbum = (req, res) => {
  const type = req.query.type;
  const selectByType = store.records.filter((record) => record.type == type);
  if (type === "all") {
    console.log(type);
    res.send(store.records);
  } else if (type) {
    res.send(selectByType);
  } else {
    res.send(store.records);
  }
};

export const handleDoubleClick = (req: any, res: any) => {
  const recordID = req.body.recordID;
  let clicked = store.records.filter((record) => record.id === recordID);
  res.send(clicked);
};
