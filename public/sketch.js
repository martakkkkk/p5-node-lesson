let clientSocket = io();

clientSocket.on("connect", newConnection);
clientSocket.on("mouseBroadcast", newBroadcast);

function newConnection() {
  console.log(clientSocket.id);
}

function newBroadcast(data) {
  console.log(data);
  stroke("purple");
  line(data.x - 33, data.y, data.x + 33, data.y);
  line(data.x, data.y - 33, data.x, data.y + 33);
}

function preload() {
  bg = loadImage("background.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bg);
  strokeWeight(2);
}

function draw() {
  stroke("lime");
  line(mouseX - 33, mouseY, mouseX + 33, mouseY);
  line(mouseX, mouseY - 33, mouseX, mouseY + 33);
}

function mouseMoved() {
  let message = {
    x: mouseX,
    y: mouseY,
  };

  clientSocket.emit("mouse", message);
}
