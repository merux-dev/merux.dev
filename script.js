// Initialiseer Animate On Scroll (AOS) bibliotheek
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        // offset: 120, // verschuift het trigger point
        // delay: 0, 
        // easing: 'ease', // default easing
        once: false, // of animatie maar 1x mag gebeuren (false = elke keer bij scrollen)
        mirror: true // elementen animeren ook als je weer omhoog scrollt
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialiseer AOS
    AOS.init({
        once: false,
        mirror: true
    });

    // === Hamburger Menu functionaliteit ===
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            // Voegt de .active class toe (of haalt hem weg)
            navLinks.classList.toggle('active');
            
            // Simpele animatie voor het hamburger icoon (optioneel, ziet er cool uit)
            mobileMenu.classList.toggle('is-active');
        });

        // Sluit het menu automatisch als je op een link klikt
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
});