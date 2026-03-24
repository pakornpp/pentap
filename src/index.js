import "./styles.css";
import { setLanguage } from "./i18n.js";

// Expose setLanguage globally for the HTML onclick handlers
window.setLanguage = setLanguage;