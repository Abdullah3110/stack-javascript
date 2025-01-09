const _radius = Symbol()
const _name = Symbol()
const _draw = Symbol()
class  Circle {
    constructor(radius,name){
        this[_radius] = radius;
        this[_name] = name;
    }
    [_draw](){
        console.log(`drawing`);
    }
}


let c1 = new Circle(2,`cred`)
console.log(c1);
