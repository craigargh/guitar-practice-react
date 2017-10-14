import React from 'react';

import './tablature.css';

export class Tablature extends React.Component {
    render() {
        const {sequence} = this.props;

        const tabItems = sequence.map((item, index) => {
            const key = `tab-item-${index}`;
            const {fret, order, guitar_string} = item;

            const offsetStyle = {
                left: `${order}em`,
                top: `${guitar_string - 1}em`,
            };

            return <div className='tab-position' style={offsetStyle} key={key}>
                {fret}
            </div>
        });

        return <div className='tab'>
            {tabItems}
        </div>
    }
}