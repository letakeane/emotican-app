import React from 'react';
import { Anger } from './Anger';
import { Fear } from './Fear';
import { Happiness } from './Happiness';
import { Sadness } from './Sadness';
import { Surprise } from './Surprise';
import { shallow } from 'enzyme';

describe('emotions components tests', () => {
  it('should render Anger', () => {
    const wrapper = shallow(<Anger />);

    expect(wrapper.find('.emotion-learning')).toBeTruthy();
    expect(wrapper.find('.emotion-about h2').text()).toEqual('What is anger?');
  })

  it('should render Fear', () => {
    const wrapper = shallow(<Fear />);

    expect(wrapper.find('.emotion-learning')).toBeTruthy();
    expect(wrapper.find('.emotion-about h2').text()).toEqual('What is fear?');
  })

  it('should render Happiness', () => {
    const wrapper = shallow(<Happiness />);

    expect(wrapper.find('.emotion-learning')).toBeTruthy();
    expect(wrapper.find('.emotion-about h2').text()).toEqual('What is happiness?');
  })

  it('should render Sadness', () => {
    const wrapper = shallow(<Sadness />);

    expect(wrapper.find('.emotion-learning')).toBeTruthy();
    expect(wrapper.find('.emotion-about h2').text()).toEqual('What is sadness?');
  })

  it('should render Surprise', () => {
    const wrapper = shallow(<Surprise />);

    expect(wrapper.find('.emotion-learning')).toBeTruthy();
    expect(wrapper.find('.emotion-about h2').text()).toEqual('What is surprise?');
  })

})
