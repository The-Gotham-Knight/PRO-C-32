const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var Hour;
var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    

    // add condition to check if any background image is there to add
if(backgroundImg){
    background(backgroundImg)
}

    Engine.update(engine);
fill("black")
textSize(30)
if (Hour>=12){
    text("time:"+ Hour%12+"PM",50,100)
}else if (Hour==0){
    text("time:12AM",100,100)
}
else{
    text("time:"+ Hour%12+"AM",50,100)
}
    // write code to display time in correct format here


}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Europe/London")
    var responseType = await response.json()
    var dateTime = responseType.datetime
    Hour = dateTime.slice(11,13)
    if(Hour>=04 && Hour<=06){
        bg = "sunrise1.png"
    } else if(Hour>=06 && Hour<=07){
        bg = "surise2.png"
    } else if(Hour>=07 && Hour<=08){
        bg = "sunrise3.png"
    } else if(Hour>=08 && Hour<=09){
        bg = "sunrise4.png"
    } else if(Hour>=09 && Hour<=10){
        bg = "sunrise5.png"
    } else if(Hour>=10 && Hour<=11){
        bg = "sunrise6.png"
    } else if(Hour>=11 && Hour<=12){
        bg = "sunset7.png"
    }else if(Hour>=12 && Hour<=13){
        bg = "sunset8.png"
    }else if(Hour>=13 && Hour<=14){
        bg = "sunset9.png"
    }else if(Hour>=14 && Hour<=15){
        bg = "sunset10.png"
    }else if(Hour>=15 && Hour<=16){
        bg = "sunset11.png"
    }else {
        bg = "sunset12.png"
    }
    // write code to fetch time from API
backgroundImg = loadImage(bg)
    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
