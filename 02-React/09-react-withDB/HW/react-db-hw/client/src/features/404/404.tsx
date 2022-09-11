import { NavLink } from 'react-router-dom';
import scullImg from '../404/scull.png';
    

export const Page404 = () => {
  return (
    <div className="page404">
      <h2>Upss... Wrong way..</h2>
      <NavLink className="text-decoration" to="/">
        Home is Here...
      </NavLink>
      <img src={scullImg} alt="scull img" />
    </div>
  );
}

