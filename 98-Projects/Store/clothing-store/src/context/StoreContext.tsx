import { createContext, ReactNode, useContext, useState } from "react";
import {Store} from "../components/StoreComponent"
import { useLocalStorage } from "../hooks/useLocalStorage";

type StoreProviderProps = {
    children:ReactNode
}

type StoreContext = {
    openCart : () => void
    closeCart : () => void
    getItemQuantity: (id: number) => number
    IncreaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity:number
    cartItems:CartItem[]


}

type CartItem = {
    id:number
    quantity:number
}

const StoreContext = createContext({}as
    StoreContext)

export function useStore(){
    return useContext(StoreContext)
}



export function StoreProvider({children}:StoreProviderProps){
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]
    >("store" ,[])

    // * check replace "store" to "shopping-cart"


const cartQuantity = cartItems.reduce((quantity, item) => 
item.quantity + quantity, 0)

const openCart = () => setIsOpen(true)
const closeCart = () => setIsOpen(false)


    function getItemQuantity(id:number){
        return cartItems.find(item => item.id ===id)?.quantity || 0
    }

    function IncreaseCartQuantity(id:number){
        setCartItems(currentItems=>{
            if(currentItems.find(item => item.id ===id)==null){
                return[...currentItems, {id, quantity:1}]
            }else{
                return currentItems.map(item=>{
                    if(item.id === id){
                        return {...item, quantity: item.quantity+1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id:number){
        setCartItems(currentItems=>{
            if(currentItems.find(item => item.id ===id)?.quantity===1){
                return currentItems.filter(item=>item.id!==id)
            }else{
                return currentItems.map(item=>{
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id:number){
        setCartItems(currItem=>{
            return currItem.filter(Item => Item.id != Item.id)
        }) 
    }

    return (
    <StoreContext.Provider value={{
         getItemQuantity,
         IncreaseCartQuantity,
          decreaseCartQuantity,
          removeFromCart,
          openCart,
          closeCart,
          cartItems,
          cartQuantity
    }}>
    {children}
    <Store isOpen={isOpen}/>
    </StoreContext.Provider>
    )
}

export function filterPrice(){

console.log('clicked');



}