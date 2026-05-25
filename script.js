const header = document.querySelector(".site-header");

const setHeaderState = () => {
  if (window.scrollY > 24) {
    header.classList.add("is-scrolled");
  } else {
    header.classList.remove("is-scrolled");
  }
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });
