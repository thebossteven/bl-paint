const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
const clrButton = document.querySelector(".clear");
const blackButton = document.querySelector(".black")
const blueButton = document.querySelector(".blue")
const redButton = document.querySelector(".red")
const yellowButton = document.querySelector(".yellow")
const greenButton = document.querySelector(".green")
ctx.strokeStyle = 'black';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

clrButton.addEventListener("click", () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

blackButton.addEventListener("click", () => {
    ctx.strokeStyle = "black";
})
blueButton.addEventListener("click", () => {
    ctx.strokeStyle = "blue";
})
redButton.addEventListener("click", () => {
    ctx.strokeStyle = "red";
})
yellowButton.addEventListener("click", () => {
    ctx.strokeStyle = "yellow";
})
greenButton.addEventListener("click", () => {
    ctx.strokeStyle = "green";
})



function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
