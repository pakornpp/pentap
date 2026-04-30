import "./styles.css";
import { setLanguage } from "./i18n.js";
import { initNav } from "./nav.js";
import { initFooter } from "./footer.js";

// Expose setLanguage globally for the HTML onclick handlers
window.setLanguage = setLanguage;

initNav("");
initFooter("");