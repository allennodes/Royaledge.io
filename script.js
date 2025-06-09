document.addEventListener('DOMContentLoaded', () => {
    const headerNavButtons = document.querySelectorAll('.nav-button');
    const heroCTABrowse = document.querySelector('.hero-cta-buttons .primary-button');
    const heroCTASeePerformance = document.querySelector('.hero-cta-buttons .secondary-button');
    const viewFullStatsButtons = document.querySelectorAll('.system-card .button');
    const viewDetailsButtons = document.querySelectorAll('.marketplace-card .button');
    const footerNavLinks = document.querySelectorAll('.footer-nav a');
    const aboutPageCta = document.querySelector('.about-page .cta-about a');

    const sections = {
        'home': document.getElementById('top-performing-systems'), // Home includes top systems, value props, community
        'performance': document.getElementById('top-performing-systems'), // 'See Performance' currently points to top systems
        'systems-marketplace': document.getElementById('systems-marketplace'),
        'about-us': document.getElementById('about-us'),
        'contact-us': document.getElementById('contact-us'),
        // Add more specific system detail pages if needed, e.g.:
        'system-details-nvda': document.getElementById('system-details-nvda'),
        'system-details-aapl': document.getElementById('system-details-aapl'),
        'system-details-googl': document.getElementById('system-details-googl'),
        'system-details-nflx': document.getElementById('system-details-nflx'),
        'system-details-amzn': document.getElementById('system-details-amzn'),
        'system-details-tsla': document.getElementById('system-details-tsla'),
        'system-details-msft': document.getElementById('system-details-msft'),
    };

    // Helper to show a specific section and hide others
    const showSection = (targetId) => {
        // Hide all main sections
        for (const key in sections) {
            if (sections[key]) {
                sections[key].classList.add('hidden');
            }
        }

        // Show the target section
        if (sections[targetId]) {
            sections[targetId].classList.remove('hidden');
        }

        // Special handling for the hero section on the homepage
        const heroSection = document.querySelector('.hero-section');
        if (targetId === 'home' || targetId === 'performance') {
            heroSection.classList.remove('hidden');
            // Ensure other home sections are visible too
            document.querySelector('.value-propositions').classList.remove('hidden');
            document.querySelector('.cta-community').classList.remove('hidden');
            document.querySelector('.contributor-cta').classList.remove('hidden');
        } else {
            heroSection.classList.add('hidden');
            document.querySelector('.value-propositions').classList.add('hidden');
            document.querySelector('.cta-community').classList.add('hidden');
            document.querySelector('.contributor-cta').classList.add('hidden');
        }

        // Scroll to the top of the shown section (or just top of page)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Event listener for header navigation
    headerNavButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1); // Remove '#'
            if (targetId === 'browse-systems' || targetId === 'home') {
                showSection('systems-marketplace'); // "Browse Systems" from header goes to marketplace
            } else if (targetId === 'performance') {
                 showSection('home'); // "See Performance" from header stays on homepage initially
                 document.getElementById('top-performing-systems').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Event listener for Hero CTA buttons
    if (heroCTABrowse) {
        heroCTABrowse.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('systems-marketplace');
        });
    }

    if (heroCTASeePerformance) {
        heroCTASeePerformance.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('home'); // Stays on home, just ensure it's visible
            document.getElementById('top-performing-systems').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Event listeners for "View Full Stats" and "View Details" buttons
    // These will simulate navigation to specific system detail pages
    viewFullStatsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1); // e.g., 'system-details-nvda'
            showSection(targetId);
        });
    });

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    // Event listeners for Footer navigation
    footerNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            if (sections[targetId]) {
                showSection(targetId);
            } else {
                // For privacy policy, terms of service, etc., they'd be separate files or modals
                console.log(`Link to ${targetId} clicked. Implement separate page/modal for this.`);
            }
        });
    });

    // Event listener for About Page CTA
    if (aboutPageCta) {
        aboutPageCta.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            showSection(targetId);
        });
    }


    // Initial page load: show only the home sections
    showSection('home');
});
