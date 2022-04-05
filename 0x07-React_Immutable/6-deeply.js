/*
  * Task 6 - Nested merge
*/
import { Map } from 'immutable';

// Accepts two arguments, page1 and page2. Both are objects
// It should return a List containing the values of the two pages (or merge)
export default function mergeDeeplyElements(page1, page2) {
  return (
    Map(page1).mergeDeep(page2)
  );
}
