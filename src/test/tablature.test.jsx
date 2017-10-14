import React from 'react'
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Tablature} from "../tablature/tablature";

Enzyme.configure({adapter: new Adapter()});

describe('Tablature component', () => {
    it('should contain one item for each position in sequence', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 4, "order": 0},
            {"fret": 4, "guitar_string": 3, "order": 1},
            {"fret": 0, "guitar_string": 2, "order": 2}
        ];

        const wrapper = shallow(<Tablature sequence={sequence}/>);
        const items = wrapper.find('.tab-position');

        expect(items.length).toEqual(3);
    });

    it('it should set the fret of each position', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 4, "order": 0},
            {"fret": 4, "guitar_string": 3, "order": 1},
            {"fret": 3, "guitar_string": 2, "order": 2}
        ];

        const wrapper = shallow(<Tablature sequence={sequence}/>);
        const items = wrapper.find('.tab-position');

        expect(items.at(0).text()).toEqual('0');
        expect(items.at(1).text()).toEqual('4');
        expect(items.at(2).text()).toEqual('3');
    });

    it('should set the position 1\'s x offset', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 4, "order": 0},
            {"fret": 4, "guitar_string": 3, "order": 1},
            {"fret": 3, "guitar_string": 2, "order": 2}
        ];

        const wrapper = shallow(<Tablature sequence={sequence}/>);
        const item = wrapper.find('.tab-position').first();

        expect(item.props().style.left).toBe('0em');
    });

    it('should set the position 2\'s x offset', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 4, "order": 0},
            {"fret": 4, "guitar_string": 3, "order": 1},
            {"fret": 3, "guitar_string": 2, "order": 2}
        ];

        const wrapper = shallow(<Tablature sequence={sequence}/>);
        const item = wrapper.find('.tab-position').at(1);

        expect(item.props().style.left).toBe('1em');
    });

    it('should set the position 2\'s x offset', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 4, "order": 0},
            {"fret": 4, "guitar_string": 3, "order": 1},
            {"fret": 3, "guitar_string": 2, "order": 2}
        ];

        const wrapper = shallow(<Tablature sequence={sequence}/>);
        const item = wrapper.find('.tab-position').at(2);

        expect(item.props().style.left).toBe('2em');
    });

    it('should set y offset for string 1', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 1, "order": 0},
        ];

        const wrapper = shallow(<Tablature sequence={sequence}/>);
        const item = wrapper.find('.tab-position').first();

        expect(item.props().style.top).toBe('0em');
    });

    it('should set y offset for string 2', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 2, "order": 0},
        ];

        const wrapper = shallow(<Tablature sequence={sequence}/>);
        const item = wrapper.find('.tab-position').first();

        expect(item.props().style.top).toBe('1em');
    });

    it('should set y offset for string 3', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 3, "order": 0},
        ];

        const wrapper = shallow(<Tablature sequence={sequence}/>);
        const item = wrapper.find('.tab-position').first();

        expect(item.props().style.top).toBe('2em');
    });

    it('should set y offset for string 4', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 4, "order": 0},
        ];

        const wrapper = shallow(<Tablature sequence={sequence}/>);
        const item = wrapper.find('.tab-position').first();

        expect(item.props().style.top).toBe('3em');
    });

    it('should set y offset for string 5', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 5, "order": 0},
        ];

        const wrapper = shallow(<Tablature sequence={sequence}/>);
        const item = wrapper.find('.tab-position').first();

        expect(item.props().style.top).toBe('4em');
    });

    it('should set y offset for string 6', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 6, "order": 0},
        ];

        const wrapper = shallow(<Tablature sequence={sequence}/>);
        const item = wrapper.find('.tab-position').first();

        expect(item.props().style.top).toBe('5em');
    });

    it('should render six tab lines', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 6, "order": 0},
        ];

        const wrapper = shallow(<Tablature sequence={sequence}/>);
        const tabLines = wrapper.find('.tab-line');

        expect(tabLines.length).toBe(6);
    });

    it('should set the top offset of the tab lines', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 6, "order": 0},
        ];

        const wrapper = shallow(<Tablature sequence={sequence}/>);
        const tabLines = wrapper.find('.tab-line');

        expect(tabLines.at(0).props().style.top).toBe('0em');
        expect(tabLines.at(1).props().style.top).toBe('1em');
        expect(tabLines.at(2).props().style.top).toBe('2em');
        expect(tabLines.at(3).props().style.top).toBe('3em');
        expect(tabLines.at(4).props().style.top).toBe('4em');
        expect(tabLines.at(5).props().style.top).toBe('5em');
    });

    it('should set the width of the tab lines based on the max order', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 6, "order": 7},
        ];

        const wrapper = shallow(<Tablature sequence={sequence}/>);
        const tabLine = wrapper.find('.tab-line').first();

        expect(tabLine.props().style.width).toBe('8em');
    });
});