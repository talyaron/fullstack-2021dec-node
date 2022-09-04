import { Option } from "./factModel";
import { useState } from "react";

type OptionCardProps = {
  option: Option;
  styles: React.CSSProperties;
};




export const OptionCard: React.FC<OptionCardProps> = ({ option}, props: OptionCardProps) => {
  const [isTrue, setIsTrue] = useState(false);

  // const yes = {
  //   border: "4px solid darkgreen",
  // };

  // const no = {
  //   border: "4px solid darkred",
  // };


  const handleChoose = () => {
    try {
      console.log("clicked");

      {isTrue ? (
        <div
          className="divflex__card"
          style={props.styles}
        ></div>

      ) : (

        <div
          className="divflex__card"
          style={props.styles}
        ></div>
        
      )}  

    } catch (error) {
      console.error(error);
    }
  };
 
  
  
   
  return (
    <div>
      <div className="flex__card">

        <img
          onClick={handleChoose}
          className="flex__card__img"
          src={option.src}
          alt="img"
        />
        <p className="flex__card__text">{option.text}</p>

      </div>    
    </div>
  );
};
