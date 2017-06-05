import React from 'react';
import { LearnNav } from './LearnNav';
import { shallow } from 'enzyme';

describe('LearnNav component tests', () => {
  it('should render the expected information', () => {
    const wrapper = shallow(<LearnNav />);

    expect(wrapper.find('nav')).toBeTruthy();
    expect(wrapper.find('NavLink').length).toBe(6);
  })
})
