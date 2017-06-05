import React from 'react';
import { About } from './About';
import { shallow } from 'enzyme';

describe('About component tests', () => {
  it('should render the correct information', () => {
    const wrapper = shallow(<About />);

    expect(wrapper.find('.about')).toBeTruthy();
    expect(wrapper.find('.about h2').length).toBe(3);
  })
})
