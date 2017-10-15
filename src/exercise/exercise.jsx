import React from 'react';
import PropTypes from 'prop-types';

import {Tablature} from "../tablature/tablature";
import {Fretboard} from "../fretboard/fretboard";
import './exercise.css';

export class Exercise extends React.Component {
    static propTypes = {
        sequence: PropTypes.array,
        shapes: PropTypes.array,
    };

    static defaultProps = {
        shapes: [],
        sequence: [],
    };

    render() {
        const fretboards = this.makeFretboards();
        const tablature = this.makeTablature();

        return <div>
            {fretboards}
            {tablature}
        </div>
    };

    makeTablature() {
        const {sequence} = this.props;
        return <Tablature sequence={sequence}/>;
    }

    makeFretboards() {
        const {shapes} = this.props;

        return shapes.map((shape, index) => {
            const key = `fretboard-${index}`;

            return <Fretboard {...shape} key={key}/>
        });
    }
}