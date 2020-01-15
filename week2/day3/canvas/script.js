const $canvas = document.querySelector("canvas");
const ctx = $canvas.getContext("2d");
const $button = document.querySelector("button");

// ctx.fillStyle = "orange";
// ctx.fillRect(320, 100, 50, 50);

// ctx.strokeStyle = "green";
// ctx.lineWidth = 3;
// ctx.strokeRect(140, 200, 60, 100);

// ctx.beginPath();
// // starting position is x=50, y=50
// ctx.moveTo(50, 50);
// // draw the line that has final coordinates x=250, y=50
// ctx.lineTo(250, 50);

// // .stroke() executes the drawing
// // ctx.stroke();

// // start a new line from these coordinates: x=250, y=50
// // ctx.moveTo(250, 50);
// // draw the line that has final coordinates x=250, y=100
// ctx.lineTo(250, 100);
// ctx.lineTo(300, 100);
// // .stroke() executes the drawing
// ctx.lineWidth = 10;
// ctx.lineJoin = "round";
// ctx.lineCap = "round";
// ctx.stroke();
// // ctx.fill();

// // close the path
// ctx.closePath();
// ctx.fillStyle = "yellow";
// ctx.beginPath();
// ctx.arc(100, 130, 50, 0.5, Math.PI * 1.8);
// ctx.lineTo(100, 130);
// ctx.fill();
// ctx.closePath();

// ctx.fillStyle = "black";
// ctx.lineWidth = 1;
// ctx.font = "30px sans-serif";
// ctx.fillText("Hola Ironhackers", 200, 30, 200);
let x = 0;
function draw() {
  if (x === $canvas.width - 150) x = 0;
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
  // ctx.fillRect(x, 0, 100, 100);
  const image = new Image();
  image.src =
    "https://i.kym-cdn.com/photos/images/original/001/658/599/39b.png";
  ctx.drawImage(image, x, 0, 150, 150);
  x++;
}

$button.onclick = () => {
  setInterval(draw, 10);
};
