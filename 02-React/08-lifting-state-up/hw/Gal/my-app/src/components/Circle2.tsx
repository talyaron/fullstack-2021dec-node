interface BackgroundColorProps {
  changeBackgroundColor2: Function;
  backgroundColor2: string;
}

const Circle2 = ({
  changeBackgroundColor2,backgroundColor2}: BackgroundColorProps) => {

  function handleClick() {
    changeBackgroundColor2();
  }

  return (
    <div className="godDiv">
      <div
        className="backgroundColor"
        style={{ backgroundColor: ` ${backgroundColor2}` }}
        onClick={handleClick}
      >
        {backgroundColor2}
      </div>
    </div>
  );
};

export default Circle2;