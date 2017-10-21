import React from 'react';
import PropTypes from 'prop-types'
import fetch from 'isomorphic-fetch';
import {Exercise} from "../exercise/exercise";

export class DataLoader extends React.Component {
    static propTypes = {
        match: PropTypes.object
    };

    constructor(props) {
        super(props);

        const {exerciseName, difficulty} = props.match.params;
        const url = `http://127.0.0.1:5000/exercise/${exerciseName}/${difficulty}/`;

        this.state = {
            exercise: {},
            loading: true,
            url: url,
        }
    }

    componentDidMount() {
        this.setState({loading: true});

        fetch(this.state.url)
            .then(response => response.json())
            .then(exercise => {
                this.setState({
                    exercise: exercise,
                    loading: false,
                });
            });
    }

    render() {
        const {loading, exercise} = this.state;

        if (loading) {
            return <div>Loading...</div>
        } else {
            return <Exercise {...exercise} />
        }
    }
}