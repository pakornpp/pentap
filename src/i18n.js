const translations = {
  en: () => import('./locales/en.json'),
  th: () => import('./locales/th.json'),
};

const SUPPORTED_LANGS = Object.keys(translations);
let current = {};

export async function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = 'th';

  const module = await translations[lang]();
  current = module.default ?? module;

  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);

  applyTranslations();
  updateLangButtons(lang);
}

export function t(key) {
  return current[key] ?? key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.innerHTML = t(el.dataset.i18n);
  });
}

function updateLangButtons(activeLang) {
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.langBtn === activeLang);
  });
}

// Detect initial language: saved preference → browser language → 'th'
const saved = localStorage.getItem('lang');
const browser = navigator.language?.slice(0, 2);
const initial = SUPPORTED_LANGS.includes(saved)
  ? saved
  : SUPPORTED_LANGS.includes(browser)
    ? browser
    : 'th';

setLanguage(initial);
