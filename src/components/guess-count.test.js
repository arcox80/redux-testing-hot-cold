import React from 'react';
import {shallow} from 'enzyme';
import {GuessCount} from './guess-count.js';

describe('<GuessCount />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessCount />);
  });

  it('Renders the guess count correctly', () => {
    const guessCount = 3;
    const wrapper = shallow(<GuessCount count={guessCount} />);
    expect(wrapper.text()).toEqual(`Guess #${guessCount}!`);
  });
});