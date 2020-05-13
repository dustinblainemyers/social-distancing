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

document.body.onkeydown = function (e) {
  if (e.keyCode === left) {
    xcoord = xcoord - 5;
  }
  if (e.keyCode === right) {
    xcoord = xcoord + 5;
  }

  if (e.keyCode === down) {
    ycoord = ycoord + 5;
  }

  if (e.keyCode === up) {
    ycoord = ycoord - 5;
  }
};

// document.body.onkeydown = function (e) {
//   if (e.keyCode === right) {
//     xcoord = xcoord + 3;
//   }
// };

const obstacles = [[75, 75]];

setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();

  ctx.fillStyle = "orange";
  ctx.fillRect(xcoord, ycoord, 50, 50);

  //   obstacles.map(
  ctx.fillRect(75, 75, 50, 50);
  ctx.closePath();
}, 10);
