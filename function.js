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
    drawLevel();
  } else {
    lvlSelectControls();
    drawLevelSelector();

  }
}

function drawLevel() {
  // Background
  ctx.fillStyle = `rgb(${background.r}, ${background.g}, ${background.b})`;
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Borders
  for (let i = 0; i < borders.length; i++) {
    ctx.fillStyle = `rgb(${borders[i].r}, ${borders[i].g}, ${borders[i].b})`;
    ctx.fillRect(borders[i].x, borders[i].y, borders[i].w, borders[i].h);
  }

  // Blocks
  for (let i = 0; i < blocks.length; i++) {
    ctx.fillStyle = `rgb(${blocks[i].r}, ${blocks[i].g}, ${blocks[i].b})`;
    ctx.fillRect(blocks[i].x, blocks[i].y, blocks[i].w, blocks[i].h);
  }

  // Platforms
  for (let i = 0; i < platforms.length; i++) {
    ctx.fillStyle = `rgb(${platforms[i].r}, ${platforms[i].g}, ${platforms[i].b})`;
    ctx.fillRect(platforms[i].x, platforms[i].y, platforms[i].w, platforms[i].h);
    platforms[i].x += platforms[i].xMove;

    if (platforms[i].x < platforms[i].xMin || platforms[i].x > platforms[i].xMax) {
      platforms[i].xMove *= -1;
    }
  }

  // Spike1
  for (let i = 0; i < spikes.length; i++) {
    spikes[i].x1Sum = spikes[i].x1;
    spikes[i].x2Sum = spikes[i].x2;
    spikes[i].x3Sum = spikes[i].x3;
  
    for (let n = 0; n < spikes[i].num; n++) {
      ctx.fillStyle = `rgb(${spikes[i].r}, ${spikes[i].g}, ${spikes[i].b})`;
      ctx.beginPath();
      ctx.moveTo(spikes[i].x1Sum, spikes[i].y1);
      ctx.lineTo(spikes[i].x2Sum, spikes[i].y2);
      ctx.lineTo(spikes[i].x3Sum, spikes[i].y3);
      ctx.fill()
      spikes[i].x1Sum += spikes[i].xAdder;
      spikes[i].x2Sum += spikes[i].xAdder;
      spikes[i].x3Sum += spikes[i].xAdder;
    }
  }

  // Wall Jumps
  for (let i = 0; i < wallJumps.length; i++) {
    ctx.fillStyle = `rgb(${wallJumps[i].r}, ${wallJumps[i].g}, ${wallJumps[i].b})`;
    ctx.fillRect(wallJumps[i].x, wallJumps[i].y, wallJumps[i].w, wallJumps[i].h);
  }

  // // Bounce Pads
  // for (let i = 0; i < bouncePads.length; i++) {
  //   ctx.fillStyle = `rgb(${bouncePads[i].r}, ${bouncePads[i].g}, ${bouncePads[i].b})`;
  //   ctx.beginPath();
  //   ctx.arc(bouncePads[i].x, bouncePads[i].y, bouncePads[i].rad, bouncePads[i].angleStart, bouncePads[i].angleEnd);
  //   ctx.fill();
  // }

  // Arrow
  ctx.lineWidth = 3;
  ctx.strokeStyle = `rgb(${arrow.r}, ${arrow.g}, ${arrow.b})`;
  ctx.beginPath();
  ctx.moveTo(arrow.x1, arrow.y1);
  ctx.lineTo(arrow.x2, arrow.y2);
  ctx.lineTo(arrow.x3, arrow.y3);
  ctx.lineTo(arrow.x4, arrow.y4);
  ctx.lineTo(arrow.x5, arrow.y5);
  ctx.lineTo(arrow.x6, arrow.y6);
  ctx.lineTo(arrow.x7, arrow.y7);
  ctx.lineTo(arrow.x1, arrow.y1);
  ctx.stroke();
  
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

  // Spam Boy
  ctx.fillStyle = `rgb(${spamBoy.r}, ${spamBoy.g}, ${spamBoy.b})`;
  ctx.fillRect(spamBoy.x, spamBoy.y, spamBoy.w, spamBoy.h);
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
      spamBoy.ySpeed -= spamBoy.jumpSpeed;
    } else if (spamBoy.onWall === true) {
      spamBoy.ySpeed -= spamBoy.wallJumpSpeed;
    }
  }
  
  if (Enter === true) {

  }

  // Spam Boy xSpeed Cap
  if (spamBoy.xSpeed > spamBoy.xSpeedMax - 0.5) {
    spamBoy.xSpeed = spamBoy.xSpeedMax - 0.5;
  } else if (spamBoy.xSpeed < 5) {
    spamBoy.xSpeed = 5;
  }

  // Spam Boy x Acceleration
  if (spamBoy.canJump !== true) {
    spamBoy.xSpeed += spamBoy.xAccel;
  } else {
    spamBoy.xSpeed -= spamBoy.xAccel * 2;
  }

  // Spam Boy ySpeed Cap
  if (spamBoy.ySpeed > 7) {
    spamBoy.ySpeed = 7;
  } else if (spamBoy.ySpeed < -spamBoy.jumpSpeed) {
    spamBoy.ySpeed = -spamBoy.jumpSpeed;
  }

  // Spam Boy y Acceleration
  spamBoy.ySpeed -= spamBoy.yAccel;

  // Move Spam Boy y
  spamBoy.y += spamBoy.ySpeed;

  // Jumping
  spamBoy.canJump = false;
  spamBoy.onWall = false;
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
      lvl = 0;
    } else if (selector.x === cnv.width * 2 / (numLvls + 1)) {
      lvl = 1;
    } else if (selector.x === cnv.width * 3 / (numLvls + 1)) {
      lvl = 2;
    } else {
      lvl = 3;
    }

    levelSection = 0;
    loadLevelValues();
    mode = "game";
    Space = false;
  }
  
  if (Enter === true) {
    if (selector.x === cnv.width * 1 / (numLvls + 1)) {
      lvl = 0;
    } else if (selector.x === cnv.width * 2 / (numLvls + 1)) {
      lvl = 1;
    } else if (selector.x === cnv.width * 3 / (numLvls + 1)) {
      lvl = 2;
    } else {
      lvl = 3;
    }

    levelSection = 0;
    loadLevelValues();
    mode = "game";
    Enter = false;
  }
}

function checkCollisions() {
  // Borders
  for (let i = 0; i < borders.length; i++) {
    if (spamBoy.y + spamBoy.h > borders[i].y && spamBoy.y + spamBoy.h < borders[i].y + borders[i].h && spamBoy.x < borders[i].x + borders[i].w - spamBoy.xSpeedMax && spamBoy.x + spamBoy.w > borders[i].x + spamBoy.xSpeedMax) {
      spamBoy.y = borders[i].y - spamBoy.h;
      spamBoy.canJump = true;
      spamBoy.ySpeed = 0;
    } else if (spamBoy.y < borders[i].y + borders[i].h && spamBoy.y > borders[i].y && spamBoy.x < borders[i].x + borders[i].w - spamBoy.xSpeedMax && spamBoy.x + spamBoy.w > borders[i].x + spamBoy.xSpeedMax) {
      spamBoy.y = borders[i].y + borders[i].h;
      spamBoy.ySpeed = 0;
    } else if (spamBoy.x < borders[i].x + borders[i].w && spamBoy.x > borders[i].x && spamBoy.y < borders[i].y + borders[i].h && spamBoy.y + spamBoy.h > borders[i].y) {
      spamBoy.x = borders[i].x + borders[i].w;
    } else if (spamBoy.x + spamBoy.w > borders[i].x && spamBoy.x + spamBoy.w < borders[i].x + borders[i].w &&spamBoy.y < borders[i].y + borders[i].h && spamBoy.y + spamBoy.h > borders[i].y) {
      spamBoy.x = borders[i].x - spamBoy.w;
    }
  }

  // Blocks
  for (let i = 0; i < blocks.length; i++) {
    if (spamBoy.y + spamBoy.h > blocks[i].y && spamBoy.y + spamBoy.h < blocks[i].y + blocks[i].h && spamBoy.x < blocks[i].x + blocks[i].w - spamBoy.xSpeedMax && spamBoy.x + spamBoy.w > blocks[i].x + spamBoy.xSpeedMax) {
      spamBoy.y = blocks[i].y - spamBoy.h;
      spamBoy.canJump = true;
      spamBoy.ySpeed = 0;
    } else if (spamBoy.y < blocks[i].y + blocks[i].h && spamBoy.y > blocks[i].y && spamBoy.x < blocks[i].x + blocks[i].w - spamBoy.xSpeedMax && spamBoy.x + spamBoy.w > blocks[i].x + spamBoy.xSpeedMax) {
      spamBoy.y = blocks[i].y + blocks[i].h;
      spamBoy.ySpeed = 0;
    } else if (spamBoy.x < blocks[i].x + blocks[i].w && spamBoy.x > blocks[i].x && spamBoy.y < blocks[i].y + blocks[i].h && spamBoy.y + spamBoy.h > blocks[i].y) {
      spamBoy.x = blocks[i].x + blocks[i].w;
    } else if (spamBoy.x + spamBoy.w > blocks[i].x && spamBoy.x + spamBoy.w < blocks[i].x + blocks[i].w &&spamBoy.y < blocks[i].y + blocks[i].h && spamBoy.y + spamBoy.h > blocks[i].y) {
      spamBoy.x = blocks[i].x - spamBoy.w;
    }
  }

  // Platforms
  for (let i = 0; i < platforms.length; i++) {
    if (spamBoy.y + spamBoy.h > platforms[i].y && spamBoy.y + spamBoy.h < platforms[i].y + platforms[i].h && spamBoy.x < platforms[i].x + platforms[i].w - spamBoy.xSpeedMax - 1 && spamBoy.x + spamBoy.w > platforms[i].x + spamBoy.xSpeedMax + 1) {
      spamBoy.y = platforms[i].y - spamBoy.h;
      spamBoy.canJump = true;
      spamBoy.ySpeed = 0;
      spamBoy.x += platforms[i].xMove;
    } else if (spamBoy.y < platforms[i].y + platforms[i].h && spamBoy.y > platforms[i].y && spamBoy.x < platforms[i].x + platforms[i].w - spamBoy.xSpeedMax - 1 && spamBoy.x + spamBoy.w > platforms[i].x + spamBoy.xSpeedMax + 1) {
      spamBoy.y = platforms[i].y + platforms[i].h;
      spamBoy.ySpeed = 0;
    } else if (spamBoy.x < platforms[i].x + platforms[i].w && spamBoy.x > platforms[i].x && spamBoy.y < platforms[i].y + platforms[i].h && spamBoy.y + spamBoy.h > platforms[i].y) {
      spamBoy.x = platforms[i].x + platforms[i].w;
    } else if (spamBoy.x + spamBoy.w > platforms[i].x && spamBoy.x + spamBoy.w < platforms[i].x + platforms[i].w &&spamBoy.y < platforms[i].y + platforms[i].h && spamBoy.y + spamBoy.h > platforms[i].y) {
      spamBoy.x = platforms[i].x - spamBoy.w;
    }
  }

  // Spikes
  for (let i = 0; i < spikes.length; i++) {
    if (spikes[i].y1 > spamBoy.y && spikes[i].y1 < spamBoy.y + spamBoy.h && spamBoy.x < spikes[i].x3 + spikes[i].xAdder * (spikes[i].num - 1) && spamBoy.x + spamBoy.w > spikes[i].x2) {
      loadLevelValues();
    } else if (spikes[i].y3 > spamBoy.y && spikes[i].y3 < spamBoy.y + spamBoy.h && spamBoy.x < spikes[i].x3 + spikes[i].xAdder * (spikes[i].num - 1) && spamBoy.x + spamBoy.w > spikes[i].x2) {
      loadLevelValues();
    }
  }

  // Wall Jumps
  for (let i = 0; i < wallJumps.length; i++) {
    if (spamBoy.y + spamBoy.h > wallJumps[i].y && spamBoy.y + spamBoy.h < wallJumps[i].y + wallJumps[i].h && spamBoy.x < wallJumps[i].x + wallJumps[i].w - spamBoy.xSpeedMax && spamBoy.x + spamBoy.w > wallJumps[i].x + spamBoy.xSpeedMax) {
      // top
      spamBoy.onWall = true;
    } else if (spamBoy.y < wallJumps[i].y + wallJumps[i].h && spamBoy.y > wallJumps[i].y && spamBoy.x < wallJumps[i].x + wallJumps[i].w - spamBoy.xSpeedMax && spamBoy.x + spamBoy.w > wallJumps[i].x + spamBoy.xSpeedMax) {
      // bottom
      spamBoy.onWall = true;
    } else if (spamBoy.x < wallJumps[i].x + wallJumps[i].w && spamBoy.x > wallJumps[i].x && spamBoy.y < wallJumps[i].y + wallJumps[i].h && spamBoy.y + spamBoy.h > wallJumps[i].y) {
      // left
      spamBoy.onWall = true;
    } else if (spamBoy.x + spamBoy.w > wallJumps[i].x && spamBoy.x + spamBoy.w < wallJumps[i].x + wallJumps[i].w &&spamBoy.y < wallJumps[i].y + wallJumps[i].h && spamBoy.y + spamBoy.h > wallJumps[i].y) {
      // right
      spamBoy.onWall = true;
    }
  }

  // Arrow
  if (spamBoy.x > arrow.x4 && spamBoy.x < arrow.x1 && spamBoy.y < arrow.y7 && spamBoy.y + spamBoy.h > arrow.y2) {
    levelSection++;
    loadLevelValues();
  } else if (spamBoy.x + spamBoy.w > arrow.x4 && spamBoy.x + spamBoy.w < arrow.x1 && spamBoy.y < arrow.y7 && spamBoy.y + spamBoy.h > arrow.y2) {
    levelSection++;
    loadLevelValues();
  }
}

// Credit to Jusin to teaching me arrays

function loadLevelValues() {
  if (lvl === 0) {
    if (levelSection === 0) {
      background = {
        r: 54,
        g: 16,
        b: 16
      };
      borders = [
        {
          x: 0,
          y: 0,
          w: 1080,
          h: 25,
          r: 10,
          g: 10,
          b: 10
        },
        {
          x: 0,
          y: 695,
          w: 1080,
          h: 25,
          r: 10,
          g: 10,
          b: 10
        },
        {
          x: 0,
          y: 0,
          w: 25,
          h: 720,
          r: 10,
          g: 10,
          b: 10
        },
        {
          x: 1055,
          y: 0,
          w: 25,
          h: 720,
          r: 10,
          g: 10,
          b: 10
        }
      ];
      blocks = [
        {
          x: 25,
          y: 200,
          w: 800,
          h: 25,
          r: 30,
          g: 30,
          b: 30
        },
        {
          x: 255,
          y: 500,
          w: 800,
          h: 25,
          r: 30,
          g: 30,
          b: 30
        },
        {
          x: 505,
          y: 425,
          w: 50,
          h: 75,
          r: 30,
          g: 30,
          b: 30
        },
        {
          x: 255,
          y: 333,
          w: 50,
          h: 167,
          r: 30,
          g: 30,
          b: 30
        },
        {
          x: 630,
          y: 525,
          w: 50,
          h: 90,
          r: 30,
          g: 30,
          b: 30
        },
        {
          x: 630,
          y: 650,
          w: 50,
          h: 45,
          r: 30,
          g: 30,
          b: 30
        }
      ];
      platforms = [
        {
        x: 300,
        y: 650,
        w: 100,
        h: 10,
        xMove: 1,
        xMin: 300,
        xMax: 400,
        r: 30,
        g: 30,
        b: 30
        }
      ]
      spikes = [
        {
          x1: 311,
          y1: 488,
          x2: 305,
          y2: 500,
          x3: 317,
          y3: 500,
          xAdder: 12.5,
          num: 16,
          r: 200,
          g: 0,
          b: 0
        },
        {
          x1: 261,
          y1: 683,
          x2: 255,
          y2: 695,
          x3: 267,
          y3: 695,
          xAdder: 12.5,
          num: 30,
          r: 200,
          g: 0,
          b: 0
        }
      ];
      wallJumps = [
        {
          x: 0,
          y: 0,
          w: 0,
          h: 0,
          r: 0,
          g: 0,
          b: 0
        }
      ];
      bouncePads = [
        {
          x: 0,
          y: 0,
          rad: 0,
          angleStart: 0,
          angleEnd: 0,
          r: 0,
          g: 0,
          b: 0
        }
      ];
      arrow = {
        x1: 1040,
        y1: 660,
        x2: 1020,
        y2: 640,
        x3: 1020,
        y3: 650,
        x4: 985,
        y4: 650,
        x5: 985,
        y5: 670,
        x6: 1020,
        y6: 670,
        x7: 1020,
        y7: 680,
        r: 0,
        g: 180,
        b: 60
      };
      flag = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        x3: 0,
        y3: 0,
        r1: 0,
        g1: 0,
        b1: 0,
        r2: 0,
        g2: 0,
        b2: 0,
        w: 0 
      };
      spamBoy = {
        x: 530,
        y: 100,
        w: 25,
        h: 25,
        r: 219,
        g: 136,
        b: 155,
        xSpeed: 5,
        xAccel: 0.5,
        xSpeedMax: 10,
        ySpeed: 0,
        yAccel: -0.5,
        jumpSpeed: 10,
        canJump: false,
        wallJumpSpeed: 5,
        onWall: false
      };
    } else if (levelSection === 1) {
      background = {
        r: 54,
        g: 16,
        b: 16
      };
      borders = [
        {
          x: 0,
          y: 0,
          w: 1080,
          h: 25,
          r: 10,
          g: 10,
          b: 10
        },
        {
          x: 0,
          y: 695,
          w: 1080,
          h: 25,
          r: 10,
          g: 10,
          b: 10
        },
        {
          x: 0,
          y: 0,
          w: 25,
          h: 720,
          r: 10,
          g: 10,
          b: 10
        },
        {
          x: 1055,
          y: 0,
          w: 25,
          h: 720,
          r: 10,
          g: 10,
          b: 10
        }
      ];
      blocks = [
        {
          x: 25,
          y: 200,
          w: 100,
          h: 495,
          r: 30,
          g: 30,
          b: 30
        },
        {
          x: 550,
          y: 400,
          w: 156,
          h: 295,
          r: 30,
          g: 30,
          b: 30
        },
        {
          x: 255,
          y: 25,
          w: 50,
          h: 500,
          r: 30,
          g: 30,
          b: 30
        },
        {
          x: 850,
          y: 225.5,
          w: 50,
          h: 164.5,
          r: 30,
          g: 30,
          b: 30
        },
        {
          x: 725,
          y: 25,
          w: 50,
          h: 250,
          r: 30,
          g: 30,
          b: 30
        },
        {
          x: 850,
          y: 225,
          w: 205,
          h: 45,
          r: 30,
          g: 30,
          b: 30
        }
      ];
      platforms = [
        {
          x: 350,
          y: 650,
          w: 50,
          h: 10,
          xMove: 0,
          xMin: 0,
          xMax: 0,
          r: 30,
          g: 30,
          b: 30
        }
      ];
      spikes = [
        {
          x1: 131,
          y1: 683,
          x2: 125,
          y2: 695,
          x3: 137,
          y3: 695,
          xAdder: 12.5,
          num: 34,
          r: 200,
          g: 0,
          b: 0
        },
        {
          x1: 712,
          y1: 683,
          x2: 706,
          y2: 695,
          x3: 718,
          y3: 695,
          xAdder: 12.5,
          num: 28,
          r: 200,
          g: 0,
          b: 0
        }
      ];
      wallJumps = [
        {
          x: 771,
          y: 125,
          w: 5,
          h: 150,
          r: 100,
          g: 0,
          b: 255
        },
        {
          x: 849,
          y: 225,
          w: 5,
          h: 165,
          r: 100,
          g: 0,
          b: 255
        }
      ];
      bouncePads = [
        {
          x: 100,
          y: 100,
          rad: 50,
          angleStart: 1,
          angleEnd: 2 * Math.PI,
          r: 0,
          g: 55,
          b: 55
        }
      ];
      arrow = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        x3: 0,
        y3: 0,
        x4: 0,
        y4: 0,
        x5: 0,
        y5: 0,
        x6: 0,
        y6: 0,
        x7: 0,
        y7: 0,
        r: 0,
        g: 0,
        b: 0
      };
      flag = {
        x1: 100,
        y1: 500,
        x2: 100,
        y2: 525,
        x3: 125,
        y3: 513,
        r1: 0,
        g1: 250,
        b1: 0,
        r2: 0,
        g2: 0,
        b2: 0,
        w: 5 
      };
      spamBoy = {
        x: 25,
        y: 175,
        w: 25,
        h: 25,
        r: 219,
        g: 136,
        b: 155,
        xSpeed: 5,
        xAccel: 0.5,
        xSpeedMax: 10,
        ySpeed: 0,
        yAccel: -0.5,
        jumpSpeed: 10,
        canJump: false,
        wallJumpSpeed: 5,
        onWall: false
      };
    }
  } else if (lvl === 1) {

  } else if (lvl === 2) {

  } else {

  }
}

function reset() {
  state = "start";
  mode = "lvlSelect";
  lvl = 0;
  numLvls = 4;
  selector = {
    x: cnv.width / (numLvls + 1),
    y: 350,
    w: 50,
    h: 50
  };
}