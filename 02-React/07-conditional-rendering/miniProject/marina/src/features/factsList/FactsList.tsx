import { Link } from "react-router-dom";
import { FactCard } from '../fact/FactCard'

export interface FactInterface {
  src: string;
  text: string;
  id: number
  // id: string
}

export const items: FactInterface[] = [
  {
    src: "https://static.dw.com/image/45665028_303.jpg",
    text: "Fact about Elephants",
    // id: "1",
    id: Math.floor(Math.random() * 1000000),
  },
  {
    src: "https://static.dw.com/image/57327077_303.jpg",
    text: "Fact about Mosquitos",
    // id: "2",
    id: Math.floor(Math.random() * 1000000),
  },
  {
    src: "https://www.worldwidepest.com/wp-content/uploads/2020/01/scorpions.jpg",
    text: "Fact about Scorpions",
    // id: "3",
    id: Math.floor(Math.random() * 1000000),
  },
  {
    src: "https://assets3.thrillist.com/v1/image/2498980/1584x1026/scale;webp=auto;jpeg_quality=60.jpg",
    text: "Fact about Jiraphes",
    // id: "4",
    id: Math.floor(Math.random() * 1000000),
  },
];



export const FactsList = () => {
  
  return (
    <div>
      <h2 className="header">Could you imagine that...?</h2>
      <div className="grid">
 
        {items.map((item) => {
          return (
          <Link className="text-decoration" to={`/fact/${item.id}`}> 
          <FactCard key={item.id} fact={item}/>
          </Link> )        
        })}
        
      </div>
    </div>
  );
};
