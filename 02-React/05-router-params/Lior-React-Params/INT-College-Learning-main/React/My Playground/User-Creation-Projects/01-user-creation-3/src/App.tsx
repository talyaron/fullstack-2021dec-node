import Register from './features/Register';

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
      <Register onSubmit={handleGetUser} />
    </div>
  );
}

export default App;
