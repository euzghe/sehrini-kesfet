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

// Filtreleme Butonlarını Seçme
const filterButtons = document.querySelectorAll('.filter-button');

// Etkinlik Kartlarını Seçme
const eventCards = document.querySelectorAll('.event-card');

// Her bir butona tıklama olayı ekleme
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Tıklanan butonun data-filter değerini al
        const filterCategory = button.getAttribute('data-filter');

        // Butonların aktiflik durumunu güncelleme
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Etkinlik kartlarını filtreleme
        eventCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            if (filterCategory === 'all' || filterCategory === cardCategory) {
                card.style.display = 'block'; // Kartı göster
            } else {
                card.style.display = 'none'; // Kartı gizle
            }
        });
    });
});
// Arama Çubuğunu Seçme
const searchBar = document.getElementById('search-bar');

// Etkinlik Kartlarını Seçme (Zaten var, tekrar yazmana gerek yok)
// const eventCards = document.querySelectorAll('.event-card');

// Arama çubuğuna yazıldığında çalışacak olay dinleyicisi
searchBar.addEventListener('keyup', (e) => {
    const searchText = e.target.value.toLowerCase();

    eventCards.forEach(card => {
        const cardTitle = card.querySelector('h4').textContent.toLowerCase();
        const cardLocation = card.querySelector('p:nth-of-type(3)').textContent.toLowerCase();

        if (cardTitle.includes(searchText) || cardLocation.includes(searchText)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Modal Elemanlarını Seçme
const modal = document.getElementById('event-modal');
const closeButton = document.querySelector('.close-button');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDate = document.getElementById('modal-date');
const modalTime = document.getElementById('modal-time');
const modalLocation = document.getElementById('modal-location');

// Etkinlik Kartlarına tıklama olayı ekleme
eventCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Eğer tıklama, "Detayları Gör" butonu üzerindeyse
        if (e.target.classList.contains('details-button')) {
            e.preventDefault(); // Varsayılan bağlantı davranışını engelle

            // Tıklanan kartın bilgilerini al
            const imageSrc = card.querySelector('.event-image').src;
            const title = card.querySelector('h4').textContent;
            const date = card.querySelector('p:nth-of-type(1)').textContent;
            const time = card.querySelector('p:nth-of-type(2)').textContent;
            const location = card.querySelector('p:nth-of-type(3)').textContent;

            // Modal içeriğini doldur
            modalImage.src = imageSrc;
            modalTitle.textContent = title;
            modalDate.textContent = date;
            modalTime.textContent = time;
            modalLocation.textContent = location;

            // Modalı göster
            modal.style.display = 'block';
        }
    });
});

// Modalı Kapatma Olayları
// Kapatma butonuna tıklayınca
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Modalın dışında bir yere tıklayınca
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});