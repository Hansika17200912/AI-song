song1 = "";
song2 = "";

function preload()  {
     song1 = loadSound("music.mp3")
     song2 = loadSound("music2.mp3")
}

function setup()  {
    cavas = createCanvas(600,500);
    cavas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()  {
    image(video, 0, 0, 600, 500)
}