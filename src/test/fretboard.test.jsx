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

    it('should create 6 guitar strings', () => {
        const positions = [
            {finger: 2, fret: 2, guitar_string: 2},
        ];

        const wrapper = shallow(<Fretboard positions={positions}/>);
        const guitarStrings = wrapper.find('.guitar-string');

        expect(guitarStrings.length).toEqual(6);
    });

    it('should set the position of string 1', () => {
        const positions = [
            {finger: 2, fret: 2, guitar_string: 2},
        ];

        const wrapper = shallow(<Fretboard positions={positions}/>);
        const guitarString = wrapper.find('.guitar-string').first();

        expect(guitarString.props().style.right).toEqual('0em');
    });

    it('should set the position of string 2', () => {
        const positions = [
            {finger: 2, fret: 2, guitar_string: 2},
        ];

        const wrapper = shallow(<Fretboard positions={positions}/>);
        const guitarString = wrapper.find('.guitar-string').get(1);

        expect(guitarString.props.style.right).toEqual('2em');
    });

    it('should set the position of string 3', () => {
        const positions = [
            {finger: 2, fret: 2, guitar_string: 2},
        ];

        const wrapper = shallow(<Fretboard positions={positions}/>);
        const guitarString = wrapper.find('.guitar-string').get(2);

        expect(guitarString.props.style.right).toEqual('4em');
    });

    it('should set the position of string 4', () => {
        const positions = [
            {finger: 2, fret: 2, guitar_string: 2},
        ];

        const wrapper = shallow(<Fretboard positions={positions}/>);
        const guitarString = wrapper.find('.guitar-string').get(3);

        expect(guitarString.props.style.right).toEqual('6em');
    });

    it('should set the position of string 5', () => {
        const positions = [
            {finger: 2, fret: 2, guitar_string: 2},
        ];

        const wrapper = shallow(<Fretboard positions={positions}/>);
        const guitarString = wrapper.find('.guitar-string').get(4);

        expect(guitarString.props.style.right).toEqual('8em');
    });

    it('should set the position of string 6', () => {
        const positions = [
            {finger: 2, fret: 2, guitar_string: 2},
        ];

        const wrapper = shallow(<Fretboard positions={positions}/>);
        const guitarString = wrapper.find('.guitar-string').get(5);

        expect(guitarString.props.style.right).toEqual('10em');
    });

    it('should set strings 3 strings to wound', () => {
        const positions = [
            {finger: 2, fret: 2, guitar_string: 2},
        ];

        const wrapper = shallow(<Fretboard positions={positions}/>);
        const woundStrings = wrapper.find('.wound');

        expect(woundStrings.length).toEqual(3);
    });

    it('should set strings 4, 5 and 6 to wound', () => {
        const positions = [
            {finger: 2, fret: 2, guitar_string: 2},
        ];

        const wrapper = shallow(<Fretboard positions={positions}/>);
        const guitarString4 = wrapper.find('.guitar-string').at(3);
        const guitarString5 = wrapper.find('.guitar-string').at(4);
        const guitarString6 = wrapper.find('.guitar-string').at(5);

        expect(guitarString4.hasClass('wound')).toEqual(true);
        expect(guitarString5.hasClass('wound')).toEqual(true);
        expect(guitarString6.hasClass('wound')).toEqual(true);
    });

    it('should display a nut when lowest fret is 0', () => {
        const positions = [
            {finger: 2, fret: 0, guitar_string: 2},
        ];

        const wrapper = shallow(<Fretboard positions={positions}/>);
        const nut = wrapper.find('.nut');

        expect(nut.length).toBe(1);
    });

    it('should display a nut when lowest fret is 1', () => {
        const positions = [
            {finger: 2, fret: 1, guitar_string: 2},
        ];

        const wrapper = shallow(<Fretboard positions={positions}/>);
        const nut = wrapper.find('.nut');

        expect(nut.length).toBe(1);
    });

    it('should display a nut when lowest fret is 2', () => {
        const positions = [
            {finger: 2, fret: 2, guitar_string: 2},
        ];

        const wrapper = shallow(<Fretboard positions={positions}/>);
        const nut = wrapper.find('.nut');

        expect(nut.length).toBe(1);
    });

    it('should not display a nut when lowest fret is greater than 2', () => {
        const positions = [
            {finger: 2, fret: 3, guitar_string: 2},
        ];

        const wrapper = shallow(<Fretboard positions={positions}/>);
        const nut = wrapper.find('.nut');

        expect(nut.length).toBe(0);
    });
});