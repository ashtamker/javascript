function checkBigThen10(num) {
    return new Promise(function (resolve, reject){
        if(num < 11)
        reject(`${num} smaller then 10`);
        setTimeout(function () {
            resolve(`${num} bigger then 10`);
        },1000)
        
    });
}

const num1 = checkBigThen10(19);
const num2 = checkBigThen10(7);

num1.then(function (num) {
    console.log(num);
}).catch(err => {
    console.log(err);
})
