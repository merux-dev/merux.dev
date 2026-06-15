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