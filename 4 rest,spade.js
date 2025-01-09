// function sum   (){
//     let sum = 0
//     for (let i = 0; i < arguments.length; i++){
//         sum += arguments[i]
//     }
//     return sum
// }
// console.log(sum(1,2,3,4,5));


// function sum (...rest){
//     return rest.reduce((a,b)=>a+b)
    
// }
// console.log(sum(1,2,3,4,5,6));


//...spade creat a new arrey
let a=[1,2,3,4,5,6];
console.log(...a);
console.log(a);

let obj = {
    a:19,
    b:10,
    c:20,
}

let obj2 = {
    ...obj
}
console.log(obj2);
