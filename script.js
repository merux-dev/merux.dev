document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        once: false,
        mirror: true
    });
});

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        once: false,
        mirror: true
    });

    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            mobileMenu.classList.toggle('is-active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
});