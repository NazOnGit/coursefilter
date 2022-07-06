// Remember, we're gonna use strict mode in all scripts now!
"use strict";
const temperatures1 = [3, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const temperatures2 = [3, 5, 1];

const calcTemperatureAltitude = function (t1, t2) {
  const temp = t1.concat(t2);
  console.log(temp);
  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTemperatureAltitude(temperatures1, temperatures2);
console.log(amplitude);

//// 61. DEBUGGING WITH THE CONSOLE AND BREAK-POINTS
//in our smart thermometer we need to do some measurements in a unit called (kelvin) which is the absolute temperature
// Understanding the problem
// -How to calculate kelvin? ans; add 273 to the temp in degrees celcius

const measureKelvin = function () {
  const measurement = {
    type: "temperature",
    unit: "celcius",
    // c- Fix bug
    // value: Number(prompt("Degrees in celcius")),
    value: 10,
  };
  // -How to calculate kelvin? ans; add 273 to the temp in degrees celcius
  //b- Find bug
  const kelvin = measurement.value + 273;
  return kelvin;
};
//a- Identify bug
console.log(measureKelvin());

/*
/////////////////////////////////////////////// Coding Challange #1

Given an array of forcasted maximum temperatures, the thermometer displays a string with these temperatures.

Examples:[17, 21, 23] will print '... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ...'

Create a function "printForecast" which takes in an array "arr" and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and Break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0]
*/

// Understand the problem
// 1- What is forcast? ans-predict or estimate (a future event or trend).

// 2- forcasted maximum temperatures? Ans- TEST DATA 1/TEST DATA 2

// Break it up into sub-problems
// 1- Merge the arrays to display forecasted temps together
// 2- Create a for loop for ele in the arrays
// 3- create loop for days counter for arrays
// 4- return - ... 17°C in 1 days, ... 17°C in 2 days

/*
//////ITERATION: THE FOR LOOP
// console.log('Lifting weights repetition 1 🏋🏽');
// console.log('Lifting weights repetition 2 🏋🏽');
// console.log('Lifting weights repetition 3 🏋🏽');
// console.log('Lifting weights repetition 4 🏋🏽');
// console.log('Lifting weights repetition 5 🏋🏽');
// console.log('Lifting weights repetition 6 🏋🏽');
// console.log('Lifting weights repetition 7 🏋🏽');
// console.log('Lifting weights repetition 8 🏋🏽');
// console.log('Lifting weights repetition 9 🏋🏽');
// console.log('Lifting weights repetition 10 🏋🏽');

for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋🏽`);
}
*/
/*
// const array1 = [17, 21, 23];
// const array2 = [12, 5, -5, 0];
// const mergeArray = array1.concat(array2);
//[17, 21, 23, 12, 5, -5, 0]
// ... 17°C in 1 days, ... 17°C in 2 days
const array1 = [17, 21, 23];
const array2 = [12, 5, -5, 0];
const mergeArray = array1.concat(array2);

console.log(typeof mergeArray);

const forecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    //current index of array + 1
    let day = i + 1;
    console.log(day);
    console.log(`... ${arr[i]}°C in ${day} days 🌤`);
  }
};
forecast(mergeArray);
*/

/*
// Understand the problem
-What user searches? Ans: 1-Numbers = price 2-name of course

-How many parameters should function have?
Ans: 2 (number and 'string')

-What to return? Ans: filtered list of course with names with price

-console.log([Eng -"Courses in England", prices: [0, 100])

// Break it up into sub-problems
-How to filter objects by names and price?
-How to retrieve properties in objects?
*/
// var newArray = homes.filter(function (el) {
//   return (
//     el.price <= 1000 &&
//     el.sqft >= 500 &&
//     el.num_of_beds >= 2 &&
//     el.num_of_baths >= 2.5
//   );
// });

// const courses = [
//   { english: "Courses in England", prices: [0, 100] }, //1st title
//   { german: "Courses in Germany", prices: [500, null] }, //2nd title
//   { italian: "Courses in Italy", prices: [100, 200] }, //3rd title
//   { russian: "Courses in Russia", prices: [null, 400] }, //4th
//   { chinese: "Courses in China", prices: [50, 250] }, //5th
//   { usa: "Courses in USA", prices: [200, null] }, //6th
//   { kazakh: "Courses in Kazakhstan", prices: [56, 324] }, //7th
//   { french: "Courses in France", prices: [null, null] }, //8th
// ];

const courses = [
  { name: "Courses in England", prices: [0, 100] }, //1st object
  { name: "Courses in Germany", prices: [500, null] }, //2nd object
  { name: "Courses in Italy", prices: [100, 200] }, //3rd object
  { name: "Courses in Russia", prices: [null, 400] }, //4th object
  { name: "Courses in China", prices: [50, 250] }, //5th object
  { name: "Courses in USA", prices: [200, null] }, //6th object
  { name: "Courses in Kazakhstan", prices: [56, 324] }, //7th object
  { name: "Courses in France", prices: [null, null] }, //8th object
];

/*
const filter = courses.filter((obj) => {
  return obj.name === "Courses in England";
});
console.log(filter);

const my_filter = (filter_Key) => {
  if (typeof filter_Key === "string")
    return courses.filter((obj) => obj.name === filter_Key);

  if (Array.isArray(filter_Key))
    return courses.filter(
      (obj) => JSON.stringify(obj.prices) === JSON.stringify(filter_Key)
    );

  return [];
};

console.log(JSON.stringify(my_filter([50, 250])));
*/

/*
//Filtering out all small values
function isBigEnough(value) {
  return value >= 10;
}
let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered);
*/

const filtering = function (filterKey) {
  if (typeof filterKey === "string")
    return courses.filter((obj) => obj.name === filterKey);
  if (Array.isArray(filterKey))
    return courses.filter(
      (obj) => JSON.stringify(obj.prices) === JSON.stringify(filterKey)
    );
  if (filterKey === null)
    return courses.filter((obj) => obj.prices.includes(filterKey));
};
console.log(filtering("Courses in USA"));
console.log(filtering([100, 200]));
console.log(filtering([200, null]));
