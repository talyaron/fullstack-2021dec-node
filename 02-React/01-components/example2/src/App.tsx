
import './view/styles/app.scss';

import Card from './view/components/card/Card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="btn">OK</div>
        <Card text='a'/>
        <Card text='b'/>
        <Card text='c'/>
        <Card text='d'/>
        <Card text='e'/>
        <button>OK2</button>
      </header>
    </div>
  
  );
}

export default App;
