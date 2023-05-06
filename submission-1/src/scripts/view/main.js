const main = () => {
  const hamburgerButtonElement = document.querySelector("#hamburger");
  const navListElement = document.querySelector(".nav_list");
  const mainElement = document.querySelector("main");
  const headerElement = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      headerElement.classList.add("scrolled");
    } else {
      headerElement.classList.remove("scrolled");
    }
  });

  hamburgerButtonElement.addEventListener("click", (event) => {
    navListElement.classList.toggle("open");
    if (navListElement.classList.contains("open")) {
      hamburgerButtonElement.innerHTML = `&times;`;
      hamburgerButtonElement.ariaLabel = "Tutup menu navigasi";
    } else {
      hamburgerButtonElement.innerHTML = `&#9776;`;
      hamburgerButtonElement.ariaLabel = "Buka menu navigasi";
    }

    mainElement.classList.toggle("blur");
    event.stopPropagation();
  });

  mainElement.addEventListener("click", () => {
    navListElement.classList.remove("open");
    mainElement.classList.remove("blur");
  });
};

export default main;
