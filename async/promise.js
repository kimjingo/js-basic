'use strict';

// promise is a JS obj for async operation
// 1. state : pending -> fulfilled or rejected
// 2. producer vs comsumer

// 1. producer
// when new promise is created, the executor runs automatically
const promise = new Promise((resolve, reject)=>{
    // doing heavy work(network, read files)
    console.log('doing something...');
    setTimeout(()=>{
        resolve('jingoo');
        // reject(new Error('no network'));
    },2000);
});


// 2. consumer : then, catch, finally
promise.then((value)=>console.log(value))
.catch(error=>console.log(error))
.finally(()=>console.log('finally'));


// 3. promise chaining
const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(1), 1000);
});

fetchNumber.then(num=>num*2)
.then(num=>num*3)
.then(num=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(num-1),1000);
    });
})
.then(num => console.log(num));


// 4. error handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(()=>resolve('hen'),1000);
});
const getEgg = hen => 
    new Promise((resolve, reject) => {
        // setTimeout(()=>resolve(`${hen} => egg`),1000);
        setTimeout(()=>reject(new Error(`error! ${hen} => egg`)),1000);
});
const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(()=>resolve(`${egg}=>egg`),1000);
});

// getHen()
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));
// getHen().then(getEgg).then(cook).then(console.log);
getHen() //
.then(getEgg)
.catch(error=>{
    return 'bread';
})
.then(cook)
.then(console.log)
.catch(console.log);