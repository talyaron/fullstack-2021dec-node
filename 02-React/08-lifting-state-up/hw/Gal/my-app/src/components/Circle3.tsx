interface BackgroundColorProps {
  changeBackgroundColor3: Function;
  backgroundColor3: string;
}

const Circle3 = ({
  changeBackgroundColor3,backgroundColor3}: BackgroundColorProps) => {

  function handleClick() {
    changeBackgroundColor3();
  }

  return (
    <div className="godDiv">
      <div
        className="backgroundColor"
        style={{ backgroundColor: ` ${backgroundColor3}` }}
        onClick={handleClick}
      >
        {backgroundColor3}
      </div>
    </div>
  );
};

export default Circle3;