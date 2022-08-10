import React from 'react';
import logo from './logo.svg';
import './design/styleGuides/app.scss';
import Card from './design/components/cards/Card';

function App() {
    return (
        <div className="App">
            <div className="wrapper-card">
                <div className="btn">OK</div>
                <Card heading='Nir' bio='lorem ipsum sit amet dolor' tag='This is a tag'/>
                <Card heading='Jenny' bio='lorem ipsum sit amet dolor' tag='This is a tag 2'/>
                <Card heading='Tomer' bio='lorem ipsum sit amet dolor' tag='This is a tag 3'/>
                <Card heading='Eran' bio='lorem ipsum sit amet dolor' tag='This is a tag'/>
                <Card heading='Maayan' bio='lorem ipsum sit amet dolor' tag='This is a tag'/>
                <button>OK2</button>
            </div>
        </div>
    );
}

export default App;
