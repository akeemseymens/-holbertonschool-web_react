import { shallow } from 'enzyme';
import Notifications from './Notifications'
import React from 'react';
import NotificationItem from './NotificationItem';

let wrapper = null;

describe('Notification HTML with listNotifications={listNotifications}', () => {
  const listNotifications = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent',  value: 'New resume available'},
    {id: 3, type: 'urgent', html: {__html: '<span>TEST</span'}}
  ]
  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
   });
  it("checks if the first div is rendered properly without error", () => {
    expect(wrapper.exists('.Notifications')).toBeTruthy()
  });

  it("renders three list elements properly", () => {
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it("renders correct text for the first li tag", () => {
    expect(wrapper.find(NotificationItem).first().prop('value')).toBe('New course available');
  });

  it("renders correct text for p tag", () => {
    expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
  });
});

describe('Notification HTML with listNotifications={[]}', () => {
  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]}/>);
   });
  it("checks if the first div is rendered properly without error", () => {
    expect(wrapper.exists('.Notifications')).toBeTruthy()
  });

  it("renders only one NotificationItem", () => {
    expect(wrapper.find(NotificationItem).length).toBe(1);
  });

  it("renders 'No new notifications for now' properly", () => {
    expect(wrapper.find(NotificationItem).first().prop('value')).toBe('No new notifications for now');
  });

  it("Does not display 'Here is the list of notifications' ", () => {
    expect(wrapper.find('p').length).toBe(0);
  });
});

describe('Notification HTML with no listNotifications passed', () => {
  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={true} />);
   });
   it("Does not display 'Here is the list of notifications' ", () => {
    expect(wrapper.find(NotificationItem).first().prop('value')).toBe('No new notifications for now');
    expect(wrapper.find('p').length).toBe(0);
  });
});

describe('Notification HTML displayDrawer tests', () => {
  it("menu item is being displayed when displayDrawer is false", () => {
    wrapper = shallow(<Notifications displayDrawer={true}/>)
    expect(wrapper.find('.menuItem').length).toBe(1);
  });

  it("div.Notifications is not being displayed when displayDrawer is false", () => {
    wrapper = shallow(<Notifications displayDrawer={false}/>)
    expect(wrapper.find('.Notifications').length).toBe(0);
  });

  it("menu item is being displayed when displayDrawer is true", () => {
    wrapper = shallow(<Notifications displayDrawer={true}/>)
    expect(wrapper.find('.menuItem').length).toBe(1);
  });

  it("div.Notifications is being displayed when displayDrawer is true", () => {
    wrapper = shallow(<Notifications displayDrawer={true}/>)
    expect(wrapper.find('.Notifications').length).toBe(1);
  });
});
