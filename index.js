// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log('Welcome to Programiz!');
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numRotations = 2;
var rotatedArray=[];

function leftRotation(array, numRotations) {
  if (numRotations >= 1) {
    array = [...array.slice(1, array.length), array[0]];
    numRotations = numRotations - 1;
    leftRotation(array, numRotations);
    rotatedArray.push(...array)
  }
  return rotatedArray;
}

console.log('test', leftRotation(array, numRotations))
