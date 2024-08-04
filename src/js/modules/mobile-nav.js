function mobileNav() {
	const mobileMenu = document.getElementById("mobileOverlay");
	const openBtn = document.getElementById("openMobileMenuBtn");
	const closeBtn = document.getElementById("closeMobileMenuBtn");

	if (openBtn && mobileMenu) {
        openBtn.addEventListener("click", () => {
            mobileMenu.classList.add('mobile-overlay--open');
			mobileMenu.setAttribute('aria-hidden', 'false');
            document.body.classList.add('no-scroll');
        });
    }

    if (closeBtn && mobileMenu) {
        closeBtn.addEventListener("click", () => {
            mobileMenu.classList.remove('mobile-overlay--open');
			mobileMenu.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('no-scroll');
        });
    }
}

export default mobileNav;