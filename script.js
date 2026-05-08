// === PAGE SETUP & NAVIGATION ===
window.addEventListener("DOMContentLoaded", function () {
    
    // 1. LOCK SCROLLING while preloader is active
    document.body.style.overflow = 'hidden';

    // 2. INJECT UI ELEMENTS (Only Preloader and Back-to-Top)
    const uiContainer = document.createElement('div');
    uiContainer.innerHTML = `
        <div id="preloader"><div class="loader"></div></div>
        <div class="back-to-top" title="Back to Top">&#8679;</div>
    `;
    
    while (uiContainer.firstChild) {
        document.body.appendChild(uiContainer.firstChild);
    }

    // 3. THE FIX: Remove Preloader and UNLOCK SCROLLING
    window.addEventListener("load", function() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
                // THIS IS THE SCROLL UNLOCK
                document.body.style.overflow = 'visible';
                document.documentElement.style.overflow = 'visible';
            }, 600);
        }
    });
});

// --- Back to Top Logic ---
window.addEventListener('scroll', () => {
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    }
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('back-to-top')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});
