import React from 'react';
import fetch from 'isomorphic-fetch';

export class DataLoader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            exercise: {},
            loading: true,
            url: props.url,
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
        const Component = this.props.component;

        if (loading) {
            return <div>Loading...</div>
        } else {
            return <Component {...exercise} />
        }
    }
}