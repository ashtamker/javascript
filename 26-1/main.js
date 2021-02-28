// console.log(this);

// print a window because not inside a function 

//**************************************** */
//q-2
// const myObj = {
//     name: "Timmy", 
//     greet: () => {   
//     console.log(`Hello ${this.name}`);
//     },
// };
// myObj.greet()

// print only hello
// point nothing

//********************************* */
// q-3   
// const myFuncDec = function() {
//  console.log(this); 
// };

// myFuncDec();
// point to the function if we call it

//q-4 

// const myFuncArrow = () => {
//     console.log(this); 
// };
//     myFuncArrow();

// point to the heiger function, or to the window if no function

//************************ */
// q-5

document.querySelector(".element").addEventListener(() => {
    console.log(this); 
});

// 