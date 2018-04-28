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

        expect(item.hasClass('tab-beat__0')).toBe(true);
    });

    it('should set the position 2\'s x offset', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 4, "order": 0},
            {"fret": 4, "guitar_string": 3, "order": 1},
            {"fret": 3, "guitar_string": 2, "order": 2}
        ];

        const wrapper = shallow(<Tablature sequence={sequence}/>);
        const item = wrapper.find('.tab-position').at(1);

        expect(item.hasClass('tab-beat__1')).toBe(true);
    });

    it('should set the position 3\'s x offset', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 4, "order": 0},
            {"fret": 4, "guitar_string": 3, "order": 1},
            {"fret": 3, "guitar_string": 2, "order": 2}
        ];

        const wrapper = shallow(<Tablature sequence={sequence}/>);
        const item = wrapper.find('.tab-position').at(2);

        expect(item.hasClass('tab-beat__2')).toBe(true);
    });

    it('should set y offset for string 1', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 1, "order": 0},
        ];

        const wrapper = shallow(<Tablature sequence={sequence}/>);
        const item = wrapper.find('.tab-position').first();

        expect(item.hasClass('tab-string__1')).toBe(true);
    });

    it('should set y offset for string 2', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 2, "order": 0},
        ];

        const wrapper = shallow(<Tablature sequence={sequence}/>);
        const item = wrapper.find('.tab-position').first();

        expect(item.hasClass('tab-string__2')).toBe(true);
    });

    it('should set y offset for string 3', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 3, "order": 0},
        ];

        const wrapper = shallow(<Tablature sequence={sequence}/>);
        const item = wrapper.find('.tab-position').first();

        expect(item.hasClass('tab-string__3')).toBe(true);
    });

    it('should set y offset for string 4', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 4, "order": 0},
        ];

        const wrapper = shallow(<Tablature sequence={sequence}/>);
        const item = wrapper.find('.tab-position').first();

        expect(item.hasClass('tab-string__4')).toBe(true);
    });

    it('should set y offset for string 5', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 5, "order": 0},
        ];

        const wrapper = shallow(<Tablature sequence={sequence}/>);
        const item = wrapper.find('.tab-position').first();

        expect(item.hasClass('tab-string__5')).toBe(true);
    });

    it('should set y offset for string 6', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 6, "order": 0},
        ];

        const wrapper = shallow(<Tablature sequence={sequence}/>);
        const item = wrapper.find('.tab-position').first();

        expect(item.hasClass('tab-string__6')).toBe(true);
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

        expect(tabLines.at(0).hasClass('tab-string__1')).toBe(true);
        expect(tabLines.at(1).hasClass('tab-string__2')).toBe(true);
        expect(tabLines.at(2).hasClass('tab-string__3')).toBe(true);
        expect(tabLines.at(3).hasClass('tab-string__4')).toBe(true);
        expect(tabLines.at(4).hasClass('tab-string__5')).toBe(true);
        expect(tabLines.at(5).hasClass('tab-string__6')).toBe(true);
    });

    it('should set the width of the tab lines based on the max order', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 6, "order": 1},
        ];

        const wrapper = shallow(<Tablature sequence={sequence}/>);
        const tabLine = wrapper.find('.tab-line').first();

        expect(tabLine.hasClass('tab-line__0')).toBe(true);
    });

    it('should set the width of the tab lines based on difference of min and max beats', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 6, "order": 3},
            {"fret": 0, "guitar_string": 6, "order": 7},
        ];

        const wrapper = shallow(<Tablature sequence={sequence}/>);
        const tabLine = wrapper.find('.tab-line').first();

        expect(tabLine.hasClass('tab-line__4')).toBe(true);
    });

    it('should display a beat for every rhythm item', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 6, "order": 3}
        ];

        const rhythm = [
            {'duration': 1, 'division': 8},
            {'duration': 1, 'division': 8},
            {'duration': 1, 'division': 8},
            {'duration': 1, 'division': 8},
            {'duration': 1, 'division': 8},
            {'duration': 1, 'division': 8},
            {'duration': 1, 'division': 8},
            {'duration': 1, 'division': 8},
        ];

        const wrapper = shallow(<Tablature rhythm={rhythm} sequence={sequence}/>);
        const beats = wrapper.find('.beat');

        expect(beats.length).toBe(8);
    });

    it('should set the duration of eighth notes', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 6, "order": 3}
        ];

        const rhythm = [
            {'duration': 1, 'division': 8},
            {'duration': 1, 'division': 8},
            {'duration': 1, 'division': 8},
            {'duration': 1, 'division': 8},
            {'duration': 1, 'division': 8},
            {'duration': 1, 'division': 8},
            {'duration': 1, 'division': 8},
            {'duration': 1, 'division': 8},
        ];

        const wrapper = shallow(<Tablature rhythm={rhythm} sequence={sequence}/>);
        const beats = wrapper.find('.beat-duration-8');

        expect(beats.length).toBe(8);
    });

    it('should set the duration of quarter notes', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 6, "order": 3}
        ];

        const rhythm = [
            {'duration': 1, 'division': 4},
            {'duration': 1, 'division': 4},
            {'duration': 1, 'division': 4},
            {'duration': 1, 'division': 4},
        ];

        const wrapper = shallow(<Tablature rhythm={rhythm} sequence={sequence}/>);
        const beats = wrapper.find('.beat-duration-4');

        expect(beats.length).toBe(4);
    });

    it('should set the duration of sixteenth notes', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 6, "order": 3}
        ];

        const rhythm = [
            {'duration': 1, 'division': 16},
            {'duration': 1, 'division': 16},
            {'duration': 1, 'division': 16},
            {'duration': 1, 'division': 16},
            {'duration': 1, 'division': 16},
            {'duration': 1, 'division': 16},
            {'duration': 1, 'division': 16},
            {'duration': 1, 'division': 16},
            {'duration': 1, 'division': 16},
            {'duration': 1, 'division': 16},
            {'duration': 1, 'division': 16},
            {'duration': 1, 'division': 16},
            {'duration': 1, 'division': 16},
            {'duration': 1, 'division': 16},
            {'duration': 1, 'division': 16},
            {'duration': 1, 'division': 16},
        ];

        const wrapper = shallow(<Tablature rhythm={rhythm} sequence={sequence}/>);
        const beats = wrapper.find('.beat-duration-16');

        expect(beats.length).toBe(16);
    });

    it('should set the duration of half notes', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 6, "order": 3}
        ];

        const rhythm = [
            {'duration': 1, 'division': 2},
            {'duration': 1, 'division': 2},
        ];

        const wrapper = shallow(<Tablature rhythm={rhythm} sequence={sequence}/>);
        const beats = wrapper.find('.beat-duration-2');

        expect(beats.length).toBe(2);
    });

    it('should set the duration of whole notes', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 6, "order": 3}
        ];

        const rhythm = [
            {'duration': 1, 'division': 1},
            {'duration': 1, 'division': 1},
            {'duration': 1, 'division': 1},
        ];

        const wrapper = shallow(<Tablature rhythm={rhythm} sequence={sequence}/>);
        const beats = wrapper.find('.beat-duration-1');

        expect(beats.length).toBe(3);
    });

    it('should allow a mixture of notes', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 6, "order": 3}
        ];

        const rhythm = [
            {'duration': 1, 'division': 16},
            {'duration': 1, 'division': 16},
            {'duration': 1, 'division': 8},
            {'duration': 1, 'division': 16},
            {'duration': 1, 'division': 16},
            {'duration': 1, 'division': 8},
            {'duration': 1, 'division': 16},
            {'duration': 1, 'division': 16},
            {'duration': 1, 'division': 8},
            {'duration': 1, 'division': 16},
            {'duration': 1, 'division': 16},
            {'duration': 1, 'division': 8},
        ];

        const wrapper = shallow(<Tablature rhythm={rhythm} sequence={sequence}/>);
        const notes_16th = wrapper.find('.beat-duration-16');
        const notes_8th = wrapper.find('.beat-duration-8');

        expect(notes_16th.length).toBe(8);
        expect(notes_8th.length).toBe(4);
    });

    it('should connect eighth notes with a beam', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 6, "order": 3}
        ];

        const rhythm = [
            {'duration': 1, 'division': 8},
            {'duration': 1, 'division': 8},
            {'duration': 1, 'division': 8},
            {'duration': 1, 'division': 8},
            {'duration': 1, 'division': 8},
            {'duration': 1, 'division': 8},
            {'duration': 1, 'division': 8},
            {'duration': 1, 'division': 8},
        ];

        const wrapper = shallow(<Tablature rhythm={rhythm} sequence={sequence}/>);
        const beam = wrapper.find('.beam');

        expect(beam.length).toBe(4);
    });

    it('should not connect quarter notes with a beam', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 6, "order": 3}
        ];

        const rhythm = [
            {'duration': 1, 'division': 4},
            {'duration': 1, 'division': 4},
            {'duration': 1, 'division': 4},
            {'duration': 1, 'division': 4},
        ];

        const wrapper = shallow(<Tablature rhythm={rhythm} sequence={sequence}/>);
        const beam = wrapper.find('.beam');

        expect(beam.length).toBe(0);
    });

    it('should not connect half notes with a beam', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 6, "order": 3}
        ];

        const rhythm = [
            {'duration': 1, 'division': 2},
            {'duration': 1, 'division': 2},
            {'duration': 1, 'division': 2},
            {'duration': 1, 'division': 2},
        ];

        const wrapper = shallow(<Tablature rhythm={rhythm} sequence={sequence}/>);
        const beam = wrapper.find('.beam');

        expect(beam.length).toBe(0);
    });

    it('should not connect whole notes with a beam', () => {
        const sequence = [
            {"fret": 0, "guitar_string": 6, "order": 3}
        ];

        const rhythm = [
            {'duration': 1, 'division': 1},
            {'duration': 1, 'division': 1},
            {'duration': 1, 'division': 1},
            {'duration': 1, 'division': 1},
        ];

        const wrapper = shallow(<Tablature rhythm={rhythm} sequence={sequence}/>);
        const beam = wrapper.find('.beam');

        expect(beam.length).toBe(0);
    });
});