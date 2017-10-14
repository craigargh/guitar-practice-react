import React from 'react';

import './tablature.css';

export class Tablature extends React.Component {
    render() {
        const tabLength = this.getTabLength();
        const tabLines = this.makeTabLines(tabLength);

        const tabItems = this.makeTabPositions();

        return <div className='tab'>
            {tabLines}
            {tabItems}
        </div>
    }

    getTabLength(){
        const {sequence} = this.props;
        const itemOrders = sequence.map((item) => {
            return item.order;
        });

        return itemOrders.reduce((a, b) => {
            return Math.max(a, b);
        });
    }

    makeTabPositions() {
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

        return tabItems;
    }

    makeTabLines(tabLength){
        const guitarStrings = 6;

        return Array(guitarStrings).fill().map((_, index) => {
            const key = `tab-guitar-string-${index}`;
            const stringOffset = {
                top: `${index}em`,
                width: `${tabLength + 1}em`,
            };

            return <div className='tab-line' style={stringOffset} key={key}/>;
        });
    }
}