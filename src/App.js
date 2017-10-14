import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Position} from "./fretboard/position";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Position finger={1} fret={1} guitar_string={1}/>
                    <Position finger={2} fret={2} guitar_string={2}/>
                    <Position finger={3} fret={3} guitar_string={1}/>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
