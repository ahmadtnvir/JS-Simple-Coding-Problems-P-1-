function leapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
    ? true
    : false;
  // if (year % 100 !== 0 && year % 4 === 0) {
  //     return true;
  // }
  // return false;
}
const isLeapYear = leapYear(2000);
console.log(isLeapYear);
