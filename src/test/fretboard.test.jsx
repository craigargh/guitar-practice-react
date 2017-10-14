import React from 'react'
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Fretboard} from "../fretboard/fretboard";

Enzyme.configure({adapter: new Adapter()});

describe('Fretboard component', () => {
    it('should create a component for every position', () => {
        const positions = [
            {finger: 1, fret: 1, guitar_string: 1},
            {finger: 2, fret: 2, guitar_string: 2},
            {finger: 3, fret: 3, guitar_string: 3},
        ];

        const wrapper = shallow(<Fretboard positions={positions}/>);
        const positionComponents = wrapper.find('Position');

        expect(positionComponents.length).toEqual(3);
    });
});