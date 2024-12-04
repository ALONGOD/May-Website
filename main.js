document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');

    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.filter = 'brightness(1.2)';
        });

        image.addEventListener('mouseout', () => {
            image.style.filter = 'brightness(1)';
        });
    });
});