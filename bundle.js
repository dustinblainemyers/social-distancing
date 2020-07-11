(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const canvas = document.getElementById("canvas");
const playerControls = require("./playerControls");
const ctx = canvas.getContext("2d");

let playing = true;
let mouseClicked = false;

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

},{"./playerControls":2}],2:[function(require,module,exports){
const playerControls = {
  // translate keyboard codes to readable variables

  left: 37,
  up: 38,
  right: 39,
  down: 40,

  xcoord: 10,
  ycoord: 10,

  // keyboard event listeners
  foo() {
    document.body.onkeydown = function (e) {
      if (e.keyCode === left) {
        if (
          collisionDetection(
            playerControls.xcoord - 5,
            playerControls.ycoord
          ) === true
        ) {
          console.log("collison !");
        } else {
          playerControls.xcoord = playerControls.xcoord - 5;
        }
      }
      if (e.keyCode === right) {
        if (
          collisionDetection(
            playerControls.xcoord + 5,
            playerControls.ycoord
          ) === true
        ) {
          console.log("collison !");
        } else {
          playerControls.xcoord = playerControls.xcoord + 5;
        }
      }

      if (e.keyCode === down) {
        if (
          collisionDetection(
            playerControls.xcoord,
            playerControls.ycoord + 5
          ) == true
        ) {
          console.log("collison !");
        } else {
          playerControls.ycoord = playerControls.ycoord + 5;
        }
      }

      if (e.keyCode === up) {
        if (
          collisionDetection(
            playerControls.xcoord,
            playerControls.ycoord - 5
          ) == true
        ) {
          console.log("collison !");
        } else {
          playerControls.ycoord = playerControls.ycoord - 5;
        }
      }
    };
  },

  computerAI() {
    if (e.keyCode === left) {
      if (collisionDetection(xcoord - 5, ycoord) === true) {
      } else {
        this.xcoord = this.xcoord - 5;
      }
    }
    if (e.keyCode === right) {
      if (collisionDetection(xcoord + 5, ycoord) === true) {
      } else {
        xcoord = xcoord + 5;
      }
    }

    if (e.keyCode === down) {
      if (collisionDetection(xcoord, ycoord + 5) == true) {
      } else {
        ycoord = ycoord + 5;
      }
    }

    if (e.keyCode === up) {
      if (collisionDetection(xcoord, ycoord - 5) == true) {
      } else {
        ycoord = ycoord - 5;
      }
    }
  },
};

exports.playerControls = playerControls;

},{}]},{},[1]);
