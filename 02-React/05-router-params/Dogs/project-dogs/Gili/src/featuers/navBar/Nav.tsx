import { Link } from "react-router-dom";
import { getAllBreeds } from "../breeds/getAllBreeds";
import "./nav.scss"
import { Image } from './../../../../../roy/src/features/breed/getimage';

export const Nav = () => {
    return( 
    <div className="nav">
        <div className="nav__links">
        <Link to="/"><div className="nav__links__item">Home</div>{" "} </Link>
        <div className="nav__links__item">
            <h3>Search Breed</h3>
            <form onSubmit={handleFindBreed}>
            <input name="search" type="text" />
            <button type="submit">FIND</button>
            </form>
        </div>
        </div>
        <h1 className="header">Breeds</h1>
    </div>
    )
}

async function handleFindBreed(ev:any) {
    ev.preventDefault()
    try {
        const breedsArr = await getAllBreeds();
        const search = ev.target.search.value;
        // const results:Array<Image> = [];
        // breedsArr.forEach(breed => {
        //     if(breed.breed === search) results.push(breed)
        // })
        const results = breedsArr.filter(brd => brd.breed.includes(ev.target.search.value) )
        console.log(results)
        return results;
    } catch (error) {
        console.log(error)
    }
}