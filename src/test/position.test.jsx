import React from 'react'
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Position} from "../fretboard/position";

Enzyme.configure({ adapter: new Adapter() });

describe('Position component', () => {
    it('Should set the finger number', () => {
        const wrapper = shallow(<Position finger={1}/>);
        const positionText = wrapper.find('.position-text').first();

        expect(positionText.text()).toBe("1");
    })
})