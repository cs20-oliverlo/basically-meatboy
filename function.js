function drawStart() {
  // Background
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Start Text
  ctx.font = "50px meat-boy-font";
  ctx.fillStyle = "white";
  ctx.fillText("Click to Start", 315, 350)
}

function runGame() {
  if (mode === "game") {
    gamingControls();

    if (lvl === "lvl1") {
      drawLevel1();
    } else if (lvl === "lvl2") {
      drawLevel2();
    } else if (lvl === " lvl3") {
      drawLevel3();
    } else {
      drawLevel4();
    }
  } else {
    lvlSelectControls();
    drawLevelSelector();

  }
}

function drawLevel1() {
  // Background
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);
}

function drawLevel2() {
  
}

function drawLevel3() {
  
}

function drawLevel4() {
  
}

function drawLevelSelector() {
  // Background
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  let x = cnv.width / (numLvls + 1);
  let y = cnv.height / 2 - 10;

  // Levels
  for (i = 0; i < numLvls; i++) {
    ctx.strokeStyle = "white";
    ctx.lineWidth = 4;
    ctx.strokeRect(x, y, selector.w, selector.h);

    ctx.font = "50px meat-boy-font";
    ctx.fillStyle = "white";
    ctx.fillText(`${i + 1}`, x + 7, y + 40)

    x += cnv.width / (numLvls + 1);
  }

  // Selector
  ctx.strokeStyle = "red";
  ctx.lineWidth = 4;
  ctx.strokeRect(selector.x, selector.y, selector.w, selector.h);
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

    KeyW = false;
  } else if (KeyS === true) {

    KeyS = false;
  } else if (KeyD === true) {
    selector.x += cnv.width / (numLvls + 1);

    if (selector.x > cnv.width * numLvls / (numLvls + 1)) {
      selector.x = cnv.width / (numLvls + 1);
    }

    KeyD = false;
  } else if (KeyA === true) {
    selector.x -= cnv.width / (numLvls + 1);

    if (selector.x < cnv.width / (numLvls + 1)) {
      selector.x = cnv.width * numLvls / (numLvls + 1);
    }

    KeyA = false;
  } else if (Space === true) {
    // if on lvl1-4, set lvl variable to that lvl
    loadLevelValues();
    mode = "game";

    Space = false;
  } else if (Enter === true) {
    // if on lvl1-4, set lvl variable to that lvl
    loadLevelValues();
    mode = "game";
  }

  Enter = false;
}

function loadLevelValues() {
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
  } else if (lvl === "lvl2") {

  } else if (lvl === "lvl3") {

  } else {

  }
}

function reset() {
  state = "start";
  mode = "lvlSelect";
  lvl = "lvl1";
  numLvls = 4;
  selector = {
    x: cnv.width / (numLvls + 1),
    y: 350,
    w: 50,
    h: 50
  };
  spamBoy = {
    x: 530,
    y: 350,
    w: 10,
    h: 10,
    speed: 0,
    accel: -0.5
  };
}