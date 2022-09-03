import React from 'react';

import './view/styles/app.scss';
import Card from './view/components/card/Card';

interface Name {

  name: string,
  age: string,
  imgUrl:string,
  id:string,
}

const names: Name[] = [
  { id: '345efg', name: 'yosi', age: '34', imgUrl: 'https://images.freeimages.com/images/previews/4ba/healthy-food-1327899.jpg' },
  { id: '345sde4fg', name: 'dudu', age: '23' , imgUrl: 'https://images.freeimages.com/images/previews/70b/bike-red-1423575.jpg'}

]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {names.map(person => {
          return <Card key={person.id} name={person.name} age={person.age} imgUrl={person.imgUrl} />

        })}


      </header>
    </div>
  );
}

export default App;
