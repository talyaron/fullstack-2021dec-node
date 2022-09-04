import { Option } from "./factModel";
import { useState } from "react";
enum Correct {
  TRUE = "true",
  FALSE = "false",
  NULL = "null",
}

type OptionCardProps = {
  option: Option;
  isCorrect: boolean;
};

export const OptionCard: React.FC<OptionCardProps> = (
  { option, isCorrect },
  props: OptionCardProps
) => {
  const [isTrue, setIsTrue] = useState<Correct>(Correct.NULL);

  const handleChoose = () => {
    try {
      console.log("clicked");
      if (isCorrect) {
        setIsTrue(Correct.TRUE);
      } else setIsTrue(Correct.FALSE);
    } catch (error) {
      console.error(error);
    }
  };

  function responseColor(correct: Correct): string {
    try {
      switch (correct) {
        case Correct.TRUE:
          return "green";
        case Correct.FALSE:
          return "red";
        default:
          return "white";
      }
    } catch (error) {
      console.error(error);
      return "white";
    }
  }

  return (
    <div>
      <div className="flex__card" style={{backgroundColor:`${responseColor(isTrue)}`}}>
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
