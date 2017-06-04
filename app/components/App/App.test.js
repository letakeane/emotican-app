import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App component tests', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  })

  it('renders Link and Route shallowly', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('Link').length).toBe(1);
    expect(wrapper.find('Route').length).toBe(4);
  })

  it('renders the components when mounted', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('NavLink').length).toBe(3);
    expect(wrapper.find('.play').length).toBe(1);
    expect(wrapper.find('PickEmotion')).toBeTruthy();
  })
})
