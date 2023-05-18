const main = () => {
  const hamburgerButton = document.querySelector("#hamburger");
  const navList = document.querySelector(".nav_list");
  const navItems = document.querySelectorAll(".nav_item");
  const mainElement = document.querySelector("main");
  const header = document.querySelector("header");
  const skipLink = document.querySelector(".skip_link");

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 0);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Tab" && navList.classList.contains("open")) {
      const lastNavItem = navItems[navItems.length - 1];
      if (lastNavItem === event.target) {
        navList.classList.remove("open");
        mainElement.classList.remove("blur");
        hamburgerButton.innerHTML = `&#9776;`;
        hamburgerButton.ariaLabel = "Buka menu navigasi";
      }
    }
  });

  hamburgerButton.addEventListener("click", (event) => {
    navList.classList.toggle("open");
    hamburgerButton.innerHTML = navList.classList.contains("open")
      ? "&times"
      : "&#9776";
    hamburgerButton.ariaLabel = navList.classList.contains("open")
      ? "Tutup menu navigasi"
      : "Buka menu navigasi";
    mainElement.classList.toggle("blur");
    event.stopPropagation();
  });

  const closeNavList = () => {
    navList.classList.remove("open");
    mainElement.classList.remove("blur");
    hamburgerButton.innerHTML = "&#9776";
    hamburgerButton.ariaLabel = "Buka menu navigasi";
  };

  navList.addEventListener("click", closeNavList);
  mainElement.addEventListener("click", closeNavList);

  const closeSkipLink = () => {
    skipLink.blur();
  };
  skipLink.addEventListener("click", closeSkipLink);
  skipLink.addEventListener("keydown", (event) => {
    if (event.key === " ") {
      event.preventDefault();
      closeSkipLink();
    }
  });
};

export default main;
