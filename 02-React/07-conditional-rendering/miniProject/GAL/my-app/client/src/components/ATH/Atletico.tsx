import {useState} from 'react'

const Atletico = () => {
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
          onClick={handleCheckAnswer}
        >
          <img
            src='https://upload.wikimedia.org/wikipedia/he/thumb/a/aa/Fc_barcelona.svg/1200px-Fc_barcelona.svg.png'
            alt="img"
          />
          <p>Was born in 1898</p>
        </div>
      ) : (
        <div onClick={handleCheckAnswer}>
        <img/>
          <p>Is the first Spanish football club</p>
        </div>
      )}
    </div>
  );
}


export default Atletico