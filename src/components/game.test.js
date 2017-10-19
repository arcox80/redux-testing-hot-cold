import React from 'react';
import {shallow} from 'enzyme';

import Game from './game.js'
import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game />);
  });
  
  it('Renders Header initially', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  });
  
  it('Renders GuessSection initially', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.containsMatchingElement(<GuessSection />)).toEqual(true);
  });
  
  it('Renders GuessCount initially', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.containsMatchingElement(<GuessCount />)).toEqual(true);
  });
  
  it('Renders GuessList initially', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.containsMatchingElement(<GuessList />)).toEqual(true);
  });
});