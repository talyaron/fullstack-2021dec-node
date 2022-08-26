interface CardProps {
  text: string;
  title: string;
}

const Card = ({ text, title }: CardProps) => {

  return (
    <div className="card">
      <h4> -- {title} -- </h4>
      <p>{text}</p>
    </div>
  );
};

export default Card;
