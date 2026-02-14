const leftLane = document.getElementById("ambientLeft");
const rightLane = document.getElementById("ambientRight");

function populateLane(container, side) {
  if (!container) return;

  const COUNT = 20;

  for (let i = 0; i < COUNT; i += 1) {
    const petal = document.createElement("span");
    const size = 12 + Math.random() * 18;
    const y = 4 + Math.random() * 92;
    const duration = 9 + Math.random() * 7;
    const delay = -Math.random() * duration;
    const sway = -28 + Math.random() * 56;
    const travel = 68 + Math.random() * 70;
    const opacity = 0.35 + Math.random() * 0.5;

    petal.className = `petal ${side === "left" ? "petal-left" : "petal-right"}`;
    petal.style.setProperty("--size", `${size.toFixed(2)}px`);
    petal.style.setProperty("--y", `${y.toFixed(2)}%`);
    petal.style.setProperty("--duration", `${duration.toFixed(2)}s`);
    petal.style.setProperty("--delay", `${delay.toFixed(2)}s`);
    petal.style.setProperty("--sway", `${sway.toFixed(2)}px`);
    petal.style.setProperty("--travel", `${travel.toFixed(2)}px`);
    petal.style.setProperty("--opacity", opacity.toFixed(2));

    container.appendChild(petal);
  }
}

populateLane(leftLane, "left");
populateLane(rightLane, "right");
