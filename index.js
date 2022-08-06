function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function (num) {
        return num % 2 === 0
    });
}


/* Write an ES2015 Version */
function filterOutOdds2(...nums) {
    return nums.filter((num) => num % 2 === 0);
}


//Write a function called findMin that accepts a variable number of
//arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.
const findMin = (...args) => args.reduce((min, next) => min < next ? min : next);


// Write a function called mergeObjects that accepts two objects 
// and returns a new object which contains all the keys and values of the first object and second object.
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should
//  return a new array with the original array values and all of additional arguments doubled.
const doubleAndReturnArgs = (arr, ...args) => {
    return [...arr.map(val => val * 2), ...args.map(val => val * 2)];
}

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    const random = Math.floor(Math.random() * items.length);
    return items.filter((item, i) => i !== random);
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => { return [...array1, ...array2] };

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    return { ...obj, [key]: val }
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    const newOBJ = { ...obj };
    delete newOBJ[key];
    return newOBJ;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return { ...obj1, ...obj2 };
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    return { ...obj, [key]: val }
}