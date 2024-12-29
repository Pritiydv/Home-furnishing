$(document).ready(function() {

    $(window).on('scroll', function() {
        $('section').each(function() {
            var sectionTop = $(this).offset().top - 100; // Adjust for sticky navbar
            var sectionBottom = sectionTop + $(this).outerHeight();
            var scrollPosition = $(window).scrollTop();
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                var sectionId = $(this).attr('id');
                $('ul.nav-tabs li').removeClass('active');
                $('ul.nav-tabs a[href="#' + sectionId + '"]').parent().addClass('active');
            }
        });
    });



    $(window).on('scroll', function() {
        $('section').each(function() {
            var sectionTop = $(this).offset().top - 100; // Adjust for sticky navbar
            var sectionBottom = sectionTop + $(this).outerHeight();
            var scrollPosition = $(window).scrollTop();
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                var sectionId = $(this).attr('id');
                $('ul.nav-tabs li').removeClass('active');
                $('ul.nav-tabs a[href="#' + sectionId + '"]').parent().addClass('active');
            }
        });
    });


    $("#testimonial-carousel").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true,
        dots: false,
        navText: [
            '<i class="fas fa-arrow-left owl-left"></i>', // Left arrow icon
            '<i class="fas fa-arrow-right owl-right"></i>', // Right arrow icon
        ],
        responsive: {
            0: {
                items: 1, // Show 1 item on small screens
            },
            576: {
                items: 1, // Show 2 items on mobile landscape screens
            },
            768: {
                items: 2, // Show 3 items on tablets
            },
            992: {
                items: 3, // Show 4 items on desktops
            },
            1200: {
                items: 3, // Show 5 items on large desktops
            }
        }
    });



    $("#testimonial-slider").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: [
            '<i class="fas fa-arrow-left owl-left"></i>', // Left arrow icon
            '<i class="fas fa-arrow-right owl-right"></i>', // Right arrow icon
        ],
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    /**
     * Scroll top button
     */
    let scrollTop = document.querySelector('.scroll-top');

    function toggleScrollTop() {
        if (scrollTop) {
            window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
    }
    scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);



});