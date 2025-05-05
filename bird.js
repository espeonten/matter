class Bird extends Base{
    constructor(x, y){
        super(x, y, 50, 50)
        this.image = loadImage("sprites/bird.png")
        this.image2 = loadImage("sprites/white-dot.png")
        this.trajectory = []
    }
    display(){
        super.display()
        if(this.body.position.x > width){
            this.body.speed = 0
        }
        if(this.body.position.x > width/4.3 && this.body.velocity.x > 20){
            this.position = [this.body.position.x, this.body.position.y]
            this.trajectory.push(this.position)
        }
        for(var i=0;i<this.trajectory.length;i+=1){
            image(this.image2, this.trajectory[i][0], this.trajectory[i][1], 10, 10)
        }
    }
}
