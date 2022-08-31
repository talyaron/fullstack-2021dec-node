import { Link } from 'react-router-dom';
    
export const Page404 = () => {
  return (
    <div className="page404">
      <h2>404 ERROR</h2>
      <Link to="/">
        Go back Home
      </Link>
    </div>
  );
}

