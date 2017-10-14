import React from 'react'
import PropTypes from 'prop-types'

import './position.css'
import * as constants from './constants'

export class Position extends React.Component {
    static propTypes = {
        finger: PropTypes.number,
        fret: PropTypes.number,
        guitar_string: PropTypes.number,
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {finger} = this.props;
        const fretPosition = this.calculateFretPosition();
        const stringPosition = this.calculateStringPosition();

        const position = {
            top: fretPosition,
            right: stringPosition,
        };

        return <div className="circle" style={position}>
            <div className="position-text">{finger}</div>
        </div>
    }

    calculateFretPosition() {
        const {fret} = this.props;
        const {fretHeight, circleSize} = constants;
        const offset = fretHeight - circleSize;

        const fretPosition = fretHeight * (fret - 1) + offset;

        return `${fretPosition}em`;
    }

    calculateStringPosition() {
        const {guitar_string} = this.props;
        const {stringWidth, circleSize} = constants;
        const offset = stringWidth - circleSize;

        const stringPosition = stringWidth * (guitar_string - 1)  + offset;

        return `${stringPosition}em`;
    }
}
