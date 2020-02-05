import { Array } from './../src/date-calculator.js'


describe('Array', () => {
  let weekday = new Array(7);
  test('should display what day of the week ', () => {
    
    expect(weekday[0]).toEqual("Sunday");
  });
});