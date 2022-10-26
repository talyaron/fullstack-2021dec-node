// import { v4 as uuidv4 } from 'uuid';
export interface Product {
    id: string,
    name: string,
    price: number,
    quantity: number
}

export const products: Array<Product> = [
    { id: "1qwe", name: "Orange", price: 123, quantity: 1 },
    { id: "sd123123wf", name: "Apple", price: 234, quantity: 1 },
    { id: "324234", name: "Banana", price: 345, quantity: 1 }
]