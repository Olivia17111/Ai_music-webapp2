song ="";
song2 ="";
Lwristx =0;
Lwristy = 0;

Rwristx = 0;
Rwristy = 0;
function preload()
{
    song =loadSound("music.mp3");
    song2 =loadSound("music2.mp3");
}

function setup()
{
    canvas= createCanvas(800,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modalLoaded);
    poseNet.on('pose' , gotposes);
}


function  modalLoaded()
{
console.log("Modal  is loaded !!!" );
}



function gotposes(result)
{
if(result < 0)
{
Lwristx = result[0].pose.leftWrist.x;
console.log(Lwristx);
}
}

function draw()
{
    image(video ,0 , 0 , 800 , 500 );
}

function play()
{
song.play();

}