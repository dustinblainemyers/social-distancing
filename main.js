const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let playing = true;
let mouseClicked = false;

let xcoord = 10;
let ycoord = 10;

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
document.body.onkeydown = function (e) {
  if (e.keyCode === left) {
    if (collisionDetection(xcoord - 5, ycoord) === true) {
      console.log("collison !");
    } else {
      xcoord = xcoord - 5;
    }
  }
  if (e.keyCode === right) {
    if (collisionDetection(xcoord + 5, ycoord) === true) {
      console.log("collison !");
    } else {
      xcoord = xcoord + 5;
    }
  }

  if (e.keyCode === down) {
    if (collisionDetection(xcoord, ycoord + 5) == true) {
      console.log("collison !");
    } else {
      ycoord = ycoord + 5;
    }
  }

  if (e.keyCode === up) {
    if (collisionDetection(xcoord, ycoord - 5) == true) {
      console.log("collison !");
    } else {
      ycoord = ycoord - 5;
    }
  }
};

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
  ctx.fillRect(xcoord, ycoord, 50, 50);

  obstacleRegistry.map((obstacle) => {
    obstacle.draw();
  });
  ctx.closePath();
}, 10);
