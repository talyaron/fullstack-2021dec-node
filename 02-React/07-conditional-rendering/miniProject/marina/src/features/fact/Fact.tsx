import { useParams, Link } from 'react-router-dom'
import { FactInterface } from '../factsList/FactsList'
import { items } from "../factsList/FactsList";
import { FactCard } from './FactCard'

type FactProps = {
  fact: {
    src: string
    text: string
    id: number
  }
}

export const Fact = (props: FactProps) => {
  const { id } = useParams();
  
  const answer = getFact(id, items)

  return (
    <div>
      <Link to="/list">Back</Link>
      <h1>Fact: {items ? items.text : ""} </h1>
    </div>
  );
}



function getFact(id: number, fact: FactInterface[]): FactInterface | undefined {
  if (id) {
    return items.find((item) => item.id === id);
  } else {
    return;
  }
}
