
import './view/styles/app.scss';
import axios from 'axios';
import { useState } from 'react';
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

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <div className="btn">OK</div>
//         {names.map((name:Name)=>{
//           return <Card key={name.id} title={name.title} text={name.text} />
//         })}
       
//         <button>OK2</button>
//       </header>
//     </div>
  
//   );
// }
function App() {
  const [catBreeds, setCatBreeds] = useState([])

  async function handleClick(){
    try{
      const {data} = await axios.get('https://catfact.ninja/breeds')
      if (!data) throw new Error('no data')
      const breeds = data.data
       if (!breeds) throw new Error('no breed')
       breeds.map(breed)=>{return }
      setCatBreeds(breeds)
      console.log(breeds)
    }
    catch(error){
      console.error(error)
    }
  }

  return (
    <div className="App">
      
      
        <button onClick = {handleClick}>Click Me!</button>
        {/* <h3>{setCatBreeds}</h3> */}
      
    
    </div>
  );
}

export default App;



