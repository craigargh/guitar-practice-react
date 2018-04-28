import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {Tablature} from "../tablature/tablature";
import {Fretboard} from "../fretboard/fretboard";
import './exercise.css';

export class Exercise extends React.Component {
    static propTypes = {
        sequence: PropTypes.array,
        shapes: PropTypes.array,
        rhythm: PropTypes.array,
    };

    static defaultProps = {
        shapes: [],
        sequence: [],
        rhythm: [],
    };

    render() {
        const fretboards = this.makeFretboards();
        const tablature = this.makeTablature();

        return <div>
            <div className='fretboards-container'>
                {fretboards}
            </div>
            <div className='tab-container'>
                {tablature}
            </div>
        </div>
    };

    makeTablature() {
        const sequences = this.chunk(this.props.sequence);
        const rhythm = this.props.rhythm;

        const tabs = sequences.map((sequence, index) => {
            const key = `tab-block-${index}`;

            return <Tablature key={key} sequence={sequence} rhythm={rhythm}/>;
        });

        return tabs;
    }

    chunk(sequence) {
        const grouped_beats = _.groupBy(sequence, (item) => item.order);

        const nested_beats = [];
        for (let order in grouped_beats){
            nested_beats.push(grouped_beats[order]);
        }

        const chunked_beats = _.chunk(nested_beats, 16);

        const groups = [];
        for (let index = 0; index < chunked_beats.length; index ++){
            let group = chunked_beats[index];

            const flattened_group = _.flatten(group);
            groups.push(flattened_group)
        }

        return groups;
    }

    makeFretboards() {
        const {shapes} = this.props;

        return shapes.map((shape, index) => {
            const key = `fretboard-${index}`;

            return <Fretboard {...shape} key={key}/>
        });
    }
}