class Pig extends Base{
    constructor(x, y){
        super(x, y, 60, 60)
        this.Visiblity = 255
        this.image = loadImage("sprites/enemy.png")
    }
    display(){
        console.log(this.Visiblity)
        if(this.body.speed < 3){
            super.display()
        }
        else{
            push()
            World.remove(world, this.body)
            this.Visiblity -= 5
            tint(255, this.Visiblity)
            image(this.image, this.body.position.x, this.body.position.y, 60, 60)
            pop()
        }
    }
    score(){
        if(this.Visiblity< 0 && this.Visiblity> -1005){
            score += 1
        }
    }
}