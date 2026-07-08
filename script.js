// Mengambil elemen tombol dari HTML (kita buat ID 'theme-toggle' nanti)
const toggleButton = document.getElementById('theme-toggle');

// Menambahkan event listener untuk klik
toggleButton.addEventListener('click', () => {
    // Mengganti (toggle) class 'dark-mode' pada body
    document.body.classList.toggle('dark-mode');
});

// Mengambil form berdasarkan tag form
const contactForm = document.querySelector('form');

// Menambahkan event listener saat tombol submit ditekan
contactForm.addEventListener('submit', function(event) {
    // Mencegah halaman reload (default behavior browser)
    event.preventDefault();

    // Menampilkan alert sebagai bukti logika berjalan
    alert("Terima kasih! Pesan Anda telah terkirim (fitur simulasi).");
    
    // Opsional: Mengosongkan form setelah dikirim
    contactForm.reset();
});