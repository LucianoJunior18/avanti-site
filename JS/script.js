let navBar = document.querySelector("#header")

document.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    if (scrollTop > 0) {
        navBar.classList.add("rolar")
    } else {
        navBar.classList.remove("rolar")
    }
})


var swiper = new Swiper(".swiper", {

    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: false,
        clickable: true
    },
    breakpoints: {
        300: {
            slidesPerView: 2,
            spaceBetween: 1
        },

        690: {
            slidesPerView: 3,
            spaceBetween: 1
        },
        // when window width is >= 480px
        915: {
            slidesPerView: 4,
            spaceBetween: 0
        },
        // when window width is >= 640px
        1188: {
            slidesPerView: 5,
            spaceBetween: 1
        }
    }

});

// Primeiro dropdown
const dropHover1 = document.querySelector('.drop-hover:not(:has(.drop-2))'); // seleciona o primeiro
const drop1 = dropHover1?.querySelector('.drop');

// Segundo dropdown
const dropHover2 = document.querySelector('.drop-hover .drop-2')?.closest('.drop-hover');
const drop2 = dropHover2?.querySelector('.drop-2');

let timer1, timer2;

if (dropHover1 && drop1) {
    dropHover1.addEventListener('mouseenter', () => {
        clearTimeout(timer1);
        drop1.style.opacity = '1';
        drop1.style.visibility = 'visible';
        drop1.style.transform = 'translateY(0)';
        dropHover1.classList.add('active'); //
    });

    dropHover1.addEventListener('mouseleave', () => {
        timer1 = setTimeout(() => {
            drop1.style.opacity = '0';
            drop1.style.visibility = 'hidden';
            drop1.style.transform = 'translateY(10px)';
            dropHover1.classList.remove('active');
        }, 200);
    });
}

if (dropHover2 && drop2) {
    dropHover2.addEventListener('mouseenter', () => {
        clearTimeout(timer2);
        drop2.style.opacity = '1';
        drop2.style.visibility = 'visible';
        drop2.style.transform = 'translateY(0)';
        dropHover2.classList.add('active'); // 
    });

    dropHover2.addEventListener('mouseleave', () => {
        timer2 = setTimeout(() => {
            drop2.style.opacity = '0';
            drop2.style.visibility = 'hidden';
            drop2.style.transform = 'translateY(10px)';
            dropHover2.classList.remove('active');
        }, 200);
    });
}



let cartCount = 2;
const botoesComprar = document.querySelectorAll('.btn-comprar');
const badgeCarrinho = document.querySelector('.cart-count');

botoesComprar.forEach(botao => {
    botao.addEventListener('click', () => {
        cartCount++;
        badgeCarrinho.textContent = cartCount;
    });
});

// MENU ACORDION
document.querySelectorAll('.accordion-div').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');
    });
});

// Menu Mobile
let btnMenu = document.getElementById("btn-menu")
let menuMbl = document.getElementById("menu-mobile-div")
let overlay = document.getElementById("overlay-menu")

btnMenu.addEventListener('click', () => {
    menuMbl.classList.add("abrir-menu")
})

menuMbl.addEventListener('click', () => {
    menuMbl.classList.remove("abrir-menu")
})

overlay.addEventListener('click', () => {
    menuMbl.classList.remove("abrir-menu")
})

// botao de buscar 

const searchBtn = document.getElementById("search-button");
const inputField = document.getElementById("search-input");
const alertBox = document.getElementById("custom-alert");
const alertMessage = document.getElementById("alert-message");
const closeBtn = document.getElementById("close-alert");

// Função comum para mostrar o popup
function showAlert() {
    const input = inputField.value.trim();
    if (input) {
        alertMessage.innerHTML = `Você buscou por: <strong>${input}</strong>, esse item não está disponível!`;
        alertBox.classList.add("show");

        document.body.classList.add("no-scroll");

        inputField.value = ""
    }
}

// Evento de clique no botão
searchBtn.addEventListener("click", showAlert);

// Evento de pressionar Enter
inputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        showAlert();
    }
});

// Evento de fechar o popup
closeBtn.addEventListener("click", function () {
    alertBox.classList.remove("show");
    document.body.classList.remove("no-scroll")
});
















