// Fitur Dark Mode
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Fitur Form Contact
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Terima kasih! Pesan Anda telah terkirim.");
    contactForm.reset();
});