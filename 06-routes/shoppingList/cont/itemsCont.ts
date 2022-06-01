import { Item } from "../model/itemModel";

const items: Array<Item> = [
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
