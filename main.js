// Helicopter Game Start

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 1080;
cnv.height = 720;

// Global Variables (Once)
let mouseIsPressed = false;

// Global Variables (Reset)
let state;
let mode;
reset();

// Draw Function
window.addEventListener("load", draw);

function draw() {
  if (state === "start") {
    drawStart();
  } else if (state === "gameon") {
    if (mode === "lvlSelect") {

    }
  } else if (state === "gameover") {
    drawGameOver();
  }

  // Request Animation Frame
  requestAnimationFrame(draw);
}

// EVENT STUFF
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("keydown", keydownHandler);

function mousedownHandler() {
  mouseIsPressed = true;
}

function mouseupHandler() {
  mouseIsPressed = false;
}

function keydownHandler(event) {
  if (event.code === "KeyW") {

  } else if (event.code === "KeyS") {

  } else if (event.code === "KeyD") {

  } else if (event.code === "KeyA") {

  } else if (event.code === "Space") {
    
  } else if (event.code === "Enter") {
    console.log("Enter");

    if (state === "start") {
      state = "gameon";
    }
  }
}