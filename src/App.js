import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import {ExerciseLoader} from "./data-loader/exercise-loader";


class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Route
                        path='/exercise/:exerciseName/:difficulty'
                        component={ExerciseLoader}
                    />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
