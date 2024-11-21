document.addEventListener('DOMContentLoaded', () => {
    // Create hamburger menu
    const nav = document.querySelector('nav');
    const hamburgerHTML = `
        <button class="hamburger" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    `;
    nav.insertAdjacentHTML('afterbegin', hamburgerHTML);

    // Get elements
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Toggle menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Add touch swipe to close/open menu
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        const swipeThreshold = 100;
        const diff = touchEndX - touchStartX;

        if (Math.abs(diff) < swipeThreshold) return;

        if (diff > 0 && !navLinks.classList.contains('active')) {
            // Swipe right - open menu
            hamburger.classList.add('active');
            navLinks.classList.add('active');
        } else if (diff < 0 && navLinks.classList.contains('active')) {
            // Swipe left - close menu
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    }

    // Add rainbow effect to hamburger
    function updateHamburgerColors() {
        const spans = hamburger.querySelectorAll('span');
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00'];
        spans.forEach((span, index) => {
            span.style.background = colors[index % colors.length];
        });
    }

    setInterval(updateHamburgerColors, 1000);
});
