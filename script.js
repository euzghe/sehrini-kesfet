// HTML elemanlarını seçme
const mapButton = document.getElementById('map-button');
const mapSection = document.getElementById('map-section');

// Butona tıklama olayı ekleme
mapButton.addEventListener('click', function(event) {
    // Sayfanın en üste kaymasını engellemek için
    event.preventDefault();

    // Harita bölümünün görünürlüğünü değiştirme
    if (mapSection.style.display === 'none' || mapSection.style.display === '') {
        mapSection.style.display = 'block'; // Göster
    } else {
        mapSection.style.display = 'none'; // Gizle
    }
});