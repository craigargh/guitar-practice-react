import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './tablature.css';
import './rhythm.css';

export class Tablature extends React.Component {
    static propTypes = {
        sequence: PropTypes.array,
        rhythm: PropTypes.array,
    };

    static defaultProps = {
        sequence: [],
        rhythm: [],
    };

    render() {
        const tabLength = this.getTabLength();
        const tabLines = this.makeTabLines(tabLength);

        const tabItems = this.makeTabPositions();

        const rhythm = this.makeRhythm();

        return <div className='tab'>
            {tabLines}
            {tabItems}
            {rhythm}
        </div>
    }

    getTabLength() {
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

    calculateMinOrder() {
        const order = this.props.sequence.map((item) => {
            return item.order;
        });

        return order.reduce(function (a, b) {
            return Math.min(a, b);
        });
    }

    makeTabLines(tabLength) {
        const guitarStrings = 6;

        return Array(guitarStrings).fill().map((_, index) => {
            const key = `tab-guitar-string-${index}`;
            const stringClass = `tab-string__${index + 1}`;
            const widthClass = `tab-line__${tabLength}`;

            const lineStyles = classNames('tab-line', stringClass, widthClass);

            return <div className={lineStyles} key={key}/>;
        });
    }

    makeRhythm() {
        const {rhythm} = this.props;

        const beats = rhythm.map((item) => {
            return item.division / item.duration;
        });

        const rhythmLines = this.makeRhythmLines(beats);

        return <div className='rhythm'>
            {rhythmLines}
        </div>
    }

    makeRhythmLines(beats) {
        let beatCount = 0;

        return beats.map((beat, index) => {
            const beam = this.makeBeam(beatCount, beat);
            const doubleBeam = this.makeDoubleBeam(beatCount, beat);


            if (beatCount + (1 / beat) >= 0.25) {
                beatCount = 0;
            } else {
                beatCount += 1 / beat;
            }

            const durationClass = `beat-duration-${beat}`;
            const beatStyles = classNames('beat', durationClass);

            return <div className={beatStyles} key={index}>
                <div className='beat-stem'/>
                {beam}
                {doubleBeam}
            </div>
        });
    }

    makeBeam(beatCount, beat) {
        const beamType = this.getBeamType(beatCount, beat);

        const beamClass = `beam${beamType}`;

        return this.showBeam(beatCount, beat) ? <div className={beamClass}/> : null;
    }

    makeDoubleBeam(beatCount, beat) {
        const showDoubleBeam = beat === 16 && this.showBeam(beatCount, beat);

        const beamType = this.getBeamType(beatCount, beat);
        const beamClass = `double-beam${beamType}`;

        return showDoubleBeam ? <div className={beamClass}/> : null;
    }

    getBeamType(beatCount, beat){
        let beamType = '';

        console.log(beatCount + (1 / beat));

        if(beatCount === 0){
            beamType = '-first';
        } else if (beatCount + (1 / beat) >= 0.25){
            beamType = '-last'
        }

        return beamType;
    }

    showBeam(beatCount, beat) {
        const nextBeat = beatCount + (1 / beat);
        return nextBeat <= 0.25 && beat > 4;
    }
}