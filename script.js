document.addEventListener('DOMContentLoaded', () => {
    const headerNavButtons = document.querySelectorAll('.nav-button');
    const heroCTABrowse = document.querySelector('.hero-cta-buttons .primary-button');
    const heroCTASeePerformance = document.querySelector('.hero-cta-buttons .secondary-button');
    const viewFullStatsButtons = document.querySelectorAll('.system-card .button');
    const viewDetailsButtons = document.querySelectorAll('.marketplace-card .button');
    const footerNavLinks = document.querySelectorAll('.footer-nav a');
    const aboutPageCta = document.querySelector('.about-page .cta-about a');

    const sections = {
        'home': document.getElementById('top-performing-systems'),
        'performance': document.getElementById('top-performing-systems'),
        'systems-marketplace': document.getElementById('systems-marketplace'),
        'about-us': document.getElementById('about-us'),
        'contact-us': document.getElementById('contact-us'),
        'system-details-nvda': document.getElementById('system-details-nvda'),
        'system-details-aapl': document.getElementById('system-details-aapl'),
        'system-details-googl': document.getElementById('system-details-googl'),
        'system-details-nflx': document.getElementById('system-details-nflx'),
        'system-details-amzn': document.getElementById('system-details-amzn'),
        'system-details-tsla': document.getElementById('system-details-tsla'),
        'system-details-msft': document.getElementById('system-details-msft'),
    };

    const showSection = (targetId) => {
        for (const key in sections) {
            if (sections[key]) {
                sections[key].classList.add('hidden');
            }
        }

        if (sections[targetId]) {
            sections[targetId].classList.remove('hidden');
        } else {
            console.warn(`Section "${targetId}" not found`);
        }

        const heroSection = document.querySelector('.hero-section');
        const valueProps = document.querySelector('.value-propositions');
        const ctaCommunity = document.querySelector('.cta-community');
        const contributorCta = document.querySelector('.contributor-cta');

        if (targetId === 'home' || targetId === 'performance') {
            heroSection?.classList.remove('hidden');
            valueProps?.classList.remove('hidden');
            ctaCommunity?.classList.remove('hidden');
            contributorCta?.classList.remove('hidden');
        } else {
            heroSection?.classList.add('hidden');
            valueProps?.classList.add('hidden');
            ctaCommunity?.classList.add('hidden');
            contributorCta?.classList.add('hidden');
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    headerNavButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const href = e.target.getAttribute('href');
            if (!href) return;

            const targetId = href.substring(1);
            if (targetId === 'browse-systems' || targetId === 'home') {
                showSection('systems-marketplace');
            } else if (targetId === 'performance') {
                showSection('home');
                sections['home']?.scrollIntoView({ behavior: 'smooth' });
            } else {
                showSection(targetId);
            }
        });
    });

    if (heroCTABrowse) {
        heroCTABrowse.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('systems-marketplace');
        });
    }

    if (heroCTASeePerformance) {
        heroCTASeePerformance.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('home');
            sections['home']?.scrollIntoView({ behavior: 'smooth' });
        });
    }

    viewFullStatsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const href = e.target.getAttribute('href');
            if (!href) return;

            const targetId = href.substring(1);
            showSection(targetId);
        });
    });

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const href = e.target.getAttribute('href');
            if (!href) return;

            const targetId = href.substring(1);
            showSection(targetId);
        });
    });

    footerNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = e.target.getAttribute('href');
            if (!href) return;

            const targetId = href.substring(1);
            if (sections[targetId]) {
                showSection(targetId);
            } else {
                console.log(`Footer link "${targetId}" clicked. Modal or separate page may be needed.`);
            }
        });
    });

    if (aboutPageCta) {
        aboutPageCta.addEventListener('click', (e) => {
            e.preventDefault();
            const href = e.target.getAttribute('href');
            if (!href) return;

            const targetId = href.substring(1);
            showSection(targetId);
        });
    }

    showSection('home');
});
