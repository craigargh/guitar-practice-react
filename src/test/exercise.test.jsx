import React from 'react'
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Exercise} from "../exercise/exercise";

Enzyme.configure({adapter: new Adapter()});

describe('Exercise component', () => {
    it('should render a tablature component', () => {
        const wrapper = shallow(<Exercise/>);
        const tablature = wrapper.find('Tablature');

        expect(tablature.length).toBe(1);
    });

    it('should pass the sequence to the tablature component', () => {
        const sequence = [
            {fret: 1, guitar_string: 1, order: 1},
            {fret: 2, guitar_string: 2, order: 2},
            {fret: 3, guitar_string: 3, order: 3},
        ];

        const wrapper = shallow(<Exercise sequence={sequence}/>);
        const tablature = wrapper.find('Tablature').first();

        expect(tablature.props().sequence).toBe(sequence);
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