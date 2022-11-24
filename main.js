function preload() {
    img = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-c7dAE7VM7MqgwcZkF8cYcMBVJsEnnwsBg&usqp=CAU');
}

function setup() {
    canvas = createCanvas(640, 480);
}

function draw() {
    image(img, 300, 200);
    fill("white");
    circle(270,190,65);
    rect(300, 180, 225, 20);
    circle(555,190,65);
    rect(300, 420, 225, 20);
    circle(275,430,65);
    rect(280, 200, 20, 225);
    circle(555,430,65);
    rect(525, 200, 20, 225);
}