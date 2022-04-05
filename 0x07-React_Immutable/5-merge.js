/*
  * Task 5 - Merge & concat
  * Two functions practicing concating/merging immutable variables
*/
import { Map, List } from 'immutable';

// Accepts two arguments page1 and page2. Both are arrays
export function concatElements(page1, page2) {
  return (
    List(page1).concat(page2)
  );
}

// Accepts two arguments page1 and page2. Both are objects
export function mergeElements(page1, page2) {
  return (
    Map(page1).merge(page2)
  );
}

// const array = [1, 2, 3, 4]
// const array2 = [4, 6, 7]
// console.log(concatElements(array, array2))

// const obj = {'key1': 'value1', 'key2': 'value2'}
// const obj2 = {'key1': 'value3', 'key4': 'value4'}
// console.log(mergeElements(obj, obj2).get('key1'));
