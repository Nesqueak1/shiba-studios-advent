const calendarGrid = document.querySelector("#calendarGrid");
const modal = document.querySelector("#dayModal");
const modalDay = document.querySelector("#modalDay");
const modalTitle = document.querySelector("#modalTitle");
const modalText = document.querySelector("#modalText");

const dayOrder = [1, 14, 3, 22, 5, 18, 7, 10, 19, 2, 11, 24, 13, 6, 15, 8, 17, 4, 21, 20, 9, 12, 23, 16];
const decorations = ["", "⭐", "", "🧦", "", "🎄", "", "🦌", "⭐", "🍭", "", "🎁", "✨", "", "🔴", "", "❄️", "", "⭐", "🎁", "", "🧦", "✨", "⭐"];

const surprises = dayOrder.map((day, index) => {
  return {
    day,
    decor: decorations[index],
    title: `Niespodzianka dnia ${day}`,
    text: `To jest przykładowa treść dla okienka numer ${day}. Później możesz tu wstawić docelowy tekst, link, kod rabatowy albo obraz.`
  };
});

let lastFocusedButton = null;

function createDayButton(item) {
  const button = document.createElement("button");
  button.className = "day-card";
  button.type = "button";
  button.setAttribute("aria-label", `Otwórz okienko ${item.day}`);
  button.dataset.decor = item.decor;
  button.innerHTML = `
    <span class="day-number">${item.day}</span>
    <span class="day-label">Otwórz</span>
  `;
  button.addEventListener("click", () => openModal(item, button));
  return button;
}

function openModal(item, button) {
  lastFocusedButton = button;
  button.classList.add("is-open");
  button.querySelector(".day-label").textContent = "Otwarte";

  modalDay.textContent = item.day;
  modalTitle.textContent = item.title;
  modalText.textContent = item.text;
  modal.classList.add("is-visible");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-close").focus();
}

function closeModal() {
  modal.classList.remove("is-visible");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (lastFocusedButton) {
    lastFocusedButton.focus();
  }
}

surprises.forEach((item) => {
  calendarGrid.appendChild(createDayButton(item));
});

document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-visible")) {
    closeModal();
  }
});
