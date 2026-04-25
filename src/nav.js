import logoUrl from "./assets/pentap_flower.webp";

/**
 * Shared navigation module.
 * @param {string} base - Prefix for nav hrefs (e.g. "" for index, "index.html" for other pages).
 */
export function initNav(base = "") {
	const nav = document.querySelector("nav");
	if (!nav) return;

	// Derive directory prefix so sibling pages resolve correctly from any depth
	const prefix = base.replace(/[^/]*$/, "");

	nav.innerHTML = `
		<a href="${base}" class="logo-container">
			<img src="${logoUrl}" alt="Penta P Logo" class="logo">
			<h1 class="logo-name">Penta P Group</h1>
		</a>
		<div class="nav-menu" id="nav-menu">
			<a href="${base}" data-i18n="nav.home"></a>
			<a href="${prefix}accommodation.html" data-i18n="nav.accommodation"></a>
			<a href="${base}#warehouse-card" data-i18n="nav.warehouse"></a>
			<a href="${prefix}contact.html" data-i18n="nav.contact"></a>
		</div>
		<div class="lang-switcher">
			<button data-lang-btn="en" onclick="window.setLanguage('en')">EN</button>
			<button data-lang-btn="th" onclick="window.setLanguage('th')">ไทย</button>
		</div>
		<button class="mobile-menu-toggle" type="button" aria-expanded="false" aria-controls="nav-menu"
			aria-label="Toggle navigation menu">
			<span></span>
			<span></span>
			<span></span>
		</button>
	`;

	const mobileToggleButton = nav.querySelector(".mobile-menu-toggle");
	const navMenu = nav.querySelector(".nav-menu");
	const mobileBreakpoint = window.matchMedia("(max-width: 720px)");

	function closeMobileMenu() {
		navMenu.classList.remove("open");
		mobileToggleButton.setAttribute("aria-expanded", "false");
	}

	mobileToggleButton.addEventListener("click", () => {
		const isOpen = navMenu.classList.toggle("open");
		mobileToggleButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
	});

	navMenu.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", () => {
			if (mobileBreakpoint.matches) closeMobileMenu();
		});
	});

	mobileBreakpoint.addEventListener("change", (event) => {
		if (!event.matches) closeMobileMenu();
	});
}
