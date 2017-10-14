import React from 'react'
import PropTypes from 'prop-types'

export class Position extends React.Component {
    static propTypes = {
        finger: PropTypes.number,
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {finger} = this.props;
        return <div className="circle">
            <div className="position-text">{finger}</div>
        </div>
    }
}
