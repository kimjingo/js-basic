'use strict';
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak(){
        console.log(`${this.name}: hello!`)
    }
}

const jingoo = new Person('jingoo', 49);
jingoo.speak();

class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value) {
        // if(value<0) throw Error('age can not be negative');
        this._age = value < 0? 0:value;
    }

}


const User1 = new User('Toni', 'Kim', -1);
console.log(User1.age);

class Experiment{
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.privateField);