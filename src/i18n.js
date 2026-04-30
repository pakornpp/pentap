const translations = {
  en: () => import('./locales/en.json'),
  th: () => import('./locales/th.json'),
};

const SUPPORTED_LANGS = Object.keys(translations);
const SITE_BASE = 'https://pakornpp.github.io/pentap/';
let current = {};

export async function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = 'th';

  const module = await translations[lang]();
  current = module.default ?? module;

  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);

  applyTranslations();
  updateLangButtons(lang);
  updateHeadForLanguage();
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
  // <title> is in <head>, not in body, so querySelectorAll('[data-i18n]') misses it.
  // Update document.title explicitly.
  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl) document.title = t(titleEl.dataset.i18n);
}

function updateLangButtons(activeLang) {
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.langBtn === activeLang);
  });
}

/** Returns true when the current page is under the /en/ path. */
function isEnPage() {
  return location.pathname.split('/').includes('en');
}

/** Returns the HTML filename of the current page (e.g. "ppr-standard1.html"). */
function getPageFile() {
  const last = location.pathname.split('/').filter(Boolean).pop();
  return (last && last.endsWith('.html')) ? last : 'index.html';
}

/**
 * Updates <link rel="canonical">, <meta property="og:url">, and injects
 * hreflang alternate tags. Called automatically after every setLanguage().
 */
function updateHeadForLanguage() {
  const file   = getPageFile();
  const thUrl  = SITE_BASE + file;
  const enUrl  = SITE_BASE + 'en/' + file;
  const pageUrl = isEnPage() ? enUrl : thUrl;

  // Canonical
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.href = pageUrl;

  // OG URL
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', pageUrl);

  // Hreflang — injected once per page load
  if (!document.querySelector('link[rel="alternate"][hreflang]')) {
    [
      { hreflang: 'th',        href: thUrl },
      { hreflang: 'en',        href: enUrl },
      { hreflang: 'x-default', href: thUrl },
    ].forEach(({ hreflang, href }) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = hreflang;
      link.href = href;
      document.head.appendChild(link);
    });
  }
}

/**
 * Switches the displayed language.
 * For Option-B separate URL paths: navigates to the /en/ or root version
 * of the current page instead of just re-rendering in place.
 * Exposed on window so the nav buttons can call it via onclick.
 */
export function switchToLanguage(lang) {
  const file = getPageFile();
  if (lang === 'en' && !isEnPage()) {
    location.href = SITE_BASE + 'en/' + file;
    return;
  }
  if (lang === 'th' && isEnPage()) {
    location.href = SITE_BASE + file;
    return;
  }
  // Already on the correct URL — just re-apply translations
  setLanguage(lang);
}

// Expose on window for nav onclick handlers (set once here, no need to
// repeat window.setLanguage = setLanguage in every entry file for nav buttons)
window.switchToLanguage = switchToLanguage;

// ── Initial language detection ─────────────────────────────────────────────
// Priority: URL path segment > localStorage preference > Thai default
const urlLang  = isEnPage() ? 'en' : null;
const stored   = localStorage.getItem('lang');
const initial  = urlLang ?? (SUPPORTED_LANGS.includes(stored) ? stored : 'th');

setLanguage(initial);
