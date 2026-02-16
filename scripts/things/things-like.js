const thingsShell = document.querySelector("[data-things-grid]");

if (thingsShell) {
  const cards = Array.from(thingsShell.querySelectorAll(".thing-card"));

  const setOpenCard = (targetCard) => {
    cards.forEach((card) => {
      const toggle = card.querySelector(".thing-media");
      const isTarget = card === targetCard;
      card.classList.toggle("is-open", isTarget);
      if (toggle) toggle.setAttribute("aria-expanded", isTarget ? "true" : "false");
    });
  };

  cards.forEach((card) => {
    const toggle = card.querySelector(".thing-media");
    if (!toggle) return;

    toggle.addEventListener("click", () => {
      const isOpen = card.classList.contains("is-open");
      if (isOpen) {
        card.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        return;
      }
      setOpenCard(card);
    });
  });
}
