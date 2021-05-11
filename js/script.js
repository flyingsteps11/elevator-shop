$(document).ready(function () {
    const owl = $("#popular-products").owlCarousel({
        dots: true,
        nav: false,
        items: 3,
        margin: 20,
        responsive: {
            0: {
                items: 2,
                autoWidth: true,
            },
            870: {
                items: 3,
            }
        }
    });

    const owl1 = $("#reviews-carousel").owlCarousel({
        dots: true,
        nav: false,
        margin: 64,
        responsive: {
            0: {
                items: 1,
            },
            800: {
                items: 2,
                autoWidth: true,

            },
            1209: {
                items: 3,
            }
        }
    });
});
document.addEventListener('scroll', () => {
    if (scrollY > 75) {
        const border = document.querySelector('header .border');
        const header = document.querySelector('header');
        border.style.display = "none";
        header.style.paddingBottom = "25px";
        header.style.paddingTop = "25px";
    }
    if (scrollY < 75) {
        const border = document.querySelector('header .border');
        const header = document.querySelector('header');
        border.style.display = "block";
        header.style.paddingBottom = "0";
        header.style.paddingTop = "58px";
    }
});