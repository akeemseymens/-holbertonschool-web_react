import { notificationReducer } from './notificationReducer';

const initialState = {
  notifications: [],
  filter: 'DEFAULT',
};
// Data called from API
const testData = [
  {
    id: 1,
    type: "default",
    value: "New course available"
  },
  {
    id: 2,
    type: "urgent",
    value: "New resume available"
  },
  {
    id: 3,
    type: "urgent",
    value: "New data available"
  }
]

const expectedData = {
  filter: "DEFAULT",
  notifications: [
    {
      id: 1,
      isRead: false,
      type: "default",
      value: "New course available"
    },
    {
      id: 2,
      isRead: false,
      type: "urgent",
      value: "New resume available"
    },
    {
      id: 3,
      isRead: false,
      type: "urgent",
      value: "New data available"
    }
  ]
}

const expectedChange = {
  filter: "DEFAULT",
  notifications: [
    {
      id: 1,
      isRead: false,
      type: "default",
      value: "New course available"
    },
    {
      id: 2,
      isRead: true,
      type: "urgent",
      value: "New resume available"
    },
    {
      id: 3,
      isRead: false,
      type: "urgent",
      value: "New data available"
    }
  ]
}

describe('Tests for courseReducer', () => {
  it('Should (when no action is passed) return initialState', () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });
  it('Should return expectedData when { type: FETCH_NOTIFICATIONS_SUCCESS, data: [...] } is passed', () => {
    expect(notificationReducer(undefined, { type: 'FETCH_NOTIFICATIONS_SUCCESS', data: testData})).toEqual(expectedData);
  })
  it('Should return expectedChange when { type: MARK_AS_READ, index: (int) } is passed', () => {
    const state = expectedData;
    expect(notificationReducer(state, { type: 'MARK_AS_READ', index: 2 })).toEqual(expectedChange);
  })
  it('Should return expectedData with filter: "URGENT" { type: SET_TYPE_FILTER, filter: "URGENT" } is passed', () => {
    const state = expectedData;
    expect(notificationReducer(state, { type: 'SET_TYPE_FILTER', filter: "URGENT"})).toEqual({...expectedData, filter: "URGENT" });
  })
});
