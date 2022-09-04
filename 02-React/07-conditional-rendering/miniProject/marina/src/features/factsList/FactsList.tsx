import { Link } from "react-router-dom";
import { FactCard } from "./FactCard";
import { FactProps } from "../fact/factModel";


type FactsListProps = {
  // we defind the Array type of Props for Map()
  facts: FactProps[];
}

export const FactsList: React.FC<FactsListProps> = ({ facts }) => {
  return (
    <div>
      <h2 className="header">Could you imagine that...?</h2>

      <div className="grid">

        {facts.map((fact) => {
          return (
            <Link key={fact.id} className="text-decoration" to={`/fact/${fact.id}`}>

              <FactCard fact={fact} />

            </Link>
          );
        })}
        
      </div>
    </div>
  );
};
