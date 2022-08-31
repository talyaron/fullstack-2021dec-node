import { useState } from "react";
import { Link } from "react-router-dom";

export const Elephant = () => {
  const [ border, setBorder ] = useState<boolean>(true);
 

  const handleCheckAnswer = () => {
    try {
     

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {border ? (
        <div
          className="flex__card"
          onClick={handleCheckAnswer}
        >
          <img
            className="flex__card__img"
            src="https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/KT2JHPPZCJECNIGX44RUBOTOMM.jpeg"
            alt="img"
          />
          <p className="flex__card__text">
            If an Elephant dies, it’s family members take very good care of the
            bones
          </p>
        </div>
      ) : (
        <div className="flex__card" onClick={handleCheckAnswer}>
          <img
            className="flex__card__img"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ed/b4/65/jumbo-the-elephant-monument.jpg?w=1200&h=1200&s=1"
            alt="img"
          />
          <p className="flex__card__text">The elephants never dies</p>
        </div>
      )}
    </div>
  );
};
