// import { Item } from "../model/itemModel";

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
    name: "Sugar",
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
    console.log(items);
    res.send({items});
    
  } catch (error) {
    res.send({error: error.message})
  }
}

export async function getItems(req, res) {
  try {
    res.send({items});
  } catch (error) {
    res.send({error: error.message});
  }
}

