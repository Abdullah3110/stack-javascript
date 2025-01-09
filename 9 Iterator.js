let arr = [1,2,3,4,5]

// function creatIterator(collection){
//     let i = 0 ;
//     return{
//         next(){
//             return {
//                 done: i >= collection.length ,
//                 value : collection[i++] 
//             }
//         }
//     }
// }

// let itrate = creatIterator(arr)
// console.log(itrate.next());
// console.log(itrate.next());
// console.log(itrate.next());
// console.log(itrate.next());
// console.log(itrate.next());
// console.log(itrate.next());

//  console.log('str'[Symbol.iterator]);
//  console.log(arr[Symbol.iterator]);

let int = arr[Symbol.iterator]()
console.log(int.next());
console.log(int.next());
console.log(int.next());
console.log(int.next());
console.log(int.next());
console.log(int.next());

let str ='Sizu'
let int2 = str[Symbol.iterator]()
console.log(int2.next());
console.log(int2.next());
console.log(int2.next());
console.log(int2.next());
console.log(int2.next());
console.log(int2.next());

