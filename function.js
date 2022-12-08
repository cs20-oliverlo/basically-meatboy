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
  if (mode === "game") {
    gamingControls();

    if (lvl === "lvl1") {
      drawLevel1();
    } else if (lvl === "lvl2") {
      
    } else if (lvl === " lvl3") {

    } else {

    }
  } else {
    lvlSelectControls();

  }
}

function drawLevel1() {
  
}

function gamingControls() {
  if (KeyW === true) {

  } else if (KeyS === true) {

  } else if (KeyD === true) {

  } else if (KeyA === true) {

  } else if (Space === true) {

  } else if (Enter === true) {

  }
}

function lvlSelectControls() {
  if (KeyW === true) {

  } else if (KeyS === true) {

  } else if (KeyD === true) {

  } else if (KeyA === true) {

  } else if (Space === true) {

  } else if (Enter === true) {
    // if on lvl1-4, set lvl variable to that lvl
    loadLevel();
  }
}

function loadLevel() {
  if (lvl === "lvl1") {
    // floor1 = {
    //   x: ,
    //   y: ,
    //   w: ,
    //   h: 
    // };
    // floor2 = {
    //   x: ,
    //   y: ,
    //   w: ,
    //   h: 
    // };
    // wall1 = {
    //   x: ,
    //   y: ,
    //   w: ,
    //   h: 
    // };
    // wall2 = {
    //   x: ,
    //   y: ,
    //   w: ,
    //   h: 
    // };
    // wall3 = {
    //   x: ,
    //   y: ,
    //   w: ,
    //   h: 
    // };
    // wall4 = {
    //   x: ,
    //   y: ,
    //   w: ,
    //   h: 
    // };
  }
}

function reset() {
  state = "start";
  mode = "lvlSelect";
  lvl = "lvl1";
  let floor1, floor2, wall1, wall2, wall3, wall4;
}