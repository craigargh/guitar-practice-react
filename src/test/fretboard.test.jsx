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

    it('should set the height of fretboard using the highest and lowest positions', () =>{
        const positions = [
            {finger: 1, fret: 2, guitar_string: 1},
            {finger: 3, fret: 4, guitar_string: 3},
        ];

        const wrapper = shallow(<Fretboard positions={positions}/>);
        const fretboard = wrapper.find('.fretboard').first();

        expect(fretboard.props().style.height).toBe('15em');
    });

    it('should set the height of fretboard when lowest fret is 1', () =>{
        const positions = [
            {finger: 1, fret: 1, guitar_string: 1},
            {finger: 3, fret: 3, guitar_string: 3},
        ];

        const wrapper = shallow(<Fretboard positions={positions}/>);
        const fretboard = wrapper.find('.fretboard').first();

        expect(fretboard.props().style.height).toBe('12em');
    })

    it('should set the height of fretboard when lowest fret is 0', () =>{
        const positions = [
            {finger: 1, fret: 0, guitar_string: 1},
            {finger: 3, fret: 3, guitar_string: 3},
        ];

        const wrapper = shallow(<Fretboard positions={positions}/>);
        const fretboard = wrapper.find('.fretboard').first();

        expect(fretboard.props().style.height).toBe('12em');
    });

    it('it should set the position frets', () => {
        const positions = [
            {finger: 1, fret: 1, guitar_string: 1},
            {finger: 2, fret: 2, guitar_string: 2},
        ];

        const wrapper = shallow(<Fretboard positions={positions}/>);
        const positionComponents = wrapper.find('Position');

        expect(positionComponents.first().props().fret).toEqual(1);
        expect(positionComponents.last().props().fret).toEqual(2);
    });

    it('it should offset the position frets by the minimum fret', () => {
        const positions = [
            {finger: 1, fret: 4, guitar_string: 1},
            {finger: 2, fret: 5, guitar_string: 2},
        ];

        const wrapper = shallow(<Fretboard positions={positions}/>);
        const positionComponents = wrapper.find('Position');

        expect(positionComponents.first().props().fret).toEqual(2);
        expect(positionComponents.last().props().fret).toEqual(3);
    });

    it('it should not offset the position frets if min is 0', () => {
        const positions = [
            {finger: 1, fret: 0, guitar_string: 1},
            {finger: 2, fret: 5, guitar_string: 2},
        ];

        const wrapper = shallow(<Fretboard positions={positions}/>);
        const positionComponents = wrapper.find('Position');

        expect(positionComponents.first().props().fret).toEqual(0);
        expect(positionComponents.last().props().fret).toEqual(5);
    });

    it('should add frets to the fretboard', () => {
        const positions = [
            {finger: 1, fret: 1, guitar_string: 1},
            {finger: 2, fret: 2, guitar_string: 2},
            {finger: 3, fret: 3, guitar_string: 3},
        ];

        const wrapper = shallow(<Fretboard positions={positions}/>);
        const frets = wrapper.find('.fret');

        expect(frets.length).toEqual(3);
    });

    it('should add frets to the fretboard with lowest fret 0', () => {
        const positions = [
            {finger: 1, fret: 0, guitar_string: 1},
            {finger: 2, fret: 2, guitar_string: 2},
            {finger: 3, fret: 3, guitar_string: 3},
        ];

        const wrapper = shallow(<Fretboard positions={positions}/>);
        const frets = wrapper.find('.fret');

        expect(frets.length).toEqual(3);
    });

    it('should add frets to the fretboard with lowest fret 2', () => {
        const positions = [
            {finger: 2, fret: 2, guitar_string: 2},
            {finger: 3, fret: 3, guitar_string: 3},
        ];

        const wrapper = shallow(<Fretboard positions={positions}/>);
        const frets = wrapper.find('.fret');

        expect(frets.length).toEqual(3);
    });
});