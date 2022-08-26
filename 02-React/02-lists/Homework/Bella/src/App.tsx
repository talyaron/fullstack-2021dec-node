import {useState} from "react";
import "./view/styles/app.scss";

import Card from "./view/components/card/Card";

interface Name {
    title : string;
    text : string;
    id : string;
}

const names : Name[] = [
    {
        id: "#12354647",
        title: "Lilach",
        text: "Favorite food: Lazania"
    }, {
        id: "#14654647",
        title: "Oren",
        text: "Favorite food: Sushi"
    }, {
        id: "#12351111",
        title: "Naama",
        text: "Favorite food: Pizza"
    }
];


function App() {
    const [favFood] = useState < string > (""); 

    return (
        <div className="App">
            <header className="App-header">
                <h4 className="title">{favFood}</h4>
                <div className="wrapper">
                    {names.map((name : Name) => (<Card key={name.id} title={name.title} text={name.text}/>))}
                </div>
            </header>
        </div>
    );
}

export default App;
