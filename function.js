function drawStart() {
  // Background
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Start Text
  ctx.font = "50px meat-boy-font";
  ctx.fillStyle = "white";
  ctx.fillText("Press Enter to Start", 225, 350)
}

function runGame() {
  drawMainComponents();
}

function drawMainComponents() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);
}

function reset() {
  state = "start";
  mode = "lvlSelect";
}