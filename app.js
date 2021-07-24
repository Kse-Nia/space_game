// Variables

const grid = document.querySelector(".grid");
let currentShooterIndex = 200;
let width = 25;
let direction = 1;
let invaderId;

let aliens = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
];

for (let i = 0; i < 240; i++) {
  const square = document.createElement("div");
  grid.appendChild(square);
}

const square = Array.from(document.querySelectorAll(".grid div"));

function draw() {
  for (let i = 0; i < aliens.length; i++) {
    square[aliens[i]].classList.add("invader");
  }
}

draw();

function remove() {
  for (let i = 0; i < aliens.length; i++) {
    square[aliens[i]].classList.remove("invader");
  }
}

square[currentShooterIndex].classList.add("shooter");

function moveShooter(e) {
  square[currentShooterIndex].classList.remove("shooter");
  switch (e.key) {
    case "ArrowLeft":
      if (currentShooterIndex % width !== 0) currentShooterIndex -= 1;
      break;
    case "ArrowRight":
      if (currentShooterIndex % width < width - 1) currentShooterIndex += 1;
      break;
  }
  square[currentShooterIndex].classList.add("shooter");
}

document.addEventListener("keydown", moveShooter);

function moveAlien() {
  const leftEdge = aliens[0] % width === 0;
  const rightEdge =
  aliens[aliens.length - 1] % width === width - 1;
  remove();

  for (let i = 0; i < aliens.length; i++) {
    aliens[i] += direction;
  }
  draw()
}

invaderId = setInterval(moveAlien, 500)