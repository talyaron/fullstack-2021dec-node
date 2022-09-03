import Form from './features/form/form';

import './App.css';

export interface User {
  username: string,
  password: string
}

function App() {

  const handleGetUser = (user: User) => {
    console.log(user);
  }

  return (
    <div className="App">
      <Form onSubmit={handleGetUser}/>      
    </div>
  );
}

export default App;
