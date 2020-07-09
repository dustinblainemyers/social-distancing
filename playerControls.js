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
