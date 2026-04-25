import "./styles.css";
import { setLanguage } from "./i18n.js";
import { initNav } from "./nav.js";

window.setLanguage = setLanguage;

initNav("index.html");
