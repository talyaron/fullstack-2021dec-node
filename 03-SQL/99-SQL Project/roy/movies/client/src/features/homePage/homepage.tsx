import { BrowserRouter, Route, Routes } from "react-router-dom"
import GetALL from "./getall/getAll"
import Search from "./searchByName/search"



const HomePage=()=>{


return(
   <div>
   <Search/>
   <GetALL/>
   </div>
)
}
export default HomePage