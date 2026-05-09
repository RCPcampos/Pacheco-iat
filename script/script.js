const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const floatingWhatsApp = document.querySelector("[data-floating-whatsapp]");

const syncHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
  floatingWhatsApp?.classList.toggle("is-visible", window.scrollY > 240);
};

const closeMenu = () => {
  nav?.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });
window.addEventListener("resize", closeMenu);

menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});
