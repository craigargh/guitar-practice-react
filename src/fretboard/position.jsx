import React from 'react'
import PropTypes from 'prop-types'
import './position.css'

export class Position extends React.Component {
    static propTypes = {
        finger: PropTypes.number,
        fret: PropTypes.number,
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {finger} = this.props;
        const fretPosition = this.calculateFretPosition();

        const position = {
            position: "absolute",
            top: fretPosition,
        };

        return <div className="circle" style={position}>
            <div className="position-text">{finger}</div>
        </div>
    }

    calculateFretPosition(){
        const fretHeight = 1.5;
        const {fret} = this.props;

        const fretPosition = fretHeight * fret;

        return `${fretPosition}em`;
    }
}
