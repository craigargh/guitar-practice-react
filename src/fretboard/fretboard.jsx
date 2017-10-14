import React from 'react';
import PropTypes from 'prop-types';

import {Position} from "./position";
import * as constants from './constants'

import './fretboard.css';

export class Fretboard extends React.Component {
    static propTypes = {
        positions: PropTypes.array,
    };

    constructor(props) {
        super(props);
    }

    render() {
        const positionComponents = this.createPositions();
        const frets = this.createFrets();
        const height = this.calculateFretboardHeight();

        return <div className='fretboard' style={{height: height}}>
            {frets}
            {positionComponents}
        </div>;
    }

    createPositions() {
        const {positions} = this.props;
        const minFret = this.calculateMinFret();
        let offset = this.calculateFretOffset();

        const positionComponents = positions.map((position, index) => {
            const offsetFret = position.fret - minFret + offset;

            const calculatedPosition = {
                ...position,
                fret: offsetFret
            };

            const key = `position-${index}`;
            return <Position key={key} {...calculatedPosition} />
        });

        return positionComponents;
    }

    createFrets(){
        const minFret = this.calculateMinFret();
        const maxFret = this.calculateMaxFret();
        const fretOffset = this.calculateFretOffset();

        const fretCount = maxFret - minFret + fretOffset;
        const {fretHeight} = constants;

        return Array(fretCount).fill().map((_, i) => {
            const spacing = (i + 1) * fretHeight;
            const top = `${spacing}em`;

            return <div className='fret' style={{top}}/>;
        });
    }

    calculateFretboardHeight() {
        const minFret = this.calculateMinFret();
        const maxFret = this.calculateMaxFret();

        let paddingFrets = 1 + this.calculateFretOffset();

        const displayedFrets = maxFret - minFret + paddingFrets;
        const {fretHeight} = constants;

        const height = displayedFrets * fretHeight;

        return `${height}em`;
    }

    calculateFretOffset(){
        const minFret = this.calculateMinFret();
        let offset = 2;

        if (minFret === 1){
            offset = 1;
        } else if (minFret === 0){
            offset = 0;
        }

        return offset
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
