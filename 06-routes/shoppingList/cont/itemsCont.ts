// import { Item } from "../model/itemModel";

export interface Item{
    name:string;
    itemId:string;
    bought:boolean;
    userId:string;
};

const items:Array<Item> = [
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