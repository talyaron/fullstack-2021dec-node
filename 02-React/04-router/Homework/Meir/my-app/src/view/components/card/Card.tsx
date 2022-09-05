interface CardProps {
  text: string;
  title: string;
  img: string; 
}

const Card = ({ text, title, img }: CardProps) => {

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{text}</p>
      <p>{img}</p>
    </div>
  );
};

export default Card;
