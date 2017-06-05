import React from 'react';
import { EmotionResults } from './EmotionResults';
import { shallow } from 'enzyme';
import { stubResponse } from '../../stubData/stubResponse';

describe('EmotionResults component', () => {
  it('should start by rendering the no-results if props are empty', () => {
    const wrapper = shallow(<EmotionResults results={[]} url='' />)

    expect(wrapper.find('.no-results').length).toBe(1);
  })

  it('should render the results if props are provided', () => {
    const wrapper = shallow(<EmotionResults results={stubResponse} url='' />)

    expect(wrapper.find('.emotion-score').length).toBe(1);
    expect(wrapper.find('.emotion-score').text()).toBe('neutral');
  })
})
