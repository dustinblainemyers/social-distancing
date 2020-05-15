const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let playing = true;
let mouseClicked = false;

let xcoord = 10;
let ycoord = 10;
const left = 37;
const up = 38;
const right = 39;
const down = 40;

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
    if (xcoord - 5 > 450 && xcoord - 5 < 550 && ycoord > 25 && ycoord < 125) {
      console.log("collison !");
    } else {
      console.log("xcoord", xcoord, "ycoord", ycoord);
      xcoord = xcoord - 5;
    }
  }
  if (e.keyCode === right) {
    if (xcoord + 5 > 450 && xcoord + 5 < 550 && ycoord > 25 && ycoord < 125) {
      console.log("collison !");
    } else {
      console.log("xcoord", xcoord, "ycoord", ycoord);
      xcoord = xcoord + 5;
    }
  }

  if (e.keyCode === down) {
    if (xcoord > 450 && xcoord < 550 && ycoord + 5 > 25 && ycoord + 5 < 125) {
      console.log("collison !");
    } else {
      console.log("xcoord", xcoord, "ycoord", ycoord);
      ycoord = ycoord + 5;
    }
  }

  if (e.keyCode === up) {
    if (xcoord > 450 && xcoord < 550 && ycoord - 5 > 25 && ycoord - 5 < 125) {
      console.log("collison !");
    } else {
      console.log("xcoord", xcoord, "ycoord", ycoord);
      ycoord = ycoord - 5;
    }
  }
};

function collisionDetection(inputX, inputY) {
  inputX > obstacle.xcoord - 50 &&
    inputX < obstacle.xcoord + 50 &&
    inputY > obstacle.ycoord - 50 &&
    inputY < obstacle.ycoord + 50;
}

const obstacleRegistry = [];

setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();

  ctx.fillStyle = "orange";
  ctx.fillRect(xcoord, ycoord, 50, 50);

  ctx.fillRect(500, 75, 50, 50);
  obstacleRegistry.push(new Obstacle(400, 0, 50, 50));
  obstacleRegistry.map((obstacle) => {
    obstacle.draw();
  });
  ctx.closePath();
}, 10);
