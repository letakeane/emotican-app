import React from 'react';
import { Emotions } from './Emotions';
import { shallow } from 'enzyme';

describe('Emotions component test', () => {
  it('should render the correct information', () => {
    const wrapper = shallow(<Emotions />);

    expect(wrapper.find('.learn-emotions')).toBeTruthy();
    expect(wrapper.find('p').text()).toEqual('Use the links above to learn more about the different emotions in this game!');
  })
})
