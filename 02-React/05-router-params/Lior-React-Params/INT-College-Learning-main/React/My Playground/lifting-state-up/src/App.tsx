import Form from './Form/Form';

import './App.css';

function App() {

  const handleGetData = (user: string) => {
    console.log("In App TSX", user);
  }

  return (
    <div className="App">
      <Form onSubmit={handleGetData}/>      
    </div>
  );
}

export default App;
