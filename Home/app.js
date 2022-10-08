const menu = document.querySelector(".menu");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
menu.addEventListener("click", () => {
    setTimeout(() => {
        line1.classList.toggle("line1-active");
        line2.classList.toggle("line2-active");
        line3.classList.toggle("line3-active");
    }, 500)
    menu.classList.toggle("menu-active");

})