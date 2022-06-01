import { Item } from "../model/itemModel";

const items: Array<Item> = [
  {
    name: "Milk",
    itemId: "123MI",
    bought: false,
    userId: "abcd",
  },
  {
    name: "Bread",
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
  } catch (error) {
    res.send({error: error.message})
  }
}

