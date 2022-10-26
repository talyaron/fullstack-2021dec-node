import "./App.css";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { blogSelector, changeBlog } from "./features/blog/blogSlice";
// import { textSelector } from "./features/counter/";
import Card from "./features/view/Card";

function App() {
  return (
    <div className="App">
      <Input />
      <Output />

      <div className="App">
        <Card
          text="Image 1"
          src="https://i.pinimg.com/736x/9a/b4/52/9ab452189deb726d7488fed8547f7a90.jpg"
        ></Card>

        <Card
          text="Image 2"
          src="https://i.pinimg.com/736x/7d/26/b2/7d26b2c91f9224ef7722a0e2a6cb9530--mdv-style-mens-style.jpg
        "
        ></Card>
        <Card
          text="Image 3"
          src="https://i.pinimg.com/originals/45/71/c3/4571c36d5c60aebbc6bfd74281188334.jpg
        "
        ></Card>
      </div>
    </div>
  );
}

export default App;

function Input() {
  const dispatch = useAppDispatch();
  function handleTextChange(ev: any) {
    dispatch(changeBlog(ev.target.value));
  }

  function handleImgChange(ev: any) {
    dispatch(changeBlog(ev.target.value.img));
  }

  return (
    <div>
        <Card
          text="shira"
          src="https://i.pinimg.com/736x/9a/b4/52/9ab452189deb726d7488fed8547f7a90.jpg"
        ></Card>

    </div>
  );
}

function Output() {
  const blog = useAppSelector(blogSelector);
  const text = useAppSelector(textSelector);
  return (
    <div>
      <div>{text}</div>
      <div>{blog.src}</div>
    </div>
  );
}
