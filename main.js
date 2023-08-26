noseX = 0;
noseY = 0;

function preload(){
    filtro = loadImage('CPNG.png');
}

function setup(){
    canvas = createCanvas(400, 350);
    canvas. center();

    video = createCapture(VIDEO);
    video.size(400, 350);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    
}

function modelLoaded(){
    console.log("PoseNet OK!");
}

function draw(){
    image(video, 0, 0, 400, 350);
    image(filtro, noseX - 50 , noseY - 200, 155, 155);
}

function taka_snapshot(){
    Save('mifoto.png');
}

function gotPoses(results){
    if(results.length > 0){
        console.log("nose x = "  + results[0].pose.nose.x );

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

