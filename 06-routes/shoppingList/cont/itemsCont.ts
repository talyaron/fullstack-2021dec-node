// import { Item } from "../model/itemModel";
import uid from "../helpers";
import { Item } from '../model/itemModel';

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
    const {itemToAdd} = req.body;
    const {userId} = req.body;
    let newItem  = {
      name: itemToAdd,
      itemId: uid(),
      bought: false,
      userId: userId,
    }
    items.push(newItem);
    res.send({ items: items.filter((item) => item.userId === userId) });
  } catch (error) {
    res.send({error: error.message})
  }
  }
export function filterItems(req, res) {
 
	const { searchedItem, userId } = req.body;
	const { filterBy } = req.body
  const filteredUseritems = items.filter((item)=> item.userId === userId
  );
  const filtereditems = [];
  const itemToLookFor = new RegExp(searchedItem, "i");

  if(filterBy === "name") {
  filteredUseritems.forEach(item => {
	  if(itemToLookFor.test(item.name)) {
		filtereditems.push(item)
	  }
  });
  console.log('filtereditems',filtereditems)
} else if (filterBy === "itemId") {
	filteredUseritems.forEach(item => {
		if(itemToLookFor.test(item.itemId)) {
		  filtereditems.push(item)
		}
	});
}
  res.send(filtereditems)
}
  
