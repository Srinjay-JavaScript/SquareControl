noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
colorName = "black"
function preload(){

}
function setup(){
canvas = createCanvas(500, 500);
videoCanvas = createCapture(VIDEO);
canvas.position(1000, 150);
videoCanvas.position(10, 150);
videoCanvas.size(500,500);
posenet = ml5.poseNet(videoCanvas, success);
posenet.on('pose', result);
}
function draw(){
    background("white");
    fill(colorName);
  
    square(noseX, noseY, (rightWristX - leftWristX));
  
    
}
function success(){
    console.log("Posenet is now ready.");
}
function result(result){
    if (result.length > 0){
    //    console.log(result);
       noseX = result[0].pose.nose.x;
       noseY = result[0].pose.nose.y;
       leftWristX = result[0].pose.leftWrist.x;
       rightWristX = result[0].pose.rightWrist.x;
       document.getElementById("widthHeight").innerHTML = (leftWristX - rightWristX).toFixed(1);
       if ((noseX >0) && (noseY > 0)){
      console.log(result);
       }
    }
    else{
        console.log(" ERROR: Make note that there is someone infront of the camera. ");
        
        
    }

}
function coloring()
{
 colorName = document.getElementById("colorName").value;
}