const canvas = document.getElementById("canvas");
const playerControls = require("./playerControls");
const ctx = canvas.getContext("2d");

class Obstacle {
  constructor(xcoord, ycoord, width, height) {
    this.xcoord = xcoord;
    this.ycoord = ycoord;
    this.width = width;
    this.height = height;
  }

  draw() {
    ctx.fillRect(this.xcoord, this.ycoord, this.width, this.height);
  }
}

function collisionDetection(inputX, inputY) {
  let collision = false;
  obstacleRegistry.forEach((obstacle) => {
    if (
      inputX < obstacle.xcoord + obstacle.width &&
      inputX + 50 > obstacle.xcoord &&
      inputY < obstacle.ycoord + obstacle.height &&
      inputY + 50 > obstacle.ycoord
    ) {
      // collision detected!

      collision = true;
      console.log("player x is", inputX);
      console.log("player y is", inputY);
      console.log("obstacle.xcoord is ", obstacle.xcoord);
      console.log("obstacle.ycoord is", obstacle.ycoord);
    }
  });
  return collision;
}

const obstacleRegistry = [];
obstacleRegistry.push(new Obstacle(400, 0, 50, 50));
obstacleRegistry.push(new Obstacle(500, 75, 50, 50));
obstacleRegistry.push(new Obstacle(400, 300, 500, 50));

setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();

  ctx.fillStyle = "orange";
  ctx.fillRect(playerControls.xcoord, playerControls.ycoord, 50, 50);

  obstacleRegistry.map((obstacle) => {
    obstacle.draw();
  });
  ctx.closePath();
}, 10);
