function preload() {

}

function setup() {
    canvas = createCanvas(740, 580);
    canvas.position(300, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    //circles
    circle(30, 30, 50).fill("red");
    circle(710, 30, 50);
    circle(30, 550, 50);
    circle(710, 550, 50);
    //rectangles
    rect(70 , 5 , 600 , 50);
    rect(6 , 70 , 50 , 425);
    rect(70 , 525 , 600 , 50);
    rect(680 , 70 , 50 , 425);
    image(video, 70, 60, 600, 440);
    tint(tint_color);
}

function take_snapshot() {
    save("Filter_Snap.png");
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}