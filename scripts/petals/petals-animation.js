const leftLane = document.getElementById("ambientLeft");
const rightLane = document.getElementById("ambientRight");

function populateLane(container, side) {
  if (!container) return;

  const COUNT = 34;

  for (let i = 0; i < COUNT; i += 1) {
    const petal = document.createElement("span");
    const size = 3 + Math.random() * 8;
    const y = -4 + Math.random() * 104;
    const duration = 14 + Math.random() * 14;
    const delay = -Math.random() * duration;
    const sway = -20 + Math.random() * 40;
    const travel = 90 + Math.random() * 140;
    const fall = 140 + Math.random() * 230;
    const opacity = 0.2 + Math.random() * 0.65;
    const stretch = 0.45 + Math.random() * 0.55;
    const blur = Math.random() < 0.2 ? 1.2 + Math.random() * 1.5 : 0.1 + Math.random() * 0.6;

    petal.className = `petal ${side === "left" ? "petal-left" : "petal-right"}`;
    petal.style.setProperty("--size", `${size.toFixed(2)}px`);
    petal.style.setProperty("--y", `${y.toFixed(2)}%`);
    petal.style.setProperty("--duration", `${duration.toFixed(2)}s`);
    petal.style.setProperty("--delay", `${delay.toFixed(2)}s`);
    petal.style.setProperty("--sway", `${sway.toFixed(2)}px`);
    petal.style.setProperty("--travel", `${travel.toFixed(2)}px`);
    petal.style.setProperty("--fall", `${fall.toFixed(2)}px`);
    petal.style.setProperty("--opacity", opacity.toFixed(2));
    petal.style.setProperty("--stretch", stretch.toFixed(2));
    petal.style.setProperty("--blur", `${blur.toFixed(2)}px`);

    container.appendChild(petal);
  }
}

populateLane(leftLane, "left");
populateLane(rightLane, "right");
