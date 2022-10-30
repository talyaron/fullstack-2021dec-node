import "./App.css";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { Modal } from "./features/blog/Modal";
import { textSelector, changeText } from "./features/text/textSlice";


function App() {
  return (
    <div className="App">
      <Input />
      <Output />
      <Modal/>
      </div>
  );
}

export default App;

function Input() {
  const dispatch = useAppDispatch();
  function handleTextChange(ev: any) {
    dispatch(changeText(ev.target.value));
  }

  return (
    <div>
      <input className="input" onChange={handleTextChange} />
    </div>
  );
}

function Output() {
  const text = useAppSelector(textSelector);
  return (
    <div>
      <div>{ text.length > 0 ? text : 'Text is here'}</div>
    </div>
  );
}
