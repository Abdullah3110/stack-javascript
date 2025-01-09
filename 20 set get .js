// const _radius = new WeakMap()
// const _name = new WeakMap()
// const _resize = new WeakMap()
 
// class  Circle {
//     constructor(radius,name){
//         this.size =10000
//         _radius.set(this,radius)
//         _name.set(this,name)
//         _resize.set(this,()=>{
//             console.log(this.size);
//         }) 
//     }
//         get radius (){
//             return _radius.get(this)
//         }


//             set radius (v){
//                 _radius.set(this , v)
//             }

//     draw(){
//         console.log(`drawing`);
//         console.log(_radius.get(this) , _name.get(this));
//         _resize.get(this)()
//     }

// }


// let c1 = new Circle(2,`cred`)
//  c1.draw()
// c1.radius = 100
// console.log(c1.radius);
// console.log(c1.radius);

const _radius = new WeakMap();
const _name = new WeakMap();
const _resize = new WeakMap();

class Circle {
    constructor(radius,name){
        this.size = 1999
        _radius.set (this ,radius),
        _name.set (this ,name)
        _resize.set (this ,()=>{
            console.log(this.size);
        })
    }

    get radius(){
        return _radius.get(this)
    }

    set radius(value){
        _radius.set(this,value)
    }

    draw(){
        console.log("deawing");
        console.log(_radius.get(this) , _name.get(this) , _resize.get(this));

    }
}

let c2 =new Circle(100,"red")
c2.draw()
c2.radius = 888

console.log(c2.radius);