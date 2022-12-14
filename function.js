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
    checkCollisions();

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
  ctx.fillStyle = `rgb(${background.r}, ${background.g}, ${background.b})`;
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Floor1
  ctx.fillStyle = `rgb(${floor1.r}, ${floor1.g}, ${floor1.b})`;
  ctx.fillRect(floor1.x, floor1.y, floor1.w, floor1.h);

  // Wall1
  // ctx.fillStyle = `rgb(${wall1.r}, ${wall1.g}, ${wall1.b})`;
  // ctx.fillRect(wall1.x, wall1.y, wall1.w, wall1.h);

  // Spam Boy
  ctx.fillStyle = `rgb(${spamBoy.r}, ${spamBoy.g}, ${spamBoy.b})`;
  ctx.fillRect(spamBoy.x, spamBoy.y, spamBoy.w, spamBoy.h);
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

  }
  
  if (KeyS === true) {
    spamBoy.x -= 5;
    spamBoy.y += 15;
    spamBoy.w += 10;
    spamBoy.h -= 15;

    if (spamBoy.x < 525) {
      spamBoy.x = 525;
      spamBoy.y = 465;
      spamBoy.w = 30;
      spamBoy.h = 5;
    } 
  } else {
    spamBoy.x += 5;
    spamBoy.y -= 15;
    spamBoy.w -= 10;
    spamBoy.h += 15;

    if (spamBoy.x > 530) {
      spamBoy.x = 530;
      spamBoy.y = 450;
      spamBoy.w = 20;
      spamBoy.h = 20;
    }
  }
  
  if (KeyD === true) {
    floor1.x -= 5;
    wall1.x -= 5;
  }
  
  if (KeyA === true) {
    floor1.x += 5;
    wall1.x += 5;
  }
  
  if (Space === true) {
    spamBoy.ySpeed += 15;
  } 
  
  if (Enter === true) {

  }

  // Max and Min Jump and Fall Speed (Spam Boy)
  if (spamBoy.ySpeed > 15) {
    spamBoy.ySpeed = 15;
  } else if (spamBoy.ySpeed < -10) {
    spamBoy.ySpeed = -10;
  }

  // Apply Gravity
  spamBoy.ySpeed += spamBoy.yAccel;

  // Move floors, walls, etc by Spam Boy's speed
  floor1.y += spamBoy.ySpeed;
  wall1.y += spamBoy.ySpeed;
}

function lvlSelectControls() {
  if (KeyW === true) {

    KeyW = false;
  }
  
  if (KeyS === true) {

    KeyS = false;
  }
  
  if (KeyD === true) {
    selector.x += cnv.width / (numLvls + 1);

    if (selector.x > cnv.width * numLvls / (numLvls + 1)) {
      selector.x = cnv.width / (numLvls + 1);
    }

    KeyD = false;
  }
  
  if (KeyA === true) {
    selector.x -= cnv.width / (numLvls + 1);

    if (selector.x < cnv.width / (numLvls + 1)) {
      selector.x = cnv.width * numLvls / (numLvls + 1);
    }

    KeyA = false;
  }
  
  if (Space === true) {
    if (selector.x === cnv.width * 1 / (numLvls + 1)) {
      lvl = "lvl1";
    } else if (selector.x === cnv.width * 2 / (numLvls + 1)) {
      lvl = "lvl2";
    } else if (selector.x === cnv.width * 3 / (numLvls + 1)) {
      lvl = "lvl3";
    } else {
      lvl = "lvl4";
    }

    loadLevelValues();
    mode = "game";
    Space = false;
  }
  
  if (Enter === true) {
    if (selector.x === cnv.width * 1 / (numLvls + 1)) {
      lvl = "lvl1";
    } else if (selector.x === cnv.width * 2 / (numLvls + 1)) {
      lvl = "lvl2";
    } else if (selector.x === cnv.width * 3 / (numLvls + 1)) {
      lvl = "lvl3";
    } else {
      lvl = "lvl4";
    }

    loadLevelValues();
    mode = "game";
    Enter = false;
  }
}

function checkCollisions() {
  if (spamBoy.x > floor1.x - floor1.w && spamBoy.x < floor1.x + floor1.w && spamBoy.y > floor1.y - floor1.h && spamBoy.y < floor1.y + floor1.h) {
    spamBoy.ySpeed = spamBoy.ySpeed * -1;
    console.log(floor1.y);
  } else {
    spa
  }
}

function loadLevelValues() {
  if (lvl === "lvl1") {
    background = {
      r: 54,
      g: 16,
      b: 16
    };
    floor1 = {
      x: 0,
      y: 470,
      w: 1080,
      h: 250,
      r: 30,
      g: 30,
      b: 30
    };
    // floor2 = {
    //   x: ,
    //   y: ,
    //   w: ,
    //   h: 
    // };
    wall1 = {
      x: 515,
      y: 355,
      w: 50,
      h: 50,
      r: 30,
      g: 30,
      b: 30
    };
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
    spamBoy = {
      x: 530,
      y: 450,
      w: 20,
      h: 20,
      r: 219,
      g: 136,
      b: 155,
      ySpeed: 0,
      yAccel: -0.5
    };
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
}