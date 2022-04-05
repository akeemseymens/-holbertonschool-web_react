/*
* Task 8 - Lazy Seq
  * A function that filters any student with a score < 70 and print to the console
  * the first name and the last name with the first letter capitalized:
*/
import { Seq } from 'immutable';

export default function printBestStudents(obj) {
  const filteredObj = Seq(obj).filter((x) => x.score > 70).toJS();
  Object.keys(filteredObj).map((x) => {
    const cur = filteredObj[x];
    cur.firstName = cur.firstName[0].toUpperCase() + cur.firstName.slice(1);
    cur.lastName = cur.lastName[0].toUpperCase() + cur.lastName.slice(1);
    return (cur);
  });
  console.log(filteredObj);
}

// const grades = {
//   1: {
//     score: 99,
//     firstName: 'guillaume',
//     lastName: 'salva',
//   }
// };
// printBestStudents(grades);
