import react from "react"
import axios from "axios"
import { UserNav } from "../user/userNav"

interface formProps{
    title:string,
    price:string,
    img?:string,
    description?:string
}
export const  SetProduct = ({title, price, img, description}:formProps) => {
    
    async function handleSubmit(ev:any){
        try {
            ev.preventDefault()
            const title = ev.target[0].value
            const price = ev.target[1].value
            const img = ev.target[2].value
            const description = ev.target[3].value
            const { data } = await axios.post("/api/products/addProduct",{title, price, img, description})
            console.log(data)
        } catch (error) {
            
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name of Product:</label>
                <input type="text" name="text" id="" defaultValue={title} />
                <label htmlFor="">Price of Product:</label>
                <input type="string" name="price" id="" defaultValue={price}/>
                <label htmlFor="">Picture of Product:</label>
                <input type="text" name="img" defaultValue={img}/>
                <label htmlFor="">Description of Product:</label>
                <input type="text" name="description" id="" defaultValue={description}/>
                <button type="submit" name="submit">update</button>
            </form>
        </div>
        
    )
}