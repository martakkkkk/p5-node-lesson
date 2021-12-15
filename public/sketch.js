let clientSocket = io();

clientSocket.on("connect", newConnection);
clientSocket.on("mouseBroadcast", newBroadcast);

function newConnection() {
  console.log(clientSocket.id);
}

function newBroadcast(data) {
  console.log(data);
  stroke("purple");
  line(data.x - 66, data.y, data.x + 66, data.y);
  line(data.x, data.y - 66, data.x, data.y + 66);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  strokeWeight(2);
}

function draw() {
  stroke("white");
  line(mouseX - 66, mouseY, mouseX + 66, mouseY);
  line(mouseX, mouseY - 66, mouseX, mouseY + 66);

  // stroke("black");
  // fill("white");
  // circle(mouseX, mouseY, 18);
}

function mouseMoved() {
  let message = {
    x: mouseX,
    y: mouseY,
  };

  clientSocket.emit("mouse", message);
}
