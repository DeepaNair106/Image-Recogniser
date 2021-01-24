//https://teachablemachine.withgoogle.com/models/M9K-t2xBU/

Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90

});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){

Webcam.snap(function(image) {
document.getElementById("result").innerHTML = '<img id="captured_image" src= '+image+'>';

})

}

console.log("ml5 version" , ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/M9K-t2xBU/model.json", modelLoded);

function modelLoded(){

console.log("Model loaded");

}


function check(){

img = document.getElementById("captured_image");
classifier.classify(img , getResult);

}

function getResult(error , result){

if (error){
    console.error(error);
}
else{
    console.log(result);
    document.getElementById("result_object_name").innerHTML = result[0].label;
    percentage =  result[0].confidence.toFixed(2) *100;
    document.getElementById("result_object_accuracy").innerHTML = percentage +"%";
}

}