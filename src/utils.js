/**
 * Derives the site root URL from the current page location.
 * Works correctly in both local dev (e.g. http://localhost:8080/) and
 * the production site (e.g. https://www.pentapgroup.com/).
 * Strips the page filename and the optional /en/ path segment.
 *
 * @returns {string} Site root URL with a trailing slash.
 */
export function getSiteBase() {
  const { origin, pathname } = location;
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length > 0 && parts[parts.length - 1].endsWith('.html')) {
    parts.pop();
  }
  const enIdx = parts.indexOf('en');
  if (enIdx !== -1) parts.splice(enIdx, 1);
  return origin + (parts.length ? '/' + parts.join('/') + '/' : '/');
}
