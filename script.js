// Mengambil elemen tombol dari HTML (kita buat ID 'theme-toggle' nanti)
const toggleButton = document.getElementById('theme-toggle');

// Menambahkan event listener untuk klik
toggleButton.addEventListener('click', () => {
    // Mengganti (toggle) class 'dark-mode' pada body
    document.body.classList.toggle('dark-mode');
});