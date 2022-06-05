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
	const { searchedItem } = req.body;
  console.log(searchedItem)
  const filtereditems = [];
	items.forEach((item) => {
    console.log(item.name)
		if (item.name === `${searchedItem}`) {
      filtereditems.push(item)
		}
	});
  res.send(filtereditems)
}
