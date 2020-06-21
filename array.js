'use strict';

const arr1 = new Array();
const arr2 = [1,2];
const fruits = [
    'apple',
    'banana',
    'grape',
    'watermelon',
]
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}


fruits.forEach(function(value, index, array){
    console.log(value,index, array);
} );
// setTimeout( function(){ console.clear() } , 2000 ); // in 2 seconds
fruits.forEach(function(value, index){ // <= anonymous function
    console.log(value,index);
} );
fruits.forEach((value, index) => {
    console.log(value,index);
} );
fruits.forEach((value) => {console.log(value);} );
fruits.forEach((value) => {console.log(value)} );
fruits.forEach((value) => console.log(value) );

// addition, deletion, copy
// push, pop, 
fruits.push( 'strawberry', );
fruits.pop();
fruits.pop();
console.clear();
console.log(fruits);

//unshift, shift => slow
fruits.unshift('peach');
console.log(fruits);
fruits.shift();
console.log(fruits);

// splice : remove an item by index
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1,1, 'banana', 'lemon');

//combine
const fruits2 = ['cinamon'];
const newFruits = ['kiwi', 'nectarine'];
console.log(fruits.concat(fruits2));

// search, find index
console.log(fruits.indexOf('apple'));
console.log(fruits.includes('apple'));


// last IndexOf

fruits.push('apple');
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));