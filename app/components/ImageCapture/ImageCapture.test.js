import React from 'react';
import ImageCapture from './ImageCapture';
import { shallow } from 'enzyme';

describe('ImageCapture component tests', () => {
  it('should render properly', () => {
    const wrapper = shallow(<ImageCapture />);

    expect(wrapper.find('.image-capture')).toBeTruthy();
    expect(wrapper.find('button').length).toBe(2);
    expect(wrapper.find('video')).toBeTruthy();
  })

  it('should begin with the correct state', () => {
    const wrapper = shallow(<ImageCapture />);
    const expectedState = {
      constraints: { audio: false, video: { width: 300, height: 350, facingMode: 'user' } }
    }

    expect(wrapper.state()).toEqual(expectedState);
  })

  it.skip('should begin image capture on button click', () => {
    const wrapper = shallow(<ImageCapture />);
    const startButton = wrapper.find('.start-capture');
    startButton.simulate('click');

    expect(wrapper.beginImageCapture).toHaveBeenCalledTimes(1);
  })


  it.skip('should capture the user image on button click', () => {
    const wrapper = shallow(<ImageCapture />);
    const startButton = wrapper.find('.start-capture');
    const takePicture = wrapper.find('.take-picture');
    startButton.simulate('click');
    takePicture.simulate('click');

    expect(wrapper.captureImage).toHaveBeenCalledTimes(1);
  })
})
