img="";
objects=[];
status="";

function preload(){
    img=loadImage('Park.png');
 }

function setup(){
    canvas= createCanvas(480,380);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!")
    status= true;
    objectDetector.detect(img,gotResult)
}

function gotResult(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        objects=results;

    }
}

function draw(){
    image(img,0,0,480,380);
    if(status!= ""){
        objectDetector.detect(img,gotResult)
    for(i=0; i<objects.length; i++){
        document.getElementById("status").innerHTML= "status: objects Detected";
        document.getElementById("numberOfObjects").innerHTML= "number of objects detected are "+ objects.length
        fill("#36ad56");
        percent= floor(objects[i].confidence*100) ;
        text(objects[i].label+ " " + percent + " %", objects[i].x+15, objects[i].y+15)
        noFill();
        strokeWeight(3);
        stroke("red");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
    }
    }
    
}
