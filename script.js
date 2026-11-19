// Everleaf Reading Co. — official Gumroad checkout
const GUMROAD_CHECKOUT_URL = "https://bloomoraa.gumroad.com/l/thoughtful-book-club-kit";
const button = document.getElementById("buyButton");

if (button) {
  button.href = GUMROAD_CHECKOUT_URL;
  button.target = "_blank";
  button.rel = "noopener noreferrer";
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();


// Interactive 3D book: pointer tilt, touch drag, and gentle idle motion.
(() => {
  const stage = document.getElementById("bookStage");
  const book = document.getElementById("book3d");
  if (!stage || !book) return;
  let rx = -4, ry = -24, dragging = false, lastX = 0, lastY = 0;
  const render = () => { book.style.setProperty("--rx", rx + "deg"); book.style.setProperty("--ry", ry + "deg"); };
  const point = (x, y) => {
    const r = stage.getBoundingClientRect();
    const nx = (x - r.left) / r.width - .5;
    const ny = (y - r.top) / r.height - .5;
    if (!dragging) { ry = -24 + nx * 24; rx = -4 - ny * 15; }
    render();
  };
  stage.addEventListener("pointermove", e => { if (!dragging) point(e.clientX, e.clientY); });
  stage.addEventListener("pointerdown", e => { dragging = true; lastX=e.clientX; lastY=e.clientY; stage.setPointerCapture(e.pointerId); });
  stage.addEventListener("pointerup", () => { dragging=false; });
  stage.addEventListener("pointercancel", () => { dragging=false; });
  stage.addEventListener("pointermove", e => {
    if (!dragging) return;
    ry += (e.clientX-lastX)*.55; rx -= (e.clientY-lastY)*.4;
    rx=Math.max(-32,Math.min(24,rx)); lastX=e.clientX; lastY=e.clientY; render();
  });
  stage.addEventListener("pointerleave", () => { if (!dragging) { rx=-4; ry=-24; render(); } });
  book.addEventListener("keydown", e => {
    if(e.key==="ArrowLeft") ry-=8;
    else if(e.key==="ArrowRight") ry+=8;
    else if(e.key==="ArrowUp") rx-=6;
    else if(e.key==="ArrowDown") rx+=6;
    else return;
    e.preventDefault(); render();
  });
})();
