import './view/components/cards/styles/app.scss';
import Card from './view/components/cards/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="card1">
         <div className='text'>
        <Card text='flower' />
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
