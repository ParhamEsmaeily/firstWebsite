document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true
    });

    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            let target = this.getAttribute('href');

            if (target === '#home' || target === '#hero') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                document.querySelector(target).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
