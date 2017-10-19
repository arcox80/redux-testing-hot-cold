import React from 'react';
import {shallow} from 'enzyme';
import {GuessList} from './guess-list.js';

describe('<GuessList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[]} />);
  });

  it('Renders a list of guesses', () => {
    const myGuesses = [3, 4, 5];
    const wrapper = shallow(<GuessList guesses={myGuesses} />);
    const listItems = wrapper.find('li');
    expect(listItems.length).toEqual(myGuesses.length);
    myGuesses.forEach((guess, index) => {
      expect(listItems.at(index).text()).toEqual(guess.toString());
    });
  });
});