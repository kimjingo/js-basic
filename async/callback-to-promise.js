class UserStorage{
    loginUser(id, pwd){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                if(
                    (id === 'jingoo' && pwd === '1234') ||
                    (id === 'coder' && pwd === 'academy')
                ) {
                    resolve(id)
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                if(user === 'jingoo') {
                    resolve({name:'jingoo', role: 'admin'});
                }else{
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}
const userStorage = new UserStorage();
const id = prompt('enter your id');
const pwd = prompt('enter passwod');
userStorage
.loginUser(id,pwd)
.then(user=>userStorage.getRoles(user))
.then(user=>{ alert( `Hello ${user.name}, you have a ${user.role} role` ); })
.catch(console.log);
