let clientSocket = io();

clientSocket.on("connect", newConnection);
clientSocket.on("mouseBroadcast", newBroadcast);

function newConnection() {
  console.log(clientSocket.id);
}

function newBroadcast(data) {
  console.log(data);
  noStroke();
  fill("red");
  circle(data.x, data.y, 10);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
}

function draw() {
  noStroke();
  fill("yellow");
  circle(mouseX, mouseY, 20);
}

function mouseMoved() {
  let message = {
    x: mouseX,
    y: mouseY,
  };

  clientSocket.emit("mouse", message);
}
