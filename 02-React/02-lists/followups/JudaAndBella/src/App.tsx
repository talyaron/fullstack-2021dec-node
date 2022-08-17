import {useState, useEffect} from "react";
import axios from "axios";
import "./view/styles/app.scss";

import Card from "./view/components/card/Card";

interface Breed {
    breed : string,
    country : string,
    origin : string,
    coat : string,
    pattern : string
}

let factVar = "";

function App() {
    const [counter,
        setCounter] = useState(0); //initial value
    const [factVar,
        setFactVar] = useState(''); //initial value
    const [allBreeds,
        setBreeds] = useState([]);

    async function handleAddCounter() {
        try {
            console.log("counter:", counter);

            const {data} = await axios.get("https://catfact.ninja/breeds"); //rest API

            const allBreeds = data.data
            console.log(allBreeds);

            if (!allBreeds) 
                throw new Error("No breeds");
            
            setBreeds(allBreeds)
            setCounter(counter + 1);

        } catch (error) {
            console.error(error);
        }
    };

    const counterEffect = counter;

    useEffect(() => {
        const identifier = setTimeout(() => {
            setCounter(counterEffect)
        }, 300);
        console.log("EFFECT RUNNING");

        return () => {
            console.log("EFFECT CLEANUP");
            clearTimeout(identifier);
        };
    }, [counterEffect]);

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={handleAddCounter}>ADD</button>

                <div className="btn">OK</div>

                {allBreeds.map((breed : Breed) => (<Card
                    key={breed.breed}
                    breed={breed.breed}
                    country={breed.country}
                    origin={breed.origin}
                    coat={breed.coat}
                    pattern={breed.pattern}/>))}

                <button>OK2</button>
            </header>
        </div>
    );
}

export default App;
