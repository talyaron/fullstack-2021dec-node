import {useState} from 'react';

import './App.css';
import Form from './components/Form';
import ShowFormInfo from './components/ShowFormInfo';

function App() {
  const [name, setName] = useState<string>('abcd');
  return (
    <div className="App">
      <header className="App-header">
        <Form setName={setName}/>
        <ShowFormInfo name={name}/>
      </header>
    </div>
  );
}

export default App;
