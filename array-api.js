//1. array to string
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.join(':'));
console.log(fruits.toString());

// string to array
const result = fruits.toString();
fruitsClone = result.split(',');
console.log(fruitsClone);

// reverse
{

    const array = [1,2,3,4,5];
    console.log(array.reverse());
    console.log(array);
}

// make new array without the first two elements
{
    const array = [1,2,3,4,5];
    // console.log(array.slice(0,2));
    console.log(array.slice(2));
    // console.log(array);
}

// array with objects

class Student {
    constructor(name,age,enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('a', 29, true, 45),
    new Student('b', 28, false, 80),
    new Student('c', 30, true, 90),
    new Student('d', 40, false, 66),
    new Student('e', 18, true, 88),
]

// find a student with the score 90
{
    students.forEach(function(st){
        if(st.score == 90 ) console.log(st.name);
    });
    console.log(students.find(function(student){
        return student.score === 90;
    }));
    console.log(students.find((student) => student.score === 90));
}

// filter
{
    let enrolledStudents = [];
    enrolledStudents = students.filter((student) => student.enrolled );
    // find((student) => student.enrolled === true));
    // console.log( students.find((student) => student.enrolled));
    console.log( enrolledStudents);
    // console.clear();
        
}

// make an array with students' scores
{

    let scores = [];
    scores = students.map((student) => student.score);
    console.log(scores);
}


// check if there is a student lower that 50
{
    let result = students.some((student) => student.score < 50);
    result = students.every((student) => student.score < 50);
    console.log(result);
}

// get average score
{
        const result = students.reduce((prev, curr)  => prev + curr.score //{
            // console.log('===========');
            // console.log(prev);
            // console.log(curr);
            // return prev + curr.score;
        // }
        , 0);
        console.log(result/students.length);
}

// string of all scores
{
    console.log(students
        .map((student) => student.score)
        .filter((score) => score >= 50)
        .join());
}

// string of sorted score
{
    console.log(students
        .map((student) => student.score)
        .sort((a,b) => b - a)
        // .sort((a,b) => a - b)
        .join());
}