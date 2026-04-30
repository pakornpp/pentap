/**
 * Shared footer module.
 * @param {string} base - Path to the root index (e.g. "" for index, "index.html" for other pages).
 */
export function initFooter(base = "") {
	const footer = document.querySelector("footer");
	if (!footer) return;

	// Derive directory prefix so sibling pages resolve correctly from any depth
	const prefix = base.replace(/[^/]*$/, "");
	const year = new Date().getFullYear();

	footer.innerHTML = `
		<div class="footer-inner">
			<div class="footer-brand">
				<a href="${base}" class="footer-logo-link">
					<span class="footer-logo-name">Penta P Group</span>
				</a>
				<p class="footer-tagline" data-i18n="footer.tagline"></p>
			</div>

			<nav class="footer-sitemap" aria-label="Sitemap">
				<div class="footer-col">
					<h3 class="footer-col-heading" data-i18n="footer.nav.heading"></h3>
					<ul>
						<li><a href="${base}" data-i18n="nav.home"></a></li>
						<li><a href="${prefix}accommodation.html" data-i18n="nav.accommodation"></a></li>
						<li><a href="${prefix}warehouse.html" data-i18n="nav.warehouse"></a></li>
						<li><a href="${prefix}contact.html" data-i18n="nav.contact"></a></li>
					</ul>
				</div>

				<div class="footer-col">
					<h3 class="footer-col-heading" data-i18n="footer.accom.heading"></h3>
					<ul>
						<li><a href="${prefix}accommodation.html#ppr" data-i18n="group.ppr.title"></a></li>
						<li><a href="${prefix}accommodation.html#pph" data-i18n="group.pph.title"></a></li>
						<li><a href="${prefix}accommodation.html#ppa" data-i18n="group.ppa.title"></a></li>
					</ul>
				</div>

				<div class="footer-col">
					<h3 class="footer-col-heading" data-i18n="footer.warehouse.heading"></h3>
					<ul>
						<li><a href="${prefix}warehouse.html#warehouse-1" data-i18n="group.ppw.title"></a></li>
						<li><a href="${prefix}warehouse.html#warehouse-2" data-i18n="group.ppw2.title"></a></li>
					</ul>
				</div>
			</nav>
		</div>
	`;
}
