class shape{
    constructor(color){
        this.color = color;

    }
    draw(){
        console.log("deawing");
    }
}

class Rectangle extends shape{
    constructor(color,width,height){
        super(color);
        this.width = width
        this.height = height;
    }
            draw(){
                console.log("deawing a bus");
            }



    calculate(){
        return this.width * this.height
    }
}




let r  = new Rectangle("green",3,5);
console.log(r);
r.draw();