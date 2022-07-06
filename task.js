"use strict";

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
// if argument_value is a string,
the answer search all elements where name === argument_value

// if argument_value is an array,
the answer search all elements where prices array is the same as argument_value array

if argument_value is null
the answer search all elements where the prices array includes a null value

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
