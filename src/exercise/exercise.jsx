import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

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
            <div className='fretboards-container'>
                {fretboards}
            </div>
            <div className='tab-container'>
                {tablature}
            </div>
        </div>
    };

    makeTablature() {
        const sequences = _.chunk(this.props.sequence, 16);

        const tabs = sequences.map((sequence, index) => {
            const key = `tab-block-${index}`;

            return <Tablature key={key} sequence={sequence}/>;
        });

        return tabs;
    }

    makeFretboards() {
        const {shapes} = this.props;

        return shapes.map((shape, index) => {
            const key = `fretboard-${index}`;

            return <Fretboard {...shape} key={key}/>
        });
    }
}