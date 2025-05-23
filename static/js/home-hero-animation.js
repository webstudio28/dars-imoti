document.addEventListener('DOMContentLoaded', () => {

    if (typeof gsap === 'undefined') {
        console.error('GSAP not loaded. Please include GSAP in your <head>.');
        return;
    }

    const mm = gsap.matchMedia();

    mm.add("(min-width: 0px)", () => {
        const heroHeading = document.querySelector('#hero-copy h1');
        const heroParagraph = document.querySelector('#hero-copy p');
        const heroContactsBtn = document.querySelector('#hero-contacts');
        const heroPropertiesBtn = document.querySelector('#hero-properties');
        const heroImg = document.querySelector('#hero-img-ct img');
        const yellowDec = document.querySelector('#yellow-dec');
        const grayDec = document.querySelector('#gray-dec');

        if (heroHeading) {
            gsap.from(heroHeading, {
                opacity: 0,
                y: -30,
                duration: 0.8,
                delay: 0.2,
                ease: 'power2.out'
            });
        }

        if (heroParagraph) {
            gsap.from(heroParagraph, {
                opacity: 0,
                y: -20,
                duration: 0.8,
                delay: 0.4,
                ease: 'power2.out'
            });
        }

        if (heroContactsBtn) {
            gsap.from(heroContactsBtn, {
                opacity: 0,
                x: -30,
                duration: 0.8,
                delay: 0.6,
                ease: 'power2.out'
            });
        }

        if (heroPropertiesBtn) {
            gsap.from(heroPropertiesBtn, {
                opacity: 0,
                x: 30,
                duration: 0.8,
                delay: 0.6,
                ease: 'power2.out'
            });
        }

        if (heroImg) {
            gsap.from(heroImg, {
                opacity: 0,
                scale: 0.5,
                duration: 1.5,
                delay: 0.5,
                ease: 'power2.out',
            });
        }

        if (yellowDec) {
            gsap.from(yellowDec, {
                opacity: 0,
                x: -50,
                duration: 1,
                delay: 0.3,
                ease: 'power2.out'
            });
        }

        if (grayDec) {
            gsap.from(grayDec, {
                opacity: 0,
                x: 50,
                duration: 1,
                delay: 0.3,
                ease: 'power2.out'
            });
        }
    });
});