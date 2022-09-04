export interface Option {
  text: string;
  src: string;
  id: string;
}

export interface FactProps {
  src: string;
  text: string;
  id: string;
  options: {
    true: Option;
    false: Option;
  };
}
