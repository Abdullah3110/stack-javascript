import shape from `./shape`


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

export default Rectangle