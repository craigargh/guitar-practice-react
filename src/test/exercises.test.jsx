import React from 'react'
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Exercises} from "../exercises/exercises";

Enzyme.configure({adapter: new Adapter()});

describe('Exercises Component', () => {
    const exercises = [
        {
            "description": "Pick some arpeggios",
            "group_id": "arpeggio-picking",
            "name": "Arpeggio Picking",
            "urls": [
                {"key": 1, "path": "/exercise/arpeggio-picking/1"},
                {"key": 2, "path": "/exercise/arpeggio-picking/2"}
            ]
        },
        {
            "description": "Change between chords",
            "group_id": "chord-changes",
            "name": "Chord Change",
            "urls": [
                {"key": 1, "path": "/exercise/chord-changes/1"},
                {"key": 2, "path": "/exercise/chord-changes/2"}]
        }
    ];


    it('should create a title for every exercise group', () => {
        const wrapper = shallow(<Exercises exercises={exercises}/>);

        const exerciseTitles = wrapper.find('.exercise-group_title');

        expect(exerciseTitles.length).toEqual(2);
        expect(exerciseTitles.at(0).text()).toBe('Arpeggio Picking');
        expect(exerciseTitles.at(1).text()).toBe('Chord Change');
    });

    it('should create a description for every exercise group', () => {
        const wrapper = shallow(<Exercises exercises={exercises}/>);

        const exerciseDescriptions = wrapper.find('.exercise-group_description');

        expect(exerciseDescriptions.length).toEqual(2);
        expect(exerciseDescriptions.at(0).text()).toBe('Pick some arpeggios');
        expect(exerciseDescriptions.at(1).text()).toBe('Change between chords');
    });

    it('should create a list of exercises for every exercise group', () => {
        const wrapper = shallow(<Exercises exercises={exercises}/>);

        const exerciseList = wrapper.find('.exercises_links');

        expect(exerciseList.length).toBe(2);
    });

    it('should create a list item for every url', () => {
        const wrapper = shallow(<Exercises exercises={exercises}/>);

        const exerciseItems = wrapper.find('.exercise_item');

        expect(exerciseItems.length).toBe(4);
    });

    it('should set the key for every url', () => {
        const wrapper = shallow(<Exercises exercises={exercises}/>);

        const exercisesItems = wrapper.find('.exercise_item');

        expect(exercisesItems.at(0).text()).toBe('Level 1');
        expect(exercisesItems.at(1).text()).toBe('Level 2');
        expect(exercisesItems.at(2).text()).toBe('Level 1');
        expect(exercisesItems.at(3).text()).toBe('Level 2');
    });

    it('should set the key for every url', () => {
        const wrapper = shallow(<Exercises exercises={exercises}/>);

        const exercisesLinks = wrapper.find('.exercise_link');

        expect(exercisesLinks.at(0).props().href).toBe('/exercise/arpeggio-picking/1');
        expect(exercisesLinks.at(1).props().href).toBe('/exercise/arpeggio-picking/2');
        expect(exercisesLinks.at(2).props().href).toBe('/exercise/chord-changes/1');
        expect(exercisesLinks.at(3).props().href).toBe('/exercise/chord-changes/2');
    });
});