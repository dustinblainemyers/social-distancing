const playerControls = {
  // translate keyboard codes to readable variables

  left: 37,
  up: 38,
  right: 39,
  down: 40,

  xcoord: 10,
  ycoord: 10,
  playing: true,
  mouseClicked: false,

  // keyboard event listeners
  playerEventListener() {
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
