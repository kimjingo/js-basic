'use strict';
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1+2 = ${1+2}`);

let count = 0;
count++;
count--;
++count;
--count;

const value1 = false;
const value2 = 4<2;

console.log(`or: ${value1 || value2 || check()}`);

function check(){
    for(let i = 0; i<10; i++){
        console.log('beer');
    }
    return true;
}

const sFive = '5';
const nFive = 5;

console.log(sFive == nFive);
console.log(sFive != nFive);
console.log(sFive === nFive);
console.log(sFive !== nFive);


const jingoo1 = {name:'jingoo'};
const jingoo2 = {name:'jingoo'};
const jingoo3 = jingoo2;
console.log(jingoo1 == jingoo2);
console.log(jingoo1 === jingoo2);
console.log(jingoo1 === jingoo3);
console.log(jingoo2 === jingoo3);


console.log("========================");
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

//Ternary operator

let i=3;
while(i<100){
    console.log(`while: ${i}`);
    i++;
}


do{
    console.log(`while: ${i}`);
    i--;
} while ( i > 0)


for(let i = 0; i< 10; i++){
    if(i%2==1) continue;
    console.log(i);
}

for(let i = 0; i< 10; i++){
    if(i==8) break;
    console.log(i);
}