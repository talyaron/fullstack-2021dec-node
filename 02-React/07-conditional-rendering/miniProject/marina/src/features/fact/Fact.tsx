import { useParams, Link } from 'react-router-dom'
import { FactInterface } from '../factsList/FactsList'
import { items } from "../factsList/FactsList";
import { FactCard } from './FactCard'



export const Fact = () => {
  const { id } = useParams();
  
  // const answer = getFact(id, items)

  return (
    <div>
      <Link to="/list">Back</Link>
      {/* <h1>Fact: {items ? items.title : ""} </h1> */}
    </div>
  );
}



function getFact(id: number, items: FactInterface[]): FactInterface | undefined {
  if (id) {
    return items.find((item) => item.id === id);
  } else {
    return;
  }
}
