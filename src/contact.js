import "./styles.css";
import { setLanguage, t } from "./i18n.js";
import { initNav } from "./nav.js";

window.setLanguage = setLanguage;

initNav("index.html");

// ── Contact form ──────────────────────────────────────────────────────────────
// Sign up at formspree.io, create a form targeting pentapresidence@gmail.com,
// then replace YOUR_FORM_ID below with the ID Formspree gives you.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqewvnnl";

const form   = document.getElementById("contact-form");
const status = document.getElementById("contact-form-status");

if (form) {
	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		const submitBtn = form.querySelector('[type="submit"]');
		submitBtn.disabled = true;

		try {
			const res = await fetch(FORMSPREE_ENDPOINT, {
				method:  "POST",
				body:    new FormData(form),
				headers: { Accept: "application/json" },
			});

			if (res.ok) {
				form.reset();
				status.textContent = t("contact.form.success");
				status.className   = "contact-form-status contact-form-status--success";
			} else {
				status.textContent = t("contact.form.error");
				status.className   = "contact-form-status contact-form-status--error";
			}
		} catch {
			status.textContent = t("contact.form.error");
			status.className   = "contact-form-status contact-form-status--error";
		}

		status.hidden      = false;
		submitBtn.disabled = false;
	});
}
