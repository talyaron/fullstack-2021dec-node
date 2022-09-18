import { Answer } from "./factModel";
import { useState } from "react";
enum Correct {
  TRUE = "true",
  FALSE = "false",
  NULL = "null",
}

type OptionCardProps = {
  answer: Answer;
  isCorrect: boolean;
};

export const AnswerCard: React.FC<OptionCardProps> = (
  { answer, isCorrect },
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
          src={answer.src}
          alt="img"
        />
        <p className="flex__card__text">{answer.text}</p>
      </div>
    </div>
  );
};
