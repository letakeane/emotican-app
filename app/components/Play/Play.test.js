import React from 'react';
import Play from './Play';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import { stubResponse } from '../../stubData/stubResponse';

describe('Play component tests: shallow', () => {
  it('should render an article with a class of play', () => {
    const wrapper = shallow(<Play />);

    expect(wrapper.find('.play')).toBeTruthy();
  })
})

describe('Play component tests: mount', () => {
  const resolveAfter2Seconds = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  beforeEach(() => {
    fetchMock.post('https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize', {
      status: 200,
      body: stubResponse
    }).catch('error')
  })

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore()
  })

  it('begins with expected state', () => {
    const wrapper = mount(<Play />);
    const expectedState = {
      emotions: [],
      canvasURL: ''
    };

    expect(wrapper.state()).toEqual(expectedState);
  })

  it('renders PickEmotion', () => {
    const wrapper = mount(<Play />);

    expect(wrapper.find('.emotion').length).toBe(6);
  })

  it('renders ImageCapture', () => {
    const wrapper = mount(<Play />);

    expect(wrapper.find('.image-capture')).toBeTruthy();
    expect(wrapper.find('.image-capture button').length).toBe(2);
  })

  it('renders EmotionResults', () => {
    const wrapper = mount(<Play />);

    expect(wrapper.find('.no-results').length).toBe(1);
  })

  it.skip('renders real results after the fetch', () => {
    const wrapper = mount(<Play />);
    wrapper.find('.start-capture').simulate('click');
    wrapper.find('.take-picture').simulate('click');

    expect(wrapper.find('.emotion-score').text).toBe('neutral');
  })
})
