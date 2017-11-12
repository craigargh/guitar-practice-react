import React from 'react';
import classNames from 'classnames';

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
        const minBeat = this.calculateMinOrder();

        const {sequence} = this.props;
        const itemOrders = sequence.map((item) => {
            return item.order;
        });

        const maxBeat = itemOrders.reduce((a, b) => {
            return Math.max(a, b);
        });

        return maxBeat - minBeat;
    }

    makeTabPositions() {
        const {sequence} = this.props;
        const offset = this.calculateMinOrder();

        const tabItems = sequence.map((item, index) => {
            const {fret, order, guitar_string} = item;

            const key = `tab-item-${index}`;
            const beatClass = `tab-beat__${order - offset}`;
            const stringClass = `tab-string__${guitar_string}`;

            const classStyles = classNames('tab-position', beatClass, stringClass);

            return <div className={classStyles} key={key}>
                {fret}
            </div>
        });

        return tabItems;
    }

    calculateMinOrder(){
        const order = this.props.sequence.map((item) => {
            return item.order;
        });

        return order.reduce(function (a, b) {
            return Math.min(a, b);
        });
    }

    makeTabLines(tabLength){
        const guitarStrings = 6;

        return Array(guitarStrings).fill().map((_, index) => {
            const key = `tab-guitar-string-${index}`;
            const stringClass = `tab-string__${index + 1}`;
            const widthClass = `tab-line__${tabLength}`;

            const lineStyles = classNames('tab-line', stringClass, widthClass);

            return <div className={lineStyles} key={key}/>;
        });
    }
}