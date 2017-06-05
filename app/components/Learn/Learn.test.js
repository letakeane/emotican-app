import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Learn } from './Learn';
import { shallow, mount } from 'enzyme';

describe('Learn component shallow tests', () => {
  it('should render a bunch of Routes', () => {
    const wrapper = shallow(<Learn />);

    expect(wrapper.find('Route').length).toBe(8);
  })
})

describe('Learn component mount tests', () => {
  it.skip('should render the LearnNav component and display the Emotions component', () => {
    const wrapper = mount(<MemoryRouter initialEntries={[  '/learn' ]} ><Learn /></MemoryRouter>);

    expect(wrapper.find('nav').length).toBe(1);
    expect(wrapper.find('.learn-emotions').length).toBe(1);
  })

  it.skip('should render the various emotions when the URL changes', () => {
    //I don't know how to test this :(
  })
})
