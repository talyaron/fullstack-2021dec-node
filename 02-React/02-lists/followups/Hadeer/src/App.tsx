
import './view/styles/app.scss';

import Card from './view/components/card/Card';

interface Destinations{
  place: string,
  month: string,
  cost: number,
}

const places:Destinations[] =[
  {place:'Austria', month:'August', cost:20000},
  {place:'Tanzania', month:'Febreuary', cost:35000},
  {place:'Philppines', month:'December', cost:40000}
]

function App() {
  return (
      <div className="App">
      <header className="App-header">
 {places.map((places:Destinations)=>{
  return <Card place={Destinations.place} month={Destinations.month} cost={Destinations.cost}/>
  // return <Card key={name.id} title={name.title} text={name.text} />

 })}
    </header>
    </div>
  );
}



export default App;
