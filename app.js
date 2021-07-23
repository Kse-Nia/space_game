// Variables

const grid = document.querySelector(".grid");
const currentShooterIndex = 202;
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
    square[aliens[i]].classList.add('invader');
  }
}

draw();

square[currentShooterIndex].classList.add('shooter');
