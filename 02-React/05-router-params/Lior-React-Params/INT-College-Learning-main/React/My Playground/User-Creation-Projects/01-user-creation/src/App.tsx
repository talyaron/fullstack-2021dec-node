
import './App.css';
import Form from './features/Form';

export interface User {
  username : string,
  password: string,
}

function App() {

  const handleGetUser = (user: User) => {
    console.log("In App ", user);
  }

  return (
    <div className="App">
      <Form onSubmit={handleGetUser}/>
      
    </div>
  );
}

export default App;
