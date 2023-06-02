function setup(){
    canvas = createCanvas(500,500)
    canvas.position(150,250)
    video =  createCapture(VIDEO)
    video.hide();
    cor = "white"
}
function draw(){
    image(video, 0, 0, 500, 500);
    tint(cor);
}
function garafinha(){
    cor = document.getElementById("eu").value;
}
function takeSnapshot(){
    save("foto.png");
}