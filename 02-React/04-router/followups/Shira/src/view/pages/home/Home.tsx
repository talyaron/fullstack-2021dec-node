import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>HOME Page</h1>
      <Link to="/about">Go to About</Link>
    </div>
  );
}

export default Home;