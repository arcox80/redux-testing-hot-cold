import React from 'react';
import {shallow} from 'enzyme';
import {Header} from './header.js';
import TopNav from './top-nav';
import InfoModal from './info-modal';

describe('<Header />', () => {
  it('Renders without crashing', () => {
    shallow(<Header />);
  });
  
  it('Renders TopNav initially', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.containsMatchingElement(<TopNav />)).toEqual(true);
  });
  
  it('Should not render the info modal', () => {
    const wrapper = shallow(<Header showInfoModal={false} />);
    expect(wrapper.find(InfoModal).exists()).toEqual(false);
  });
  
  it('Should render the info modal', () => {
    const wrapper = shallow(<Header showInfoModal={true} />);
    expect(wrapper.find(InfoModal).exists()).toEqual(true);
  });
});