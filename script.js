// Tungi rejimni yoqish va o'chirish funksiyasi
document.getElementById('toggleButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
  });
  