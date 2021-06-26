$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 2,
        loop: true,
        responsive: {
            320: {
                items: 1
            },
            480: {
                items: 1
            },
            769:{
                items: 2
            },
            992: {
                items: 2
            }
        }
    })
});

const topMenu = document.querySelector(".header-list")
const mobileMenu = document .querySelector(".mobile-menu")

mobileMenu.addEventListener("click", () => {
    topMenu.classList.toggle("show-menu")
} )

const Form = document.querySelector(".form")
const topLink = document.querySelector(".top-link")

Form.addEventListener("click", () => {
    Form.classList.add("show-menu")
})