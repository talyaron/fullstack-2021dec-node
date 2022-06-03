import uid from "../helpers";
import { Item } from "../model/itemModel";

let items: Array<Item> = [
  {
    name: "Milk",
    itemId: "123MI",
    bought: false,
    userId: "abcd",
  },
  {
    name: "tea",
    itemId: "123MI",
    bought: false,
    userId: "abcd",
  },
  {
    name: "bread",
    itemId: "123MI",
    bought: false,
    userId: "abcd",
  },
  {
    name: "flower",
    itemId: "123MI",
    bought: false,
    userId: "abcd",
  },

  {
    name: "Milk",
    itemId: "123BR",
    bought: false,
    userId: "abc",
  },
];

export async function HandleUpdateItem(req, res) {
  try {
    const { name } = req.body;
    console.log(name);
  } catch (error) {}
}

export async function deleteItem(req, res) {
  try {
    const { itemId } = req.body;
    console.log(itemId);
    items = items.filter(item => item.itemId !== itemId);
    res.send({items});
    
  } catch (error) {
    res.send({error: error.message})
  }
}

export async function addItem(req, res){
try {

  let newItem  = {
    name: req.body.value,
    itemId: uid(),
    bought: false,
    userId: "abc",
  }


  items.push(newItem);
  console.log({items});
  res.send({items});
} catch (error) {
  res.send({error: error.message})
}
}

