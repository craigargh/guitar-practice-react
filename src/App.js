import React, {Component} from 'react';
import './App.css';
import {Exercise} from "./exercise/exercise";
import {DataLoader} from "./data-loader/data-loader";

class App extends Component {
    render() {
        const url = 'http://127.0.0.1:5000/exercise/rhythm-arpeggios/1/';

        return (
            <div className="App">
                <DataLoader component={Exercise} url={url}/>
            </div>
        );
    }
}

export default App;
