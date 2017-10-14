import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Fretboard} from "./fretboard/fretboard";

class App extends Component {
    render() {
        const positions = [
            {finger: 1, fret: 1, guitar_string: 1},
            {finger: 2, fret: 2, guitar_string: 2},
            {finger: 3, fret: 3, guitar_string: 3},
        ];

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <Fretboard positions={positions}/>
            </div>
        );
    }
}

export default App;
