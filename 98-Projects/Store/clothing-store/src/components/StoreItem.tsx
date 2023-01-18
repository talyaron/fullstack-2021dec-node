import {Card} from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import {Button} from "react-bootstrap"
import { useState } from "react"
import { useStore } from "../context/StoreContext"

type StoreItemProps ={
  id: number
  name:string
  category:string
  price:number
  imageUrl:string  
}

export function StoreItem({id, name, category, price, imageUrl}:
    StoreItemProps){
const {
    getItemQuantity,
     IncreaseCartQuantity,
      decreaseCartQuantity,
       removeFromCart
} = useStore()
 const quantity = getItemQuantity(id)

 return (
 <Card className="h-100">
<Card.Img 
    variant="top"
    src={imageUrl} 
    height="150px" 
    style={{objectFit :"cover"}}/>
 <Card.Body className="d-flex flex-column">
<Card.Title className="d-flex justify-content-between align-items-baseline mb-3">
    <span className="fs-2">{name}</span>
    <span className="ms-2 text-muted">{ formatCurrency(price) }</span>

</Card.Title>

<div className="mt-auto">
{quantity===0 ? (
<Button className="w-100" onClick={() =>IncreaseCartQuantity(id)}> Add Co Cart</Button>):(
     <div 
     className="d-flex align-items-center  flex-cloumn" 
     style={{gap:".5rem"}}>
    <div 
    className="d-flex align-items-center justify-content-center"
     style={{gap:".5rem"}}>

        <Button onClick={() =>decreaseCartQuantity(id)}>-</Button>
        <div>
        <span className="fs-3">{quantity}</span>
            Added
        </div>
        <Button  onClick={() =>IncreaseCartQuantity(id)}>+</Button>
    </div>
    <Button variant="danger" size="sm"  onClick={() =>removeFromCart(id)}>
        Remove
    </Button>
    </div>
    )}
</div>
 </Card.Body>
</Card>
 )
}