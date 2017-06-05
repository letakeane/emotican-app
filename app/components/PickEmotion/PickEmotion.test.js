import React from 'react';
import PickEmotion from './PickEmotion';
import { shallow } from 'enzyme';

const mockFn = jest.fn();

describe('PickEmotion component tests', () => {
  it('should render 6 buttons', () => {
    const wrapper = shallow(<PickEmotion />);
    expect(wrapper.find('button').length).toBe(6);
  })

  it('should begin with state', () => {
    const wrapper = shallow(<PickEmotion />);
    const expectedState = {
      pickedEmotion: ''
    }

    expect(wrapper.state()).toEqual(expectedState);
  })

  it.skip('should fire the mockFn when the button is clicked', () => {
    const wrapper = shallow(<PickEmotion />);
    const happyButton = wrapper.find('.happy');
    happyButton.onClick = mockFn;
    happyButton.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  })
})
