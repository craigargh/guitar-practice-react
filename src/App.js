import React, {Component} from 'react';
import './App.css';
import {Fretboard} from "./fretboard/fretboard";

class App extends Component {
    render() {
        const positions = [
            {finger: 0, fret: 0, guitar_string: 1},
            {finger: 1, fret: 1, guitar_string: 2},
            {finger: 0, fret: 0, guitar_string: 3},
            {finger: 2, fret: 3, guitar_string: 4},
            {finger: 3, fret: 4, guitar_string: 5},
        ];

        return (
            <div className="App">
                <div className='fretboards-container'>
                    <Fretboard positions={positions}/>
                    <Fretboard positions={positions}/>
                    <Fretboard positions={positions}/>
                    <Fretboard positions={positions}/>
                </div>
            </div>
        );
    }
}

export default App;
