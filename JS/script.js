var swiper = new Swiper(".swiper", {

    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true
    },
    breakpoints: {
        // when window width is >= 320px
        640: {
            slidesPerView: 1,
            spaceBetween: 18
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2,
            spaceBetween: 18
        },
        // when window width is >= 640px
        1188: {
            slidesPerView: 5,
            spaceBetween: 25
        }
    }

});


// document.addEventListener("DOMContentLoaded", function () {
//     const menuContainer = document.getElementById("btn-nav")
//     const submenu = document.getElementById("drop")

//     menuContainer.addEventListener("mouseenter", function () {
//         submenu.style.display = "flex";
//     })

//     menuContainer.addEventListener("mouseleave", function () {
//         submenu.style.display = "none"
//     })
// })

