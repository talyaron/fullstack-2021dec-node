import { Link } from 'react-router-dom';
import scull from "./scull.png";
    

export const Page404 = () => {
  return (
    <div className="page404">
      <h2> Error</h2>
      <Link className="text-decoration" to="list">
        Go back Home
      </Link>
      <img src={scull} alt="scull img" />
    </div>
  );
}

