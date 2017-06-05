import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar';
import { shallow, mount } from 'enzyme';

describe('NavBar component tests', () => {

  it('renders NavLinks when shallowly mounted', () => {
    const wrapper = shallow(<NavBar />);

    expect(wrapper.find('NavLink').length).toBe(3);
  })
})
