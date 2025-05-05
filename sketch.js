//create base class with same properties
//in options change experiment restitution friction density
//create 3 objects from class w/ different options


//Javascript object notation: JSON
//ASCII: American Standard Code For Information Interchange
//API: Application Programming Interface

//https://worldtimeapi.org/api/timezone/US/Pacific

//namespacing
const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
const Constraint = Matter.Constraint
const Body = Matter.Body
//variables for game
var engine
var world
var floor
var backgroundImage
var ground
var platform
var bird
var box1, box2, box3, box4, box5
var log1, log2, log3, log4
var pig1, pig2
var slingshot
var score = 0
var birdstate = "onSling"

function preload(){
    bg()
}

function setup(){
    createCanvas(windowWidth, windowHeight)
    engine = Engine.create()
    world = engine.world;

    ground = new Ground(width/2, height-15, 2000, 40)

    platform = new Ground(245, height-160, 500, 250)

    bird = new Bird(width/4.3, height/1.66, 50, 50)

    box1 = new Box(width/1.2, height/1.1, 75, 75)
    box2 = new Box(width/1.5, height/1.1, 75, 75)
    box3 = new Box(width/1.2, height/1.2, 75, 75)
    box4 = new Box(width/1.5, height/1.2, 75, 75)
    box5 = new Box(width/1.33, height/1.4, 75, 75)

    log1 = new Log(width/1.334, height/1.2, 363, 20)
    log2 = new Log(width/1.334, height/1.3, 363, 20)
    log3 = new Log(width/1.28, height/1.5, 200, 20)
    log4 = new Log(width/1.4, height/1.5, 200, 20)

    pig1 = new Pig(width/1.33, height/1.3)
    pig2 = new Pig(width/1.33, height/1.2)

    slingshot = new Slingshot(bird.body, {'x': width/4.15, 'y': height/1.7})
}

function draw(){
    if(backgroundImage){
        background(backgroundImage)
    }
    Engine.update(engine)

    ground.display()

    platform.display()

    bird.display()

    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()

    log1.display()
    log2.display()
    log3.display()
    log4.display()

    pig1.display()
    pig2.display()
    pig1.score()
    pig2.score()

    slingshot.display()

    fill("white")
    textSize(30)
    text("Score: " + score, width/1.1, height/21)
}

function mouseDragged(){
    if(birdstate != "launched"){
        Body.setPosition(bird.body, {'x': mouseX,'y': mouseY})
    }
}

function mouseReleased(){
    slingshot.fly()
    birdstate = "launched"
}

function keyPressed(){
    if(keyCode == 32 && bird.body.speed < 2){
        bird.trajectory = []
        Body.setPosition(bird.body, {'x': width/4.3, 'y': height/1.66})
        slingshot.attach(bird.body)
        birdstate = "onSling"
    }
}

async function bg(){
    //backgroundImage = loadImage("sprites/bg.png")
    //nightBackgroundImage = loadImage("sprites/night-bg.png")
    var response = await(fetch("https://worldtimeapi.org/api/timezone/US/Pacific"))
    //console.rlog(response)
    var jsonResponse = await(response.json())
    //console.log(jsonResponse)
    var datetime = jsonResponse.datetime
    var hour = datetime.slice(11, 13)
    var intHour = parseInt(hour)
    if(intHour > 5 && intHour < 22){
        backgroundImage = loadImage("sprites/bg.png")
    }
    else{
        backgroundImage = loadImage("sprites/night-bg.png")
    }
    //6:00 am
    //10:00 pm
}
