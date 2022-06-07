// import { Item } from "../model/itemModel";
import uid from "../helpers";

interface Item {
  name: string,
    itemId: string,
      bought: boolean,
        userId: string
}

export let items: Array<Item> = [
  {
    name: "Milk",
    itemId: "123MI",
    bought: false,
    userId: "abcd",
  },
  {
    name: "tea",
    itemId: "123TE",
    bought: false,
    userId: "abcd",
  },
  {
    name: "bread",
    itemId: "123BR",
    bought: false,
    userId: "abcd",
  },
  {
    name: "flower",
    itemId: "123FR",
    bought: false,
    userId: "abcd",
  },

  {
    name: "Sugar",
    itemId: "123SU",
    bought: false,
    userId: "abc",
  },
];

export async function HandleUpdateItem(req, res) {
  try {
    const { name } = req.body;
    console.log(name);
  } catch (error) { }
}

export async function deleteItem(req, res) {
  try {
    const { itemId, userId } = req.body;
    items = items.filter(function (item) {
      if (item.itemId === itemId && userId === item.userId) { 
        return false;
      }
      return true;
    });
    res.send({ items: items.filter((item) => item.userId === userId) });


  } catch (error) {
    res.send({ error: error.message })
  }
}

export async function getItems(req, res) {
  const userId = req.query.userId;
  try {
    res.send({ items: items.filter((item) => item.userId === userId) });
  } catch (error) {
    res.send({ error: error.message });
  }
}


export async function addItem(req, res){
  try {
    const {newItemValue} = req.body;
    const {userId} = req.body;
    let newItem  = {
      name: newItemValue,
      itemId: uid(),
      bought: false,
      userId: "abc",
    }
    items.push(newItem);
    res.send({ items: items.filter((item) => item.userId === userId) });
  } catch (error) {
    res.send({error: error.message})
  }
  }