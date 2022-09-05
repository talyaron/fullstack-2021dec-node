interface BackgroundColorProps {
  changeBackgroundColor1: Function;
  backgroundColor1: string;
}

const Circle1 = ({
  changeBackgroundColor1,backgroundColor1}: BackgroundColorProps) => {

  function handleClick() {
    changeBackgroundColor1();
  }

  return (
    <div className="godDiv">
      <div
        className="backgroundColor"
        style={{ backgroundColor: ` ${backgroundColor1}` }}
        onClick={handleClick}
      >
        {backgroundColor1}
      </div>
    </div>
  );
};

export default Circle1;
