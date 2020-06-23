'use strict';

// JavaScript is synchronous
// execute code block by order after hoisting
// hoisting : var, function declaration

console.log('1');
console.log('2');
setTimeout(() => console.log('jingoo'), 1000);
console.log('3');
console.log('4');
console.log('5');

// sync callback

function printImmediately(print){
    print();
}
function printDelay(print, timeout){
    setTimeout(print, timeout);
}

printImmediately(() => console.log('hello'));
printDelay(() => console.log('hi'), 2000);


// bad exampel

class UserStorage{
    loginUser(id, pwd, onSuccess, onError){
        setTimeout(() => {
            if(
                (id === 'jingoo' && pwd === '1234') ||
                (id === 'coder' && pwd === 'academy')
            ) {
                onSuccess(id)

            } else {
                onError(new Error('not found'));
            }

        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user === 'jingoo') {
                onSuccess({name:'jingoo', role: 'admin'});
            }else{
                onError(new Error('no access'));
            }
        }, 1000);

    }
}
const userStorage = new UserStorage();
const id = prompt('enter your id');
const pwd = prompt('enter passwod');

userStorage.loginUser(
    id, 
    pwd, 
    user=>{
        userStorage.getRoles(
            user,
            userWithRole => {
                console.log(user);
                alert( `Hello ${userWithRole.name}, you have a ${userWithRole.role} role` );
            },
            error=> console.log(error)
        )
    },
    error=>console.log(error)
);