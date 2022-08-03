
import logo from "./logo.svg";
import "./App.scss";

//componets
import Card from "./view/components/Card";

function App() {

  return (
    <>
      <p>
        <div className="App">Hi</div>
      </p>
      <img src='https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3JhbmdlJTIwZmxvd2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt='some flower' />
      <Card text="Hi" imgUrl="https://cooldot.co/wp-content/uploads/2018/12/2-Bola-de-estabilidad-Cooldot-65cm-Marron-min-600x600.jpg"/>
      <Card text="Mom" imgUrl="https://cdn.britannica.com/68/195168-050-BBAE019A/football.jpg"/>
      <Card text='Pa' imgUrl="https://cdn.britannica.com/68/195168-050-BBAE019A/football.jpg"/>
      <Card text='sisters'  imgUrl="https://cdn.britannica.com/68/195168-050-BBAE019A/football.jpg"/>
      <Card text='world' imgUrl=""/>
      <Paragraph />
      <p>fdhdfh</p>
    </>
  );
}

function Paragraph(){
  return (
    <p>This is a Paragraph</p>
  )
}

export default App;
