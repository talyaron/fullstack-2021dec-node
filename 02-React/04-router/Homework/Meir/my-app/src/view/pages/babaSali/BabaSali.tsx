import { Link } from "react-router-dom";

const BabaSali = () => {
  return (
    <div>
      <h1>Baba Sali</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgrmwao0A2NRX8GVX5faDBI9WAtIo-WNNyKw&usqp=CAU" alt="Baba Sali" />
      <h1>Baba Sali and The Rebbe</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItwzw2U4VU4ciZnnaoVZY2kpZwcwmltzR_Q&usqp=CAU" alt="Baba Sali and The Rebbe"/>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default BabaSali;