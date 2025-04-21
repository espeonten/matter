class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            'bodyA': bodyA,
            'pointB': pointB,
            'stiffness': 0.05,
            'length': 5
        }
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
        this.pointB = pointB
        this.slingshot = Constraint.create(options)
        World.add(world, this.slingshot)
    }

    fly(){
        this.slingshot.bodyA = null
    }

    attach(body){
        this.slingshot.bodyA = body
    }
    display(){
        push()
        imageMode(CENTER)
        image(this.sling1, width/4, height/1.65, 50, 200)
        image(this.sling2, width/4.3, height/1.76, 40, 100)
        pop()
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position
            var pointB = this.pointB
            push()
            if(pointA.x<width/4){
                stroke("rgb(47, 22, 8)")
                strokeWeight(5)
                line(pointA.x - 20, pointA.y, pointB.x-20, pointB.y-52)
                line(pointA.x - 20, pointA.y, pointB.x+30, pointB.y-55)
                image(this.sling3, pointA.x - 20, pointA.y)
            }
            else{
                stroke("rgb(47, 22, 8)")
                strokeWeight(3)
                line(pointA.x + 20, pointA.y, pointB.x-20, pointB.y-52)
                line(pointA.x + 20, pointA.y, pointB.x+30, pointB.y-55)
                image(this.sling3, pointA.x + 20, pointA.y)
            }
            pop()
        }
    }
}