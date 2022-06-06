import { Item } from '../model/itemModel';

const items: Array<Item> = [
	{
		name: 'Milk',
		itemId: '123MI',
		bought: false,
		userId: 'abcd'
	},
	{
		name: 'Bread',
		itemId: '123BR',
		bought: false,
		userId: 'abc'
	}
];

export async function HandleUpdateItem(req, res) {
	try {
		const { name } = req.body;
		console.log(name);
	} catch (error) {}
}

export function getAllItems(req, res) {
	res.send({ items });
}

export function filterItems(req, res) {
  const user = "abcd"; // to be determined by params
	const { searchedItem } = req.body;
  const filtereditems = items.filter(function (item) {
    return item.userId === user && item.name === searchedItem;
  });
  console.log(filtereditems)
  
  res.send(filtereditems)
}
