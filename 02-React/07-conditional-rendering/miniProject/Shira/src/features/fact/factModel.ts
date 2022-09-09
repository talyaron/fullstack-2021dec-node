export interface Answer {
  text: string;
  src: string;
  id: string;
}

export interface FactProps {
  src: string;
  text: string;
  id: string;
  answers: {
    true: Answer;
    false: Answer;
  };
}
