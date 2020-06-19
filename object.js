'use strict';
const obj1 = {};
const obj2 = new Object();

const jingoo = {'name':'jingoo', age:49}
jingoo.hasJob = true;

console.log(jingoo.name);
console.log(jingoo['name']);
console.log(jingoo.age);
console.log(jingoo.hasJob);
delete jingoo.hasJob;
console.log(jingoo.hasJob);

const jingoo1 = {'name':'jingoo', age:49};
const sam = {'name':'sam', age:45};
const toni = {'name':'toni', age:15};
const thomas = makePerson('thomas', 12);
function makePerson(name, age){
    return {
        name,
        age,
    };
}
/*
console.log('name' in jingoo1);

console.clear();
// for(key in jingoo) {
//     console.log(key);
// }

const array = [1,2,4,5];
for (value in array){
    console.log(value);
}
*/
const jay = jingoo1;
console.log(jay);

const user4 = Object.assign({}, user);
console.log(user4);
Object.assign() //T,U

const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.name);