
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const nav = document.querySelector(".nav__logo")
const body = document.body
hamburger.addEventListener("click", () => {
    nav.scrollIntoView()
    if (!body.style.overflow) {
        body.style.overflow = "hidden"
    } else {
        body.style.overflow == "hidden" ? body.style.overflow = "auto" : body.style.overflow = "hidden"
    }

    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});
