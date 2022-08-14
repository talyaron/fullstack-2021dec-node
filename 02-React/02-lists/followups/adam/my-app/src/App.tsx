
import './view/styles/app.scss';

import Card from './view/components/card/Card';

interface Name {
  title:string,
  text:string,
  id:string
}

const names:Name[] = [
  {id:'hapoel', title:'Ultras', text:'Ad Hamavet Ze Shaar Hamsesh'},
  {id:'Salim', title:'Salim Toama', text:'Salim Toama Salim, Anahnu Otha Oavim'},
  
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
