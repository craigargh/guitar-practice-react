import React from 'react';
import PropTypes from 'prop-types';
import {Position} from "./position";

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

        return <div className='fretboard' style={{height: height}}>
            {positionComponents}
        </div>;
    }

    calculateFretboardHeight() {
        const minFret = this.calculateMinFret();
        const maxFret = this.calculateMaxFret();

        let paddingFrets = 3;

        if (minFret === 1){
            paddingFrets -= 1;
        } else if (minFret === 0){
            paddingFrets -= 2;
        }

        const displayedFrets = maxFret - minFret + paddingFrets;
        const fretHeight = 2.5;

        const height = displayedFrets * fretHeight;

        return `${height}em`;
    }

    calculateMaxFret() {
        return this.props.positions.reduce(function (a, b) {
            return Math.max(a.fret, b.fret);
        });
    }

    calculateMinFret(){
        return this.props.positions.reduce(function (a, b) {
            return Math.min(a.fret, b.fret);
        });
    }
}
