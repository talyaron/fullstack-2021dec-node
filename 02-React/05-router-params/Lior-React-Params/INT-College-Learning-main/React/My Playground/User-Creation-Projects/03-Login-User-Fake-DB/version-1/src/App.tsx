import Register from './features/Register';

import './App.css';
import { useState } from 'react';
import Login from './features/Login';

export interface User {
  username: string,
  password: string,
  id: string
}

function App() {

  const [usersList, setUsersList] = useState<User[]>([]);

  const handleRegisterUser = (user: User) => {
    setUsersList(prevState => ([...prevState,user]));
  }

  const handleLoginUser = (user: User) => {
    try {
      const userExist = usersList.find( userList => userList.username === user.username && userList.password === user.password);
      if (!userExist) throw new Error("Username or password incorrect");
      console.log({login: true});
    } catch (error) {
      console.error(error);
    }
  }

  const handleShowUsers = () => {
    console.log(usersList);
  }
  
  return (
    <div className="App">
      <Register onSubmit={handleRegisterUser}/>
      <Login onSubmit={handleLoginUser}/>
      <button onClick={handleShowUsers}>Show Users</button>
    </div>
  );
}

export default App;
