document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');
    const backgroundMusic = document.getElementById('background-music');

    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.filter = 'brightness(1.2)';
        });

        image.addEventListener('mouseout', () => {
            image.style.filter = 'brightness(1)';
        });
    });

    function playMusic() {
        backgroundMusic.play().catch(error => {
            console.log('Autoplay was prevented:', error);
        });
        // Remove event listeners after the music starts playing
        window.removeEventListener('scroll', playMusic);
        window.removeEventListener('click', playMusic);
    }

    // Add event listeners for scroll and click
    window.addEventListener('scroll', playMusic);
    window.addEventListener('click', playMusic);
});