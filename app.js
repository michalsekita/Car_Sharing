
const header = document.querySelector(".header");

header.classList.toggle("is-sticky", window.scrollY > 100);
window.onscroll = () => {
    header.classList.toggle("is-sticky", window.scrollY > 100);
}