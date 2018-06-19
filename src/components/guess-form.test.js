import React from 'react';
import {shallow, mount} from 'enzyme';
import {GuessForm} from './guess-form';
import {makeGuess, restartGame} from '../actions';


describe('<GuessForm />', () => { 
	
	//it('Renders without crashing', () => {
	//	shallow(<GuessForm />);
	//});

	 it('should submit a guess', () => {
	    const dispatch = jest.fn();

	    const wrapper = mount(<GuessForm dispatch={dispatch} /> );
	   	const value = '10';
	    wrapper.find('input[type="number"]').instance().value = value;

	    wrapper.simulate('submit');
	    expect(dispatch).toHaveBeenCalledTimes(1);
	    expect(dispatch).toHaveBeenCalledWith(makeGuess(value));

	    
	  });
});
