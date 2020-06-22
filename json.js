'use strict';


// obj to json
let json = JSON.stringify(true);
console.log(json);

// JSON.parse(string);


const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key:${key}, value: ${value}`);
    return key === 'name'? 'jingoo': value;
});
console.log(json);


// json to obj
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump();
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate);

const newObj = JSON.parse(json, (key, value) =>{
    console.log(key, value);
    return key === 'birthDate'? new Date(value) : value;
} );

console.log(newObj.birthDate.getDate());

// useful sites for json
// json diff.com
// json beautifier
// json parser
// json validator
// json minifier