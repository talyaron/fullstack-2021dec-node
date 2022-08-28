import { useState } from 'react';

import Register from './features/Register';

import './App.css';

export interface User {
  username: string,
  password: string,
  id: string
}

function App() {
  const [usersList, setUsersList] = useState<User[]>([]);

  const handleGetUser = (user: User) => {
    setUsersList(prevState => [...prevState,user]);
  }
  const handleClick = () => {
    console.log(usersList);
  }
  return (
    <div className="App">
      <Register onSubmit={handleGetUser}/>
      <button onClick={handleClick}>Show Users</button>
    </div>
  );
}

export default App;
