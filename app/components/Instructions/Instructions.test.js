import React from 'react';
import { Instructions } from './Instructions';
import { shallow } from 'enzyme';

describe('Instructions component tests', () => {
  it('should render the expected information', () => {
    const wrapper = shallow(<Instructions />);

    expect(wrapper.find('.instructions').length).toBe(1);
    expect(wrapper.find('.instructions-howto').text()).toEqual('How to play');
    expect(wrapper.find('.instructions-img').length).toBe(1);    expect(wrapper.find('.instruction-list').length).toBe(1);
    expect(wrapper.find('li').length).toBe(7);
  })
})
