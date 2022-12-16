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
  if (levelSection === 0) {
    // Background
    ctx.fillStyle = `rgb(${background.r}, ${background.g}, ${background.b})`;
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    // Border1
    ctx.fillStyle = `rgb(${border1.r}, ${border1.g}, ${border1.b})`;
    ctx.fillRect(border1.x, border1.y, border1.w, border1.h);

    // Border2
    ctx.fillStyle = `rgb(${border2.r}, ${border2.g}, ${border2.b})`;
    ctx.fillRect(border2.x, border2.y, border2.w, border2.h);

    // Border3
    ctx.fillStyle = `rgb(${border3.r}, ${border3.g}, ${border3.b})`;
    ctx.fillRect(border3.x, border3.y, border3.w, border3.h);

    // Border4
    ctx.fillStyle = `rgb(${border4.r}, ${border4.g}, ${border4.b})`;
    ctx.fillRect(border4.x, border4.y, border4.w, border4.h);

    // Floor1
    ctx.fillStyle = `rgb(${floor1.r}, ${floor1.g}, ${floor1.b})`;
    ctx.fillRect(floor1.x, floor1.y, floor1.w, floor1.h);

    // // Wall1
    // ctx.fillStyle = `rgb(${wall1.r}, ${wall1.g}, ${wall1.b})`;
    // ctx.fillRect(wall1.x, wall1.y, wall1.w, wall1.h);

    // // Wall2
    // ctx.fillStyle = `rgb(${wall2.r}, ${wall2.g}, ${wall2.b})`;
    // ctx.fillRect(wall2.x, wall2.y, wall2.w, wall2.h);

    // // Floor2
    // ctx.fillStyle = `rgb(${floor2.r}, ${floor2.g}, ${floor2.b})`;
    // ctx.fillRect(floor2.x, floor2.y, floor2.w, floor2.h);

    // Spikes

    // Arrow

    // Spam Boy
    ctx.fillStyle = `rgb(${spamBoy.r}, ${spamBoy.g}, ${spamBoy.b})`;
    ctx.fillRect(spamBoy.x, spamBoy.y, spamBoy.w, spamBoy.h);
  } else if (levelSection === 1) {
    // Flag
    ctx.fillStyle = `rgb(${flag.r1}, ${flag.g1}, ${flag.b1})`;
    ctx.beginPath();
    ctx.moveTo(flag.x1, flag.y1);
    ctx.lineTo(flag.x2, flag.y2);
    ctx.lineTo(flag.x3, flag.y3);
    ctx.fill();

    // Pole
    ctx.lineWidth = flag.w;
    ctx.strokeStyle = `rgb(${flag.r2}, ${flag.g2}, ${flag.b2})`;
    ctx.beginPath();
    ctx.moveTo(flag.x1, flag.y1);
    ctx.lineTo(flag.x1, flag.y4);
    ctx.stroke();
  }
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
    // Add Ducking
  }
  
  if (KeyD === true) {
    spamBoy.x += spamBoy.xSpeed;
  }
  
  if (KeyA === true) {
    spamBoy.x -= spamBoy.xSpeed;
  }
  
  if (Space === true) {
    if (spamBoy.canJump === true) {
      spamBoy.ySpeed += -15;
    }
  }
  
  if (Enter === true) {

  }

  // Max and Min Jump and Fall Speed (Spam Boy)
  if (spamBoy.ySpeed > 15) {
    spamBoy.ySpeed = 15;
  } else if (spamBoy.ySpeed < -15) {
    spamBoy.ySpeed = -15;
  }

  // Apply Gravity
  spamBoy.ySpeed -= spamBoy.yAccel;

  // Move Spam Boy
  spamBoy.y += spamBoy.ySpeed;
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
  if (spamBoy.x < border3.x + border3.w) {
    spamBoy.x = 25;
  }

  if (spamBoy.x + spamBoy.w > border4.x) {
    spamBoy.x = 1035;
  }

  if (spamBoy.y < border1.y + border1.h) {
    spamBoy.y = 25;
    spamBoy.ySpeed = 0;
  }

  if (spamBoy.y + spamBoy.h > border2.y) {
    spamBoy.y = 675;
    spamBoy.canJump = true;
  } else {
    spamBoy.canJump = false;
  }
}

function loadLevelValues() {
  if (lvl === "lvl1") {
    background = {
      r: 54,
      g: 16,
      b: 16
    };
    border1 = {
      x: 0,
      y: 0,
      w: 1080,
      h: 25,
      r: 10,
      g: 10,
      b: 10
    };
    border2 = {
      x: 0,
      y: 695,
      w: 1080,
      h: 25,
      r: 10,
      g: 10,
      b: 10
    };
    border3 = {
      x: 0,
      y: 0,
      w: 25,
      h: 720,
      r: 10,
      g: 10,
      b: 10
    };
    border4 = {
      x: 1055,
      y: 0,
      w: 25,
      h: 720,
      r: 10,
      g: 10,
      b: 10
    };
    floor1 = {
      x: 25,
      y: 200,
      w: 800,
      h: 25,
      r: 30,
      g: 30,
      b: 30
    };
    floor2 = {
      x: 0,
      y: 0,
      w: 100,
      h: 250,
      r: 30,
      g: 30,
      b: 30
    };
    wall1 = {
      x: 515,
      y: 355,
      w: 50,
      h: 50,
      r: 30,
      g: 30,
      b: 30
    };
    wall2 = {
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      r: 30,
      g: 30,
      b: 30
    };
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
    flag = {
      x1: 100,
      y1: 500,
      x2: 100,
      y2: 525,
      x3: 125,
      y3: 513,
      y4: 550,
      r1: 0,
      g1: 250,
      b1: 0,
      r2: 0,
      g2: 0,
      b2: 0,
      w: 5 
    };
    spamBoy = {
      x: 530,
      y: 450,
      w: 20,
      h: 20,
      r: 219,
      g: 136,
      b: 155,
      xSpeed: 5,
      ySpeed: 0,
      yAccel: -0.5,
      canJump: false
    };
    levelSection = 0;
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