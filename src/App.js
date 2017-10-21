import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import {DataLoader} from "./data-loader/data-loader";


class App extends Component {
    render() {
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
