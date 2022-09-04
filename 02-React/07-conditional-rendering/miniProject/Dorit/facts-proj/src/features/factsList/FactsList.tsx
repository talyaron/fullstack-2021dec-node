import axios from "axios";
import { Link } from "react-router-dom";
import { FactCard } from "../fact/FactCard";
import { FactProps } from "../fact/factModel";



interface FactsListProps {
  facts: FactProps[];
}

export const FactsList = ({ facts }: FactsListProps) => {
  // const handleSave = async () => {
  //   const {data} = await axios.post("/fact/save-fact")
  //   console.log(data)
  // }

  return (
    <div>
      {/* <button onClick={handleSave}>Save</button> */}
      <h2 className="header">These are my facts</h2>
      <div className="grid">
        {facts.map((fact) => {
          return (
            <Link key={fact._id} className="goToFact" to={`/fact/${fact._id}`}>
              <FactCard fact={fact} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
