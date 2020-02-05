import { inputDate } from "./main.js";
export const date = new Date(inputDate);
// export let n;

export const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] ="Monday";
weekday[2] ="Tuesday";
weekday[3] ="Wednesday";
weekday[4] ="Thursday";
weekday[5] ="Friday";
weekday[6] ="Saturday";

let checkDay = weekday[date.getDay()];
console.log(checkDay);


// export class Date {
//   constructor(date, month, year) {
//     this.date = date,
//     this.month = month,
//     this.year = year;
//   }

// var leapYear = function(year) {
//   if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// };