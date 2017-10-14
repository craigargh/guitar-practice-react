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

        return <div>
            {positionComponents}
        </div>;
    }
}
