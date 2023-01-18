import { useStore } from "../context/StoreContext"
import storeItems from "../data/items.json"
import {Stack, Button} from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps= {
    id:number,
    quantity:number
}

export function CartItem({id, quantity}: CartItemProps){
  const {removeFromCart} = useStore()
  const item = storeItems.find(i => i.id === id)
  if (item == null) return null

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
    <img src={"item.imageUrl"}
    style={{width:"130px", height:"75px", objectFit:"cover"}}
    />
    <div className="me-auto">
        <div>
            {item.name} { }
            {quantity > 1 && (
             <span className="text-muted" style={{fontSize: ".70rem"}}>
                {quantity} x
             </span>
            )}
            
        </div>
        <div className="text-muted" style={{fontSize:".80rem"}}>
            {formatCurrency(item.price)}
        </div>
    </div>
    <div>
        {formatCurrency(item.price*quantity)}
    </div>
    <Button variant="outline-danger" size="sm" onClick={() => 
    removeFromCart(item.id)}>&times;</Button>
    </Stack>
  )
}