const _radius = new WeakMap()
const _name = new WeakMap()
const _resize = new WeakMap()
 
class  Circle {
    constructor(radius,name){
        this.size =10000
        _radius.set(this,radius)
        _name.set(this,name)
        _resize.set(this,()=>{
            console.log(this.size);
        }) 
    }
    draw(){
        console.log(`drawing`);
        console.log(_radius.get(this) , _name.get(this));
        _resize.get(this)()
    }

}


let c1 = new Circle(2,`cred`)
 c1.draw()
