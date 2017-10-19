import React from 'react';
import {shallow} from 'enzyme';
import {TopNav} from './top-nav';
import {NEW_GAME, toggleInfoModal} from '../actions';

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  });
  
  it('Should dispatch toggleInfoModal when What is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    wrapper.find('.what').simulate('click', { preventDefault: () => {} });
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch.mock.calls[0][0]).toEqual(toggleInfoModal());      
  });

  it('Should dispatch newGame when New Game is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    wrapper.find('.new').simulate('click', { preventDefault: () => {} });
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch.mock.calls[0][0].type).toEqual(NEW_GAME);      
  });
});