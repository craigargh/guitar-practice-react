import React from 'react';

export class Exercises extends React.Component {
    render () {
        const exerciseGroups = this.makeExerciseGroups();

        return <div>
            {exerciseGroups}
        </div>
    }

    makeExerciseGroups() {
        const {exercises} = this.props;

        return exercises.map((group) => {
            const {name, description, urls} = group;

            const links = urls.map((url) => {
                const {key, path} = url;

                return <li className='exercise_item'>
                    <a href={path} className='exercise_link'>
                        {key}
                    </a>
                </li>
            });

            return <div>
                <div className='exercise-group_title'>{name}</div>
                <div className='exercise-group_description'>{description}</div>

                <ul className='exercises_links'>
                    {links}
                </ul>
            </div>
        });
    }
}