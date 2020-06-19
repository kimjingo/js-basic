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

class Article{
    static publisher = 'Jingoo Kim';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(this.publisher);
    }
}

const a1 = new Article(1);
const a2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// console.log(a1.publisher);
// a1.printPublisher();


class Shape{
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw(){
        super.draw();
        console.log('tri');
    }

    getArea(){
        return (this.width * this.height) /2;
    }
}

const rec = new Rectangle(20,20,'blue');
rec.draw();
console.log(rec.getArea())
const tri = new Triangle(20,20,'red');
tri.draw();
console.log(tri.getArea())

// class checking : instanceof

console.log(rec instanceof Rectangle);
console.log(tri instanceof Rectangle);
console.log(tri instanceof Shape);
console.log(rec instanceof Object);