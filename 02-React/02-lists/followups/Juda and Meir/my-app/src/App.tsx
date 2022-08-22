import React from 'react';
import  './view/style/style.scss';
import Card from "./view/components/Card/Card";

interface Joke{
name: string,
text: string,
id: string

}

const jokes:Joke[] = [

    {name: "What’s the best thing about Switzerland?" , text: "I don’t know, but the flag is a big plus.", id: "456df"},
    {name: "Helvetica and Times New Roman walk into a bar." , text: "“Get out of here!” shouts the bartender. “We don’t serve your type.”", id: "fjhjlbn"},
    {name: "Yesterday I saw a guy spill all his Scrabble letters on the road. I asked him, “What’s the word on the street?”", text:'Once my dog ate all the Scrabble tiles. For days he kept leaving little messages around the house. Don’t miss these hilarious egg puns that will absolutely crack you up.', id:'cacasdcsc'}
];







function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <div className='card'>OK</div>

        {jokes.map((joke:Joke)=>{
           return <Card key={joke.id} name={joke.name} text={joke.text} />
        })}


      
   
      </header>
    </div>
  );
}

export default App;
