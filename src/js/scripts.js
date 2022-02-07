// Section Offsets --- NOTE: Gets offsets every time page is reloaded, meaning they will be inaccurate if page is resized and not reloaded
const homeOffset = document.getElementById('home').offsetTop - 200,
    aboutOffset = document.getElementById('about').offsetTop - 200,
    portfolioOffset = document.getElementById('portfolio').offsetTop - 200,
    developmentOffset = document.getElementById('development-content').offsetTop,
    compositionOffset = document.getElementById('composition-content').offsetTop,
    contactOffset = document.getElementById('contact').offsetTop - 500;

// Grabbing elements
const navLinks = document.querySelectorAll('.nav-link');
const devElement = document.getElementById('development-title');
const compElement = document.getElementById('composition-title');

window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset;
        // Navbar fix to top
        if (scrollTop >= aboutOffset + 150) {
            document.getElementById('home-nav').classList.add('navbar-fixed');
        } else {
            document.getElementById('home-nav').classList.remove('navbar-fixed');
        }

        // Navbar menu item highlight
        if (window.innerWidth > 991) {
            navLinks[0].classList.add('nav-active'); // Home is highlighted by default

            if (scrollTop >= homeOffset && scrollTop < aboutOffset) {
                navLinks[0].classList.add('nav-active');
            } else {
                navLinks[0].classList.remove('nav-active');
            }
            if (scrollTop >= aboutOffset && scrollTop < portfolioOffset) {
                navLinks[1].classList.add('nav-active');
            } else {
                navLinks[1].classList.remove('nav-active');
            }
            if (scrollTop >= portfolioOffset && scrollTop < contactOffset) {
                navLinks[2].classList.add('nav-active');
            } else {
                navLinks[2].classList.remove('nav-active');
            }
            if (scrollTop >= contactOffset) {
                navLinks[3].classList.add('nav-active');
            } else {
                navLinks[3].classList.remove('nav-active');
            }
            // TODO: Add Blog Link
        }

        // Stick Portfolio Titles to Top
        if (window.innerWidth > 991) {
            // Development Section
            if (scrollTop >= developmentOffset) {
                devElement.style.position = 'fixed';
                devElement.style.top = '0';
            } else {
                devElement.style.position = 'absolute';
                devElement.style.top = 'initial';
            }
            // Composition Section
            if (scrollTop >= compositionOffset) {
                compElement.style.position = 'fixed';
                compElement.style.top = '0';
            } else {
                compElement.style.position = 'absolute';
                compElement.style.top = 'initial';
            }
        } else {
            devElement.style.position = 'relative';
            compElement.style.position = 'relative';
        }
})

// Burger Menu Toggle
const open = document.getElementById('burger-menu');
const close = document.querySelector('.close-btn');
const overlay = document.querySelector('.link-wrap');
const links = document.querySelectorAll('.link');
open.addEventListener('click', () => {
    overlay.style.transform = 'translateY(0%)';
    close.style.display = 'block' });
close.addEventListener('click', () => { overlay.style.transform = 'translateY(-100%)' });
if (window.innerWidth <= 768) { 
    links.forEach(link => link.addEventListener('click', () => { overlay.style.transform = 'translateY(-100%)'}))
};
    