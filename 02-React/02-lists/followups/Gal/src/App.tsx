
import './view/styles/app.scss';

import Card from './view/components/card/Card';

interface Name {
  title:string,
  text:string,
  id:string
}

const names:Name[] = [
  {id:'2342', title:'Moshe', text:'let my people go'},
  {id:'fdhdfhdffhd', title:'Nelson Mandela', text:'Eye for an eye, and the whole world will be blind'},
  {id:'ryerhf', title:"Archimedes", text:"EUREKA!"}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="btn">OK</div>
        {names.map((name:Name)=>{
          return <Card key={name.id} title={name.title} text={name.text} />
        })}
       
        <button>OK2</button>
      </header>
    </div>
  
  );
}

export default App;
