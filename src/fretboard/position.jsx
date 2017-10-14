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
            right: stringPosition
        };

        return <div className="circle" style={position}>
            <div className="position-text">{finger}</div>
        </div>
    }

    calculateFretPosition() {
        const fretHeight = 2.5;
        const {fret} = this.props;

        const fretPosition = fretHeight * fret;

        return `${fretPosition}em`;
    }

    calculateStringPosition() {
        const stringWidth = 2.5;
        const {guitar_string} = this.props;

        const stringPosition = stringWidth * guitar_string;

        return `${stringPosition}em`;
    }
}
