// Efek klik animasi log
const buttons = document.querySelectorAll('.link-button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(`Kamu mengklik tombol: ${button.innerText}`);
  });
});

// Dark Mode Toggle
const toggle = document.getElementById('toggle-mode');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// LOADING PAGE
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("main-content").style.display = "block";
});

// RAIN EFFECT
const canvas = document.getElementById("rain-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drops = [];

for (let i = 0; i < 100; i++) {
  drops.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    l: Math.random() * 1.5,
    xs: -4 + Math.random() * 4 + 2,
    ys: Math.random() * 10 + 10,
  });
}

function drawRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let i = 0; i < drops.length; i++) {
    let d = drops[i];
    ctx.moveTo(d.x, d.y);
    ctx.lineTo(d.x + d.l * d.xs, d.y + d.l * d.ys);
  }
  ctx.stroke();
  moveRain();
}

function moveRain() {
  for (let i = 0; i < drops.length; i++) {
    let d = drops[i];
    d.x += d.xs;
    d.y += d.ys;
    if (d.x > canvas.width || d.y > canvas.height) {
      d.x = Math.random() * canvas.width;
      d.y = -20;
    }
  }
}

setInterval(drawRain, 30);

// Resize canvas saat window diubah ukurannya
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
