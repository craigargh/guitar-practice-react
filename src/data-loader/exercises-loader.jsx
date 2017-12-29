import React from 'react';
import PropTypes from 'prop-types'
import fetch from 'isomorphic-fetch';
import {Exercises} from "../exercises/exercises";


export class ExercisesLoader extends React.Component {
    static propTypes = {
        match: PropTypes.object
    };

    constructor(props) {
        super(props);

        const url = `http://127.0.0.1:5000/exercises/`;

        this.state = {
            exercises: {},
            loading: true,
            url: url,
        }
    }

    componentDidMount() {
        this.setState({loading: true});

        fetch(this.state.url)
            .then(response => response.json())
            .then(exercises => {
                console.log(exercises);

                this.setState({
                    exercises: exercises,
                    loading: false,
                });
            });
    }

    render() {
        const {loading, exercises} = this.state;

        if (loading) {
            return <div>Loading...</div>
        } else {
            return <Exercises exercises={exercises} />
        }
    }
}