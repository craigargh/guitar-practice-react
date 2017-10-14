import React, {Component} from 'react';
import './App.css';
import {Fretboard} from "./fretboard/fretboard";
import {Tablature} from "./tablature/tablature";

class App extends Component {
    render() {
        const shapes = [
            {
                is_picked: true,
                positions: [
                    {
                        duration: 1,
                        finger: 0,
                        fret: 0,
                        guitar_string: 4,
                        is_highlighted: false,
                        order: null
                    },
                    {
                        duration: 1,
                        finger: 4,
                        fret: 4,
                        guitar_string: 3,
                        is_highlighted: true,
                        order: null
                    },
                    {
                        duration: 1,
                        finger: 0,
                        fret: 0,
                        guitar_string: 2,
                        is_highlighted: false,
                        order: null
                    },
                    {
                        duration: 1,
                        finger: 1,
                        fret: 1,
                        guitar_string: 1,
                        is_highlighted: false,
                        order: null
                    }
                ],
                root_note: 'B',
                tonality: 'Diminished'
            },
            {
                is_picked: true,
                positions: [
                    {
                        duration: 1,
                        finger: 0,
                        fret: 0,
                        guitar_string: 5,
                        is_highlighted: true,
                        order: null
                    },
                    {
                        duration: 1,
                        finger: 2,
                        fret: 2,
                        guitar_string: 4,
                        is_highlighted: false,
                        order: null
                    },
                    {
                        duration: 1,
                        finger: 3,
                        fret: 2,
                        guitar_string: 3,
                        is_highlighted: true,
                        order: null
                    },
                    {
                        duration: 1,
                        finger: 1,
                        fret: 1,
                        guitar_string: 2,
                        is_highlighted: false,
                        order: null
                    },
                    {
                        duration: 1,
                        finger: 0,
                        fret: 0,
                        guitar_string: 1,
                        is_highlighted: true,
                        order: null
                    }
                ],
                root_note: 'A',
                tonality: 'Minor'
            }
        ];

        const sequence = [
            {duration: 1, finger: 0, fret: 0, guitar_string: 4, is_highlighted: false, order: 0},
            {
                duration: 1,
                finger: 4,
                fret: 4,
                guitar_string: 3,
                order: 1
            },
            {
                duration: 1,
                finger: 0,
                fret: 0,
                guitar_string: 2,
                order: 2
            },
            {
                duration: 1,
                finger: 1,
                fret: 1,
                guitar_string: 1,
                order: 3
            },
            {
                duration: 1,
                finger: 1,
                fret: 1,
                guitar_string: 1,
                order: 4
            },
            {
                duration: 1,
                finger: 0,
                fret: 0,
                guitar_string: 2,
                order: 5
            },
            {
                duration: 1,
                finger: 4,
                fret: 4,
                guitar_string: 3,
                order: 6
            },
            {
                duration: 1,
                finger: 0,
                fret: 0,
                guitar_string: 4,
                order: 7
            },
            {
                duration: 1,
                finger: 0,
                fret: 0,
                guitar_string: 5,
                order: 8
            },
            {
                duration: 1,
                finger: 2,
                fret: 2,
                guitar_string: 4,
                order: 9
            },
            {
                duration: 1,
                finger: 3,
                fret: 2,
                guitar_string: 3,
                order: 10
            },
            {
                duration: 1,
                finger: 1,
                fret: 1,
                guitar_string: 2,
                order: 11
            },
            {
                duration: 1,
                finger: 0,
                fret: 0,
                guitar_string: 1,
                order: 12
            },
            {
                duration: 1,
                finger: 1,
                fret: 1,
                guitar_string: 2,
                order: 13
            },
            {
                duration: 1,
                finger: 3,
                fret: 2,
                guitar_string: 3,
                order: 14
            },
            {
                duration: 1,
                finger: 2,
                fret: 2,
                guitar_string: 4,
                order: 15
            }
        ];


        return (
            <div className="App">
                <div className='fretboards-container'>
                    <Fretboard {...shapes[0]}/>
                    <Fretboard {...shapes[1]}/>
                </div>
                <div className='tab-container'>
                    <Tablature sequence={sequence}/>
                </div>
            </div>
        );
    }
}

export default App;
