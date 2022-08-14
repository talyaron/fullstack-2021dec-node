
import './view/styles/app.scss';

import Card from './view/components/card/Card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="btn">OK</div>
        <Card text='a' title='aa'/>
        <Card text='b' title='aa'/>
        <Card text='c' title='aa'/>
        <Card text='d' title='aa'/>
        <Card text='e' title='aa'/>
        <button>OK2</button>
      </header>
    </div>
  
  );
}

export default App;
