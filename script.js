// script.js

// Selección de elementos
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.close');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentIndex = 0;

// Abrir modal al hacer clic en una imagen
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = item.src;
        currentIndex = index;
    });
});

// Cerrar modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Navegación en el modal
const showImage = (index) => {
    if (index >= galleryItems.length) {
        currentIndex = 0; // Reiniciar al principio
    } else if (index < 0) {
        currentIndex = galleryItems.length - 1; // Ir al final
    } else {
        currentIndex = index;
    }
    modalImage.src = galleryItems[currentIndex].src;
};

prev.addEventListener('click', () => showImage(currentIndex - 1));
next.addEventListener('click', () => showImage(currentIndex + 1));

// Cerrar modal al hacer clic fuera de la imagen
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
