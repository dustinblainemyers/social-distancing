(function playerControls() {
  // translate keyboard codes to readable variables

  const left = 37;
  const up = 38;
  const right = 39;
  const down = 40;

  // keyboard event listeners

  document.body.onkeydown = function (e) {
    if (e.keyCode === left) {
      if (collisionDetection(xcoord - 5, ycoord) === true) {
      } else {
        xcoord = xcoord - 5;
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
  };
})();
