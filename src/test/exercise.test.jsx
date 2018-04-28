import React from 'react'
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Exercise} from "../exercise/exercise";
import {Tablature} from "../tablature/tablature";

Enzyme.configure({adapter: new Adapter()});

function makeSequence(qty) {
    let sequence = [];

    for (let index = 0; index < qty; index++) {
        let item = {
            order: index
        };

        sequence.push(item)
    }

    return sequence;
}

describe('Exercise component', () => {
    it('should render a tablature component', () => {
        const sequence = makeSequence(16);

        const wrapper = shallow(<Exercise sequence={sequence}/>);

        const tablature = wrapper.find(Tablature);

        expect(tablature.length).toBe(1);
    });

    it('should render a tablature component for every 16 notes', () => {
        const sequence = makeSequence(17);

        const wrapper = shallow(<Exercise sequence={sequence}/>);

        const tablature = wrapper.find(Tablature);

        expect(tablature.length).toBe(2);
    });

    it('should render a single tablature component for 16 beats of chords', () => {
        const sequence = [
            {order: 0},
            {order: 0},
            {order: 1},
            {order: 1},
            {order: 2},
            {order: 2},
            {order: 3},
            {order: 3},
            {order: 4},
            {order: 4},
            {order: 5},
            {order: 5},
            {order: 6},
            {order: 6},
            {order: 7},
            {order: 7},
            {order: 8},
            {order: 8},
            {order: 9},
            {order: 9},
            {order: 10},
            {order: 10},
            {order: 11},
            {order: 11},
            {order: 12},
            {order: 12},
            {order: 13},
            {order: 13},
            {order: 14},
            {order: 14},
            {order: 15},
            {order: 15},
        ];

        const wrapper = shallow(<Exercise sequence={sequence}/>);

        const tablature = wrapper.find(Tablature);

        expect(tablature.length).toBe(1);
    });

    it('should render two tablature components for 17 beats of chords', () => {
        const sequence = [
            {order: 0},
            {order: 0},
            {order: 1},
            {order: 1},
            {order: 2},
            {order: 2},
            {order: 3},
            {order: 3},
            {order: 4},
            {order: 4},
            {order: 5},
            {order: 5},
            {order: 6},
            {order: 6},
            {order: 7},
            {order: 7},
            {order: 8},
            {order: 8},
            {order: 9},
            {order: 9},
            {order: 10},
            {order: 10},
            {order: 11},
            {order: 11},
            {order: 12},
            {order: 12},
            {order: 13},
            {order: 13},
            {order: 14},
            {order: 14},
            {order: 15},
            {order: 15},
            {order: 16},
            {order: 16},
        ];

        const wrapper = shallow(<Exercise sequence={sequence}/>);

        const tablature = wrapper.find(Tablature);

        expect(tablature.length).toBe(2);
    });

    it('should pass the sequence to the tablature component', () => {
        const sequence = [
            {fret: 1, guitar_string: 1, order: 1},
            {fret: 2, guitar_string: 2, order: 2},
            {fret: 3, guitar_string: 3, order: 3},
        ];

        const wrapper = shallow(<Exercise sequence={sequence}/>);
        const tablature = wrapper.find('Tablature').first();

        expect(tablature.props().sequence).toEqual(sequence);
    });

    it('should pass the rhythm to the tablature component', () => {
        const sequence = [
            {fret: 1, guitar_string: 1, order: 1},
            {fret: 2, guitar_string: 2, order: 2},
            {fret: 3, guitar_string: 3, order: 3},
        ];

        const rhythm = [
            {duration: 1, division: 4},
            {duration: 1, division: 4},
            {duration: 1, division: 4},
        ];

        const wrapper = shallow(<Exercise sequence={sequence} rhythm={rhythm}/>);
        const tablature = wrapper.find('Tablature').first();

        expect(tablature.props().rhythm).toEqual(rhythm);
    });

    it('should pass chunk the rhythms into sets of 16', () => {
        const sequence = makeSequence(17);

        const rhythm = [
            {duration: 0, division: 4},
            {duration: 1, division: 4},
            {duration: 2, division: 4},
            {duration: 3, division: 4},
            {duration: 4, division: 4},
            {duration: 5, division: 4},
            {duration: 6, division: 4},
            {duration: 7, division: 4},
            {duration: 8, division: 4},
            {duration: 9, division: 4},
            {duration: 10, division: 4},
            {duration: 11, division: 4},
            {duration: 12, division: 4},
            {duration: 13, division: 4},
            {duration: 14, division: 4},
            {duration: 15, division: 4},
            {duration: 16, division: 4},
        ];

        const wrapper = shallow(<Exercise sequence={sequence} rhythm={rhythm}/>);
        const tablature = wrapper.find('Tablature');

        console.log(tablature);

        expect(tablature.first().props().rhythm.length).toEqual(16);
        expect(tablature.at(1).props().rhythm.length).toEqual(1);
    });

    it('should render a fretboard for every shape', () => {
        const shapes = [
            {positions: [1, 2, 3]},
            {positions: [4, 5, 6]},
            {positions: [7, 8, 9]},
        ];

        const wrapper = shallow(<Exercise shapes={shapes}/>);
        const fretboards = wrapper.find('Fretboard');

        expect(fretboards.length).toEqual(3);
    });

    it('should pass the positions to each fretboard', () => {
        const shapes = [
            {positions: [1, 2, 3]},
            {positions: [4, 5, 6]},
            {positions: [7, 8, 9]},
        ];

        const wrapper = shallow(<Exercise shapes={shapes}/>);
        const fretboards = wrapper.find('Fretboard');

        expect(fretboards.at(0).props().positions).toEqual(shapes[0].positions);
        expect(fretboards.at(1).props().positions).toEqual(shapes[1].positions);
        expect(fretboards.at(2).props().positions).toEqual(shapes[2].positions);
    });
});