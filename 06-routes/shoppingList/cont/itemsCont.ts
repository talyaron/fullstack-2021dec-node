import { Item } from '../model/itemModel'

const Milk: Item = {
    name: 'Milk',
    itemId: '01',
    bought: false,
    userId: '02'
}

const Bread: Item = {
    name: 'Bread',
    itemId: '02',
    bought: false,
    userId: '02'
}

const itemList = [Milk, Bread]

export async function HandleUpdateItem(req, res){
try {
    const {name} = req.body
    console.log(name)
} catch (error) {
    
}
}
