import listOfStudents from './9-hoisting.js';

test('listOfStudents has the correct legth', () => {
  expect(listOfStudents).toHaveLength(5);
});
