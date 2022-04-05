import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import NotificationItem from './NotificationItem.js';
import React from 'react';
import Notifications from './Notifications'

let wrapper = null;
StyleSheetTestUtils.suppressStyleInjection();


describe('NotificationItem component tests', () => {
  
  it("Checks if the NotificationItem is rendered properly without error", () => {
    wrapper = shallow(<NotificationItem type='default'/>);
    expect(wrapper.exists(<NotificationItem type='default'/>));
  });

  it("Checks if NotificationItem is rendered with a dummy 'type' and 'value'", () => {
    wrapper = shallow(<NotificationItem type='default' value='test'/>);
    expect(wrapper.prop('className')).toContain('Default');
    expect(wrapper.text()).toBe('test');
  });

  it("Checks if NotificationItem is rendered with a dummy custom html set'", () => {
    wrapper = shallow(<NotificationItem type='default' html={ {__html: '<u>test</u>' } }/>);
    expect(wrapper.prop('className')).toContain('Default');
    expect(wrapper.html()).toBe('<li class=\"liDefault_1tsdo2i\"><u>test</u></li>');
  });
});

describe('NotificationItem component tests for markAsRead', () => {
  it('should display the message from markAsRead with the elements corrisponding id', () => {
    const markAsReadSpy = jest.fn();
    const wrapper = shallow(<Notifications/>);
    wrapper.instance().markAsRead = markAsReadSpy;
    wrapper.instance().markAsRead(1)
    expect(wrapper.instance().markAsRead).toBeCalledWith(1);
    markAsReadSpy.mockRestore();
  });
});