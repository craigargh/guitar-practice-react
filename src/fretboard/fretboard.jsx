import React from 'react';
import PropTypes from 'prop-types';
import {Position} from "./position";

import './fretboard.css';

export class Fretboard extends React.Component {
    static propTypes = {
        positions: PropTypes.array,
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {positions} = this.props;

        const positionComponents = positions.map((position, index) => {
            const key = `position-${index}`;
            return <Position key={key} {...position} />
        });

        const height = this.calculateFretboardHeight();

        console.log(height);

        return <div className='fretboard' style={{height: height}}>
            {positionComponents}
        </div>;
    }

    calculateFretboardHeight() {
        const minFret = this.calculateMinFret();
        const maxFret = this.calculateMaxFret();

        console.log(minFret)

        let paddingFrets = 3;

        if (minFret === 1){
            paddingFrets -= 1;
        } else if (minFret === 0){
            paddingFrets -= 2;
        }

        const displayedFrets = maxFret - minFret + paddingFrets;
        const fretHeight = 3;

        const height = displayedFrets * fretHeight;

        return `${height}em`;
    }

    calculateMaxFret() {
        const frets = this.props.positions.map((position) => {
            return position.fret;
        });

        return frets.reduce(function (a, b) {
            return Math.max(a, b);
        });
    }

    calculateMinFret(){
        const frets = this.props.positions.map((position) => {
            return position.fret;
        });

        return frets.reduce(function (a, b) {
            return Math.min(a, b);
        });
    }
}
