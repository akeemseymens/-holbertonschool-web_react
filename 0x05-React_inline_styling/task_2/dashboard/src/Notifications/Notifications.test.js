/**
 * @jest-environment jsdom
 */
 import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Notifications from './Notifications'
import NotificationItem from './NotificationItem';

let wrapper = null;
const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent',  value: 'New resume available'},
  {id: 3, type: 'urgent', html: {__html: '<span>TEST</span'}}
]

describe('Notification HTML with listNotifications={listNotifications}', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
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
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
});

describe('Notification HTML with listNotifications={[]}', () => {
  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]}/>);
    StyleSheetTestUtils.suppressStyleInjection();
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
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
});

describe('Notification HTML with no listNotifications passed', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<Notifications displayDrawer={true} />);
   });
   it("Does not display 'Here is the list of notifications' ", () => {
    expect(wrapper.find(NotificationItem).first().prop('value')).toBe('No new notifications for now');
    expect(wrapper.find('p').length).toBe(0);
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
});

describe('Notification HTML displayDrawer tests', () => {
  beforeEach(() => {
      StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
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

describe('Notification Component markAsRead function tests', () => {
  beforeEach(() => {
      StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('Tests if markAsRead can be called from an instance of Notifications with the correct message', () => {
    const logSpy = jest.spyOn(console, 'log');
    const notificationInstance = new Notifications;

    notificationInstance.markAsRead(3);
    expect(logSpy).toHaveBeenCalledWith('Notification $3 has been marked as read');
  });

  describe('Tests Notification Component selective rendering feature', () => {
  
    let componentUpdateSpy = null;
  
    beforeEach(() => {
      StyleSheetTestUtils.suppressStyleInjection();
      componentUpdateSpy = jest.spyOn(
        Notifications.prototype,
        "shouldComponentUpdate"
      );
      wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>)
    })

    afterEach(() => {
      jest.restoreAllMocks();
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    })

    it('doesnt rerender on same listNotifications', () => {
      let testShorterList = [
        {id: 1, type: 'default', value: 'New course available'},
        {id: 2, type: 'urgent',  value: 'New resume available'},
      ]
      wrapper.setProps({ listNotifications: testShorterList });
      expect(componentUpdateSpy).toHaveLastReturnedWith(false);
    });

    it('rerenders with longer listNotifications prop', () => {
      let testLongerList = [
        {id: 1, type: 'default', value: 'New course available'},
        {id: 2, type: 'urgent',  value: 'New resume available'},
        {id: 3, type: 'default', value: 'New course available'},
        {id: 4, type: 'default', value: 'New course available'},
      ]
      wrapper.setProps({ listNotifications: testLongerList });
      expect(componentUpdateSpy).toHaveLastReturnedWith(true);
    });
  })
});
