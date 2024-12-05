document.addEventListener('DOMContentLoaded', () => {
    function initCarousel(carouselId) {
        const carousel = document.getElementById(carouselId);
        const images = carousel.querySelectorAll('.carousel-images img');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');
        let currentIndex = 0;

        function showImage(index) {
            const carouselImages = carousel.querySelector('.carousel-images');
            const imageWidth = images[0].clientWidth;
            carouselImages.style.transform = `translateX(${-index * imageWidth}px)`;
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            showImage(currentIndex);
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            showImage(currentIndex);
        });

        // Auto-play functionality
        setInterval(() => {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            showImage(currentIndex);
        }, 3000);
    }

    initCarousel('carousel1');
    initCarousel('carousel2');
});