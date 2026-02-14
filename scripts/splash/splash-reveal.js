const splashScreen = document.getElementById("splashScreen");
let isRevealed = false;

function revealSite() {
  if (isRevealed) return;
  isRevealed = true;

  if (!splashScreen) {
    document.body.classList.remove("is-loading");
    return;
  }

  splashScreen.classList.add("hide");
  splashScreen.setAttribute("aria-hidden", "true");

  setTimeout(() => {
    document.body.classList.remove("is-loading");
  }, 520);

  setTimeout(() => {
    splashScreen.remove();
  }, 1100);
}

window.addEventListener("load", () => {
  setTimeout(revealSite, 1850);
});

setTimeout(revealSite, 4200);
