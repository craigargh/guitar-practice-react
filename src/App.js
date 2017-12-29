import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import {ExerciseLoader} from "./data-loader/exercise-loader";
import {ExercisesLoader} from "./data-loader/exercises-loader";


class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Route
                            path='/exercise/:exerciseName/:difficulty'
                            component={ExerciseLoader}
                        />
                        <Route
                            path='/exercises/'
                            component={ExercisesLoader}
                        />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
