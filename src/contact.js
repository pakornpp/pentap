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

// ── Validation helpers ────────────────────────────────────────────────────────
function showError(input, errorEl, msg) {
	errorEl.textContent = msg;
	errorEl.hidden = false;
	input.classList.add("contact-form-input--invalid");
}

function clearError(input, errorEl) {
	errorEl.hidden = true;
	input.classList.remove("contact-form-input--invalid");
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm() {
	let valid = true;

	const nameInput    = document.getElementById("contact-name");
	const nameError    = document.getElementById("contact-name-error");
	if (!nameInput.value.trim()) {
		showError(nameInput, nameError, t("contact.form.name.required"));
		valid = false;
	} else {
		clearError(nameInput, nameError);
	}

	const emailInput   = document.getElementById("contact-email");
	const emailError   = document.getElementById("contact-email-error");
	if (!emailInput.value.trim()) {
		showError(emailInput, emailError, t("contact.form.email.required"));
		valid = false;
	} else if (!EMAIL_PATTERN.test(emailInput.value.trim())) {
		showError(emailInput, emailError, t("contact.form.email.invalid"));
		valid = false;
	} else {
		clearError(emailInput, emailError);
	}

	const businessInput = document.getElementById("contact-business");
	const businessError = document.getElementById("contact-business-error");
	if (!businessInput.value) {
		showError(businessInput, businessError, t("contact.form.business.required"));
		valid = false;
	} else {
		clearError(businessInput, businessError);
	}

	const messageInput = document.getElementById("contact-message");
	const messageError = document.getElementById("contact-message-error");
	if (!messageInput.value.trim()) {
		showError(messageInput, messageError, t("contact.form.message.required"));
		valid = false;
	} else {
		clearError(messageInput, messageError);
	}

	return valid;
}

if (form) {
	// Live error clearing on input/change
	document.getElementById("contact-name")
		.addEventListener("input", (e) => clearError(e.target, document.getElementById("contact-name-error")));
	document.getElementById("contact-email")
		.addEventListener("input", (e) => {
			const el = e.target;
			const errorEl = document.getElementById("contact-email-error");
			if (!el.value.trim()) {
				clearError(el, errorEl);
			} else if (!EMAIL_PATTERN.test(el.value.trim())) {
				showError(el, errorEl, t("contact.form.email.invalid"));
			} else {
				clearError(el, errorEl);
			}
		});
	document.getElementById("contact-business")
		.addEventListener("change", (e) => clearError(e.target, document.getElementById("contact-business-error")));
	document.getElementById("contact-message")
		.addEventListener("input", (e) => clearError(e.target, document.getElementById("contact-message-error")));

	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		if (!validateForm()) return;

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
