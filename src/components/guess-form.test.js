import React from 'react';
import {shallow, mount} from 'enzyme';
import {GuessForm} from './guess-form.js';
import {makeGuess} from '../actions.js';

describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

  it('Should fire the onGuess dispatch when form is submitted', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<GuessForm dispatch={dispatch} />);
    const value = '25';
    wrapper.find('input[type="text"]').instance().value = value;
    wrapper.find('#guessButton').simulate('submit');
    expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
  });

  it('Should reset the input when the form is submitted', () => {
    const wrapper = mount(<GuessForm dispatch={() => {}}/>);
    const input = wrapper.find('input[type="text"]');
    input.instance().value = 10;
    wrapper.simulate('submit');
    console.log(input.instance());
    expect(input.instance().value).toEqual('');
  });
});