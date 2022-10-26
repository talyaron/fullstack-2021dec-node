
import { useState } from 'react'
import { Link } from 'react-router-dom'
export interface CategoryProps {
    name: string,
    imgUrl: string
    id: string,
}


const CategoryBox = ({ name, imgUrl, id }: CategoryProps) => {

    const [category, setCategory] = useState<string>("none")

    function handleChooseCategory(ev: any) {
        ev.preventDefault()
        const categoryName = ev.target.id
        setCategory(categoryName)

    }
    
    return (

        <div >
          
            <div onClick={handleChooseCategory} id={name} className="categoryBox"   >
               <h1>{name}</h1>
               <Link to={`/game/${id}`}>  <img src={imgUrl} alt="" /> </Link>
            </div>
            
        </div>
    )
}



export default CategoryBox;