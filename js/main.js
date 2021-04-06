const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav_links');
const sections = [...document.querySelectorAll("section")];
const getLinkById = (id) => document.querySelector(`a[href='#${id}']`);

// BURGER MENU START
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('menu_burger-open');
        navLinks.classList.add('active');
        document.body.style.overflow = "hidden";
        menuOpen = true;
    } else {
        menuBtn.classList.remove('menu_burger-open');
        navLinks.classList.remove('active');
        document.body.style.overflow = "visible";
        menuOpen = false;
    }
})
// BURGER MENU END
// SCROLL INDICATOR START
const inView = (section) => {
  let top = section.offsetTop;
  let height = section.offsetHeight;

  while (section.offsetParent) {
    section = section.offsetParent;
    top += section.offsetTop;
  }

  return (
    top < window.pageYOffset + window.innerHeight &&
    top + height > window.pageYOffset
  );
};

window.onscroll = () => {
  let next = false;

  sections.forEach((section) => {
    const a = getLinkById(section.id);

    if (inView(section) && !next) {
      a.classList.add("scroll--current");
      next = true;
    } else {
      a.classList.remove("scroll--current");
    }
  });
};
// SCROLL INDICATOR END
