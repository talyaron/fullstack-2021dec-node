import {Offcanvas, Stack} from "react-bootstrap"
import { useStore } from "../context/StoreContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./CartItems"
import storeItems from "../data/items.json"

type StoreProps ={
    isOpen: boolean
}

export function Store ({isOpen} :StoreProps){
    const {closeCart , cartItems} = useStore()
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
              {cartItems.map(item=>(
              <CartItem key={item.id} {...item}/>))}

               <div className="me-auto fw-bold fs-5">+
               Total {" "} {formatCurrency(cartItems.reduce((total,
                CartItem)=> {
                const item = storeItems.find(i=> i.id === CartItem.id)
                return total +
                 (item?.price || 0) * CartItem.quantity
               },0)
               )}

               </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )}