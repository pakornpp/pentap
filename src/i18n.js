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
  sessionStorage.setItem('lang', lang);

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
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.dataset.i18nTitle);
  });
}

function updateLangButtons(activeLang) {
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.langBtn === activeLang);
  });
}

// Detect initial language: session preference → 'th' (Thai is the default for every new session)
const sessionLang = sessionStorage.getItem('lang');
const initial = SUPPORTED_LANGS.includes(sessionLang) ? sessionLang : 'th';

setLanguage(initial);
