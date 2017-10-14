import React from 'react'
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Position} from "../fretboard/position";

Enzyme.configure({adapter: new Adapter()});

describe('Position component', () => {
    it('Should set the finger number', () => {
        const wrapper = shallow(<Position finger={1}/>);
        const positionText = wrapper.find('.position-text').first();

        expect(positionText.text()).toBe("1");
    });

    it('should set the style to circle', () => {
        const wrapper = shallow(<Position finger={1}/>);
        const circle = wrapper.find('.circle');

        expect(circle.length).toBe(1);
    });

    it('should set the position of the component to absolute', () => {
        const wrapper = shallow(<Position finger={1}/>);
        const circle = wrapper.find('.circle').first();

        expect(circle.props().style.position).toEqual('absolute');
    });

    it('should calculate the position of fret one', () => {
        const wrapper = shallow(<Position finger={1} fret={1}/>);
        const circle = wrapper.find('.circle').first();

        expect(circle.props().style.top).toEqual('1.125em');
    });

    it('should calculate the position of fret two', () => {
        const wrapper = shallow(<Position fret={2}/>);
        const circle = wrapper.find('.circle').first();

        expect(circle.props().style.top).toEqual('4.125em');
    });

    it('should calculate the position of fret three', () => {
        const wrapper = shallow(<Position fret={3}/>);
        const circle = wrapper.find('.circle').first();

        expect(circle.props().style.top).toEqual('7.125em');
    });

    it('should calculate the position of string 1', () => {
        const wrapper = shallow(<Position guitar_string={1}/>);
        const circle = wrapper.find('.circle').first();

        expect(circle.props().style.right).toEqual('0.125em');
    });

    it('should calculate the position of string 2', () => {
        const wrapper = shallow(<Position guitar_string={2}/>);
        const circle = wrapper.find('.circle').first();

        expect(circle.props().style.right).toEqual('2.125em');
    });

    it('should calculate the position of string 3', () => {
        const wrapper = shallow(<Position guitar_string={3}/>);
        const circle = wrapper.find('.circle').first();

        expect(circle.props().style.right).toEqual('4.125em');
    });
});