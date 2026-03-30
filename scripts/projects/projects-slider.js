const projectSlider = document.querySelector("[data-project-slider]");
const projectTrack = projectSlider ? projectSlider.querySelector(".projects-track") : null;
const projectCards = projectTrack ? Array.from(projectTrack.querySelectorAll(".project-item")) : [];
const projectDots = projectSlider ? Array.from(projectSlider.querySelectorAll(".project-dot")) : [];
const nextArrow = projectSlider ? projectSlider.querySelector(".project-arrow-right") : null;
const prevArrow = projectSlider ? projectSlider.querySelector(".project-arrow-left") : null;

if (projectSlider && projectTrack && projectCards.length > 0 && projectDots.length === projectCards.length) {
  let activeIndex = 0;
  let autoplayId = null;

  function openProject(index) {
    const url = projectCards[index]?.dataset?.url;
    if (!url) return;
    window.location.href = url;
  }

  function setProject(index) {
    activeIndex = index;

    projectCards.forEach((card) => {
      card.classList.remove("is-active", "is-prev", "is-next");
    });

    projectCards[index].classList.add("is-active");

    if (projectCards.length === 2) {
      const otherIndex = index === 0 ? 1 : 0;
      const sideClass = index === 0 ? "is-next" : "is-prev";
      projectCards[otherIndex].classList.add(sideClass);
    } else {
      const prevIndex = (index - 1 + projectCards.length) % projectCards.length;
      const nextIndex = (index + 1) % projectCards.length;
      projectCards[prevIndex].classList.add("is-prev");
      projectCards[nextIndex].classList.add("is-next");
    }

    projectDots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === index);
    });
  }

  function nextProject() {
    const next = (activeIndex + 1) % projectCards.length;
    setProject(next);
  }

  function prevProject() {
    const prev = (activeIndex - 1 + projectCards.length) % projectCards.length;
    setProject(prev);
  }

  function restartAutoplay() {
    if (autoplayId) clearInterval(autoplayId);
    autoplayId = setInterval(nextProject, 3000);
  }

  projectDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      setProject(index);
      restartAutoplay();
    });
  });

  if (nextArrow) {
    nextArrow.addEventListener("click", () => {
      nextProject();
      restartAutoplay();
    });
  }

  if (prevArrow) {
    prevArrow.addEventListener("click", () => {
      prevProject();
      restartAutoplay();
    });
  }

  projectCards.forEach((card, index) => {
    card.setAttribute("tabindex", "0");

    card.addEventListener("click", () => {
      openProject(index);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openProject(index);
    });
  });

  setProject(0);
  restartAutoplay();
}
