const canvasSize = 400;
const gridSize = 9; // the number of rows and columns
const cellSize = canvasSize / gridSize;

let step = Editor.slider(1, 4, 1);

function setup() {
  createCanvas(canvasSize, canvasSize);
  frameRate(10);
}

function draw() {
  background("white");
  if (step === 1) {             // "Step 1"
    drawStripes();
  } else if (step === 2) {      // "Step 2a"
    drawChecks();
  } else if (step === 3) {      // "Step 2b"
    drawDiagonals();
  } else if (step === 4) {      // "Step 3"
    drawDiagonalsOfCircles();
  }
}

////////////////////////////////////////////////////////////
// Step 1

function drawStripes() {
  for (let row = 0; row < gridSize; row++) {

    // TODO: determine these four properties
    const rowWidth = width;
    const rowHeight = height/8;
    const x = 0;
    const y = row * rowHeight;

    // TODO: replace true
    if (row % 2 === 0) {
      fill("black");
    } else {
      fill("white");
    }

    rect(x, y, width, height);
  }
}

////////////////////////////////////////////////////////////
// Step 2a

function drawChecks() {
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {

      // TODO: determine these four properties
      const squareWidth = cellSize;
      const squareHeight = cellSize;
      const x = col * squareWidth;
      const y = row * squareHeight;

      // TODO: replace true
      if ((row + col) % 2 === 0) {
        fill("black");
      } else {
        fill("white");
      }

      rect(x, y, width, height);

    }
  }
}

////////////////////////////////////////////////////////////
// Step 2b

function drawDiagonals() {
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      noStroke();
      
      const x = col * cellSize;
      const y = row * cellSize;
      // TODO: replace true with conditions that
      // identify whether the square at (row, col)
      // is on the main- or anti-diagonal

      let onMainDiagonal = (row === col);
      let onAntiDiagonal = (row + col === 8);
      
      if (onMainDiagonal || onAntiDiagonal) {

        fill("black");

      }
      else {
        fill("white");
      }
      square(x, y, cellSize);
    }
  }
}

////////////////////////////////////////////////////////////
// Step 3

function drawDiagonalsOfCircles() {

  const numRings = 7;

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {

      let onMainDiagonal = (row === col);
      let onAntiDiagonal = (row + col === 8);
      
      if (onMainDiagonal || onAntiDiagonal) {

        for (let ring = 0; ring < numRings; ring++) {

          // TODO: determine these three properties
          const x = row * cellSize + (cellSize / 2);
          const y = col * cellSize + (cellSize / 2);
          const diameter = (cellSize / 7) * (7 - ring);

          // TODO: replace true
          if (ring % 2 === 0) {
            fill("black");
          } else {
            fill("white");
          }

          circle(x, y, diameter);
        }
      }
    }
  }
}
