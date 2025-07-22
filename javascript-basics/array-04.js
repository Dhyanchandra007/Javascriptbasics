 //array methods

const numbers = [1, 2, 3, 4, 5];
// forEach
numbers.forEach((number, index) => {
  console.log(`Index: ${index}, Value: ${number}`);
});

// map
const doubled = numbers.map(number => number * 2);
console.log('Doubled:', doubled);

// filter
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log('Even Numbers:', evenNumbers);

// reduce
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log('Sum:', sum);

// find
const firstEven = numbers.find(number => number % 2 === 0);
console.log('First Even Number:', firstEven);

// some
const hasEven = numbers.some(number => number % 2 === 0);
console.log('Has Even Number:', hasEven);

// every
const allEven = numbers.every(number => number % 2 === 0);
console.log('All Numbers Even:', allEven);

// sort
const sorted = [...numbers].sort((a, b) => a - b);
console.log('Sorted:', sorted);

// reverse
const reversed = [...numbers].reverse();
console.log('Reversed:', reversed);

// includes
const includesThree = numbers.includes(3);
console.log('Includes 3:', includesThree);

// indexOf
const indexOfThree = numbers.indexOf(3);
console.log('Index of 3:', indexOfThree);

// join
const joined = numbers.join(', ');
console.log('Joined:', joined);

// slice
const sliced = numbers.slice(1, 4);
console.log('Sliced:', sliced);

// splice
const spliced = [...numbers];
spliced.splice(1, 2, 10, 20);
console.log('Spliced:', spliced);

// concat
const moreNumbers = [6, 7, 8];
const concatenated = numbers.concat(moreNumbers);
console.log('Concatenated:', concatenated);

// flat
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattened = nestedArray.flat(2);
console.log('Flattened:', flattened);

// flatMap
const flatMapped = nestedArray.flatMap(x => Array.isArray(x) ? x : [x]);
console.log('Flat Mapped:', flatMapped);

