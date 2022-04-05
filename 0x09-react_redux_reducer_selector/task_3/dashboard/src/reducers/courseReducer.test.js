import { courseReducer } from './courseReducer';

const initialState = []
// Data called from API
const testData = [
  {
    id: 1,
    name: "ES6",
    credit: 60
  },
  {
    id: 2,
    name: "Webpack",
    credit: 20
  },
  {
    id: 3,
    name: "React",
    credit: 40
  }
]

const expectedData = [
  {
    id: 1,
    name: "ES6",
    isSelected: false, //Added isSelected
    credit: 60
  },
  {
    id: 2,
    name: "Webpack",
    isSelected: false, //Added isSelected
    credit: 20
  },
  {
    id: 3,
    name: "React",
    isSelected: false, //Added isSelected
    credit: 40
  }
]

const expectedChange = [
  {
    id: 1,
    name: "ES6",
    isSelected: false,
    credit: 60
  },
  {
    id: 2,
    name: "Webpack",
    isSelected: true, // changed to true
    credit: 20
  },
  {
    id: 3,
    name: "React",
    isSelected: false,
    credit: 40
  }
]
describe('Tests for courseReducer', () => {
  it('Should (when no action is passed) return initialState', () => {
    expect(courseReducer(undefined, {})).toEqual(initialState);
  });
  it('Should return expectedData when { type: FETCH_COURSE_SUCCESS, data: [...] } is passed', () => {
    expect(courseReducer(undefined, { type: 'FETCH_COURSE_SUCCESS', data: testData})).toEqual(expectedData);
  })
  it('Should return expectedChange when { type: SELECT_COURSE, index: (int) } is passed', () => {
    const state = expectedData;
    expect(courseReducer(state, { type: 'SELECT_COURSE', index: 2 })).toEqual(expectedChange);
  })
  it('Should return expectedData again when { type: UNSELECT_COURSE, index: (int) } is passed', () => {
    const state = expectedChange;
    expect(courseReducer(state, { type: 'UNSELECT_COURSE', index: 2 })).toEqual(expectedData);
  })
});
