import React, {Component} from 'react';
import './App.css';
import {Fretboard} from "./fretboard/fretboard";

class App extends Component {
    render() {
        const positions = [
            {finger: 0, fret: 2, guitar_string: 3},
            {finger: 2, fret: 3, guitar_string: 4},
            {finger: 3, fret: 4, guitar_string: 5},
            {finger: 3, fret: 5, guitar_string: 5},
            {finger: 3, fret: 6, guitar_string: 5},
            {finger: 3, fret: 7, guitar_string: 5},
            {finger: 3, fret: 8, guitar_string: 5},
            {finger: 3, fret: 9, guitar_string: 5},
        ];

        return (
            <div className="App">
                <div style={{}}>
                    <Fretboard positions={positions}/>
                </div>
            </div>
        );
    }
}

export default App;
