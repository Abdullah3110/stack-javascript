// let addition = (a,b) => a * b
// console.log(addition(5,7));


// let add = (a,b) => {
//     return a + b

// }
// console.log(add(1,100));

//  let  test = function(){
//      console.log(this);
//  }
//  test()
 

//  let  test1 = ()=>{
//     console.log(this);
// }
// test1()


// let obj={
//     name:`abdullah`,
//     print:function(){
//         console.log(this);
//     }
// };
// obj.print()




// arrow function has not any ability to creat own object .also it can't inharites external method likes call(),
// bind(),apply() etc

// let obj1={
//     name:`abdullah`,
//     print: ()=>{
//         console.log(this);
//     }
// };
// obj1.print()





//normal function has n0t any acess to his parent object

// let object = {
//     name:`abdullah`,
//     print:function(){
//         console.log(`hellow ${this.name}`);
//           setTimeout(function(){
//               console.log(`hellow ${this.name}`);
//           },1000)

//     }
// }
// object.print()


//arrow function can acess his parent object

let object1 = {
    name:`abdullah`,
    print:function (){
        console.log(`hellow ${this.name}`);
          setTimeout(()=>{
              console.log(`hellow ${this.name}`);
          },500)

    }
}
object1.print()
