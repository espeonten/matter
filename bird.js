class Bird extends Base{
    constructor(x, y){
        super(x, y, 50, 50)
        this.image = loadImage("sprites/bird.png")
    }
    display(){
        super.display()
    }
}