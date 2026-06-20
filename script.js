// script.js – Rogers Phone Interactive Features

// Smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Product click handler – shows availability message
document.querySelectorAll('.products-grid img, .accessory-img').forEach(img => {
    img.addEventListener('click', function() {
        const productName = this.getAttribute('alt') || 'Produit';
        alert(`📱 ${productName} disponible en boutique ! Contactez-nous pour plus d'informations.`);
    });
    img.style.cursor = 'pointer';
});

// Auto-update footer year
const footerYear = document.querySelector('.copyright');
if (footerYear) {
    footerYear.textContent = `© ${new Date().getFullYear()} Rogers Phone — Tous droits réservés`;
}

// Floating buttons appear animation on scroll
const floatingWhatsapp = document.querySelector('.floating-whatsapp');
const floatingCall = document.querySelector('.floating-call');

let lastScroll = 0;
window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
        floatingWhatsapp.style.opacity = '1';
        floatingWhatsapp.style.transform = 'scale(1)';
        floatingCall.style.opacity = '1';
        floatingCall.style.transform = 'scale(1)';
    } else {
        floatingWhatsapp.style.opacity = '0.7';
        floatingWhatsapp.style.transform = 'scale(0.9)';
        floatingCall.style.opacity = '0.7';
        floatingCall.style.transform = 'scale(0.9)';
    }
    lastScroll = currentScroll;
});

// Initialize floating buttons
floatingWhatsapp.style.transition = '0.3s';
floatingCall.style.transition = '0.3s';
floatingWhatsapp.style.opacity = '0.7';
floatingCall.style.opacity = '0.7';
floatingWhatsapp.style.transform = 'scale(0.9)';
floatingCall.style.transform = 'scale(0.9)';

console.log('🚀 Rogers Phone – Premium iPhone Specialist');
