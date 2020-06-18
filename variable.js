'use strict';


let lastname = 'Kim';
{
    let name = 'jingoo';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);
console.log(lastname);

const daysInWeek = 7;
const maxNumber =5;

const count = 17;
const size = 187.5;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);


const infinity = 1/0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//false : 0, null, undefined, NaN, ''
//true : any other value

const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`)
console.log(`value: ${test}, type: ${typeof test}`)


let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);
let x;// = undefined;
console.log(`value: ${x}, type: ${typeof x}`);


const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));