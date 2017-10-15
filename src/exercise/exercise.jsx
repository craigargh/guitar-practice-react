import React from 'react';
import PropTypes from 'prop-types';

import './exercise.css';

export class Exercise extends React.Component {
    static propTypes = {
        sequence: PropTypes.array,
        shapes: PropTypes.array,
    };

    render() {
        return <div/>
    };
}