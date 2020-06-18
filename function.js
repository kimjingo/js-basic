function printHello(){
    console.log("Hi")
}
printHello();

function log(msg){
    console.log(msg);
}
log("Hi");
log(1234);

function changeName(obj){
    obj.name = 'full stack web developer';
}
const jj = {name:'jingoo'};
changeName(jj);
console.log(jj);

/*/
function showMessage(msg, from){
    if(from === undefined){
        from = 'unknown';
    }
    console.log(`${msg} by ${from}`);
}
/*/
function showMessage(msg, from='unknown'){ console.log(`${msg} by ${from}`)};
//*/
showMessage('Hi!');

function printAll(...args){
    for(let i = 0; i< args.length; i++){
        console.log(args[i]);
    }
    for(const arg of args){
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}
printAll('hi', 'jingoo', 'kim', 'toni');

function upgradeUser(user){
    if(user.point <= 10) {return;}
    //long code
}

const print = function () { console.log('print') };
print();
const printAgain = print;
printAgain();

function randomQuiz(answer, printYes, PrintNo){
    if(answer === 'love you'){
        printYes();
    }else{
        PrintNo();
    }
}
const printYes = function(){console.log('yes!');};
const printNo = function(){console.log('No!');};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

/*/
const simplePrint = function(){
    console.log('simplePrint!');

};
const simplePrint = () => console.log('simplePrint');
/*/
console.log("========================");
const simplePrint = () => consold.log('simplePrint');
//*/
// const add= function(a,b) { return a + b}
const add= (a,b) => a + b ;


const simpleMultiply = (a, b) => {
    return a*b;
};
console.log(simpleMultiply(1, 2));

(function hello() {console.log('IIFE stands for Immediately Invoiked Function Expression')})();