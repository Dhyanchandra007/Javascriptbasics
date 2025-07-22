//string methods   
// String methods are functions that can be called on string objects in JavaScript.
// They allow you to manipulate and interact with strings in various ways. 


let str = "Hello, World!";

console.log(str.length); // 13
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.toLowerCase()); // "hello, world!"
console.log(str.indexOf("World")); // 7
console.log(str.slice(0, 5)); // "Hello"
console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!"
console.log(str.split(", ")); // ["Hello", "World!"]
console.log(str.trim()); // "Hello, World!" (removes whitespace from both ends)
console.log(str.charAt(0)); // "H"
console.log(str.charCodeAt(0)); // 72 (ASCII code for 'H')
console.log(str.includes("Hello")); // true
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("!")); // true
console.log(str.repeat(2)); // "Hello, World!Hello, World!"

console.log(str.concat(" How are you?")); // "Hello, World! How are you?"
console.log(str.match(/o/g)); // ["o", "o"] (finds all
// occurrences of 'o')
console.log(str.search("World")); // 7 (finds the index of "World")
console.log(str.lastIndexOf("o")); // 8 (finds the last occurrence of
// 'o')
console.log(str.localeCompare("Hello, World!")); // 0 (compares two strings
// lexicographically)
console.log(str.padStart(20, "*")); // "*****Hello, World!" (pads
// the start with '*')
console.log(str.padEnd(20, "*")); // "Hello, World!*****" (
// pads the end with '*')
console.log(str.split(" ")); // ["Hello,", "World!"]
console.log(str.toString()); // "Hello, World!" (converts to string)
console.log(str.valueOf()); // "Hello, World!" (returns the primitive value)
console.log(str.normalize()); // "Hello, World!" (normalizes the string)
console.log(str.codePointAt(0)); // 72 (code point for 'H')
console.log(str.fromCodePoint(72)); // "H" (creates a string from a
// code point)
console.log(str.endsWith("!")); // true (checks if the string ends with '!')
console.log(str.startsWith("Hello")); // true (checks if the string starts with 'Hello
console.log(str.includes("World")); // true (checks if the string includes 'World')