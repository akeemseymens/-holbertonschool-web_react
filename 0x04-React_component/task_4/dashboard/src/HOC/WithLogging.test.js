

//The second test should make sure console.log was called on mount and on unmount with the name of the component when the wrapped element is the Login component.
// Component Login is mounted and Component Login is going to unmount should be sent to the console

import React from 'react';
import { shallow, render } from 'enzyme';
import WithLogging from './WithLogging'
import Login from '../Login/Login'

let wrapper = null;
let consoleMock = null;

beforeEach(() => {
  wrapper = null;
  consoleMock = jest.spyOn(console, 'log');
})

afterEach(() => {
  consoleMock.mockRestore();
})

describe('Tests for WithLogging HOC componenet', () => {
  it('should call console.log if wrappedComponent is pure html', () => {
    const TestHOC = WithLogging(() => <p/>);
    wrapper = shallow(<TestHOC />);
    expect(consoleMock).toHaveBeenCalledTimes(1);
    wrapper.unmount();
    expect(consoleMock).toHaveBeenCalledTimes(2);
  });
  it('should call console.log with componenet name on mount and unmount', () => {
    const Test2HOC = WithLogging(Login);
    wrapper = shallow(<Test2HOC />);
    expect(consoleMock).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(consoleMock).toHaveBeenCalledWith('Component Login is going to unmount');
    expect(consoleMock).toHaveBeenCalledTimes(2);
  });
});