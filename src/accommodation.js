import "./styles.css";
import { setLanguage } from "./i18n.js";

window.setLanguage = setLanguage;

const mobileToggleButton = document.querySelector(".mobile-menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const mobileBreakpoint = window.matchMedia("(max-width: 720px)");

function closeMobileMenu() {
	if (!mobileToggleButton || !navMenu) return;
	navMenu.classList.remove("open");
	mobileToggleButton.setAttribute("aria-expanded", "false");
}

if (mobileToggleButton && navMenu) {
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
