import React from 'react'
import PropTypes from 'prop-types'
import './position.css'

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
            position: "absolute",
            top: fretPosition,
            right: stringPosition,
            marginTop: `${- 1.875 / 4}em`,
        };

        return <div className="circle" style={position}>
            <div className="position-text">{finger}</div>
        </div>
    }

    calculateFretPosition() {
        const {fret} = this.props;
        const fretHeight = 3;
        const circleHeight = 1.875;
        const offset = fretHeight - circleHeight;

        const fretPosition = fretHeight * (fret - 1) + offset;

        return `${fretPosition}em`;
    }

    calculateStringPosition() {
        const {guitar_string} = this.props;
        const stringWidth = 2;
        const circleWidth = 1.875;
        const offset = stringWidth - circleWidth;

        const stringPosition = stringWidth * (guitar_string - 1)  + offset;

        return `${stringPosition}em`;
    }
}
