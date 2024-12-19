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
        window.removeEventListener('scroll', handleInteraction);
        window.removeEventListener('click', handleInteraction);
    }

    function handleInteraction() {
        setTimeout(playMusic, 2000);
        // Clear the timeout to prevent double play
        clearTimeout(autoPlayTimeout);
    }

    // Add event listeners for scroll and click
    window.addEventListener('scroll', handleInteraction);
    window.addEventListener('click', handleInteraction);

    // Auto-play music after 10 seconds if no interaction
    const autoPlayTimeout = setTimeout(playMusic, 10000);
});