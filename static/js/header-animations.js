document.addEventListener('DOMContentLoaded', () => {
    console.log("Animation script loaded at DOMContentLoaded");

    // Ensure GSAP is available
    if (typeof gsap === 'undefined') {
        console.error('GSAP not loaded. Verify the GSAP script in <head>.');
        return;
    }
    console.log("GSAP loaded successfully");

    // Use GSAP matchMedia to handle responsive cases
    const mm = gsap.matchMedia();

    // Animations for all screen sizes where elements are visible
    mm.add("(min-width: 0px)", () => {
        // Header Logo
        const logo = document.querySelector('#header-logo img');
        if (logo) {
            console.log("Animating header-logo img");
            gsap.from(logo, {
                opacity: 0,
                x: -50, // Slide from left
                duration: 0.8,
                delay: 0.3,
                ease: 'power2.out'
            });
        } else {
            console.warn("header-logo img not found");
        }

        // Navigation Items
        const navItems = document.querySelectorAll('#header-nav li');
        if (navItems.length) {
            console.log(`Animating header-nav li, ${navItems.length} items found`);
            gsap.from(navItems, {
                opacity: 0,
                x: -30, // Slide from left
                duration: 0.8,
                stagger: 0.1,
                delay: 0.5,
                ease: 'power2.out'
            });
        } else {
            console.warn("header-nav li not found");
        }

        // Contact Links
        const contactLinks = document.querySelectorAll('#header-contacts a');
        if (contactLinks.length) {
            console.log(`Animating header-contacts a, ${contactLinks.length} items found`);
            gsap.from(contactLinks, {
                opacity: 0,
                x: 30, // Slide from right
                duration: 0.8,
                stagger: 0.1,
                delay: 0.6,
                ease: 'power2.out'
            });
        } else {
            console.warn("header-contacts a not found");
        }

        // Social Icons
        const socialLinks = document.querySelectorAll('#header-socials a');
        if (socialLinks.length) {
            console.log(`Animating header-socials a, ${socialLinks.length} items found`);
            gsap.from(socialLinks, {
                opacity: 0,
                x: -330, // Slide from left
                duration: 0.8,
                delay: 0.6,
                ease: 'power2.out'
            });
        } else {
            console.warn("header-socials a not found");
        }

    });
});