import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import {DataLoader} from "./data-loader/data-loader";


class App extends Component {
    render() {
        const url = 'http://127.0.0.1:5000/exercise/arpeggio-picking/1/';

        return (
            <div className="App">
                <BrowserRouter>
                    <Route
                        path='/exercise/:exerciseName/:difficulty'
                        component={DataLoader}
                    />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
