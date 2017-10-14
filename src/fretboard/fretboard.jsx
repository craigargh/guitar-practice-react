import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
        const minFret = this.calculateMinFret();
        const maxFret = this.calculateMaxFret();

        const positionComponents = this.createPositions(minFret);
        const frets = this.createFrets(minFret, maxFret);
        const guitarStrings = this.createGuitarStrings();
        const height = this.calculateFretboardHeight(minFret, maxFret);

        return <div className='fretboard' style={{height: height}}>
            {frets}
            {guitarStrings}
            {positionComponents}
        </div>;
    }

    createPositions(minFret) {
        const {positions} = this.props;
        let offset = this.calculateFretOffset(minFret);

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

    createFrets(minFret, maxFret){
        const fretOffset = this.calculateFretOffset(minFret);

        const fretCount = maxFret - minFret + fretOffset;
        const {fretHeight} = constants;

        return Array(fretCount).fill().map((_, index) => {
            const spacing = (index + 1) * fretHeight;
            const top = `${spacing}em`;
            const key = `fret-${index}`;

            return <div className='fret' style={{top}} key={key}/>;
        });
    }

    createGuitarStrings(){
        const stringCount = 6;
        const {stringWidth} = constants;

        return Array(stringCount).fill().map((_, index) => {
            const spacing = stringWidth * index;
            const right = `${spacing}em`;
            const key = `guitar-string-${index}`;

            const wound = index >= 3 ? 'wound' : null;
            let className = classNames('guitar-string', wound);

            return <div className={className} style={{right}} key={key}/>;
        });
    }

    calculateFretboardHeight(minFret, maxFret) {
        let paddingFrets = 1 + this.calculateFretOffset(minFret);

        const displayedFrets = maxFret - minFret + paddingFrets;
        const {fretHeight} = constants;

        const height = displayedFrets * fretHeight;

        return `${height}em`;
    }

    calculateFretOffset(minFret){
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
