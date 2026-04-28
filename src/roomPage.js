import iconsUrl from "./assets/icons/icons.svg";
import { buildPreviewGallery, buildPopupGallery } from "./gallery.js";

export const PPR_MAP_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.720868910684!2d104.8334274!3d15.283010599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3116632edac857a7%3A0x22b27ddbd01b19f0!2zUGVudGEgUCBSZXNpZGVuY2Ug4LmA4Lie4LiZ4LiV4LmJ4Liy4Lie4Li1IOC5gOC4o-C4quC4quC4tOC5gOC4lOC5ieC4meC4i-C5jA!5e0!3m2!1sen!2sth!4v1777188767775!5m2!1sen!2sth";
export const PPA_MAP_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.926744049572!2d104.82766521216315!3d15.271790285236731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3116881a5ba3b0af%3A0x14b6c7caec44bb72!2zUGVudGEgUCBBcGFydG1lbnQg4LmA4Lie4LiZ4LiV4LmJ4LiyIOC4nuC4tSDguK3guJ7guLLguKPguYzguJfguYDguKHguYnguJnguJfguYw!5e0!3m2!1sen!2sth!4v1777189215838!5m2!1sen!2sth";
export const PPH_MAP_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.364784902464!2d104.83830821216284!3d15.247889985257618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311689b556e8712f%3A0x8ed1c32f9dfa3044!2zUGVudGEgUCBIdWFpIE11YW5nIOC5gOC4nuC4meC4leC5ieC4siDguJ7guLUg4Lir4LmJ4Lin4Lii4Lih4LmI4Lin4LiH!5e0!3m2!1sen!2sth!4v1777189319101!5m2!1sen!2sth";

/**
 * Maps an icon name + count to the correct amenity i18n key.
 * @param {string} icon - e.g. "icon-bed"
 * @param {number} count
 * @returns {string} i18n key
 */
function amenityLabelKey(icon, count) {
	const map = {
		"icon-bed":         count === 1 ? "amenity.bedroom"  : "amenity.bedrooms",
		"icon-bath":        count === 1 ? "amenity.bathroom" : "amenity.bathrooms",
		"icon-levels":      count === 1 ? "amenity.level"    : "amenity.levels",
		"icon-living-room": "amenity.livingRoom",
	};
	return map[icon] ?? icon;
}

/**
 * Renders a full room detail page into the <main> element from a config object.
 *
 * @param {object} config
 * @param {string}   config.titleKey       - i18n key for the room name (e.g. "room.standard1.title")
 * @param {string}   config.locationKey    - i18n key for the location subtitle (e.g. "room.ppr.location")
 * @param {{ icon: string, count: number }[]} config.amenities
 *   - icon: SVG symbol id (e.g. "icon-bed"), count: integer
 * @param {{ src: string, alt: string }} config.heroImage
 * @param {string}   config.price          - Display price string (e.g. "฿9,000")
 * @param {string[]} config.descriptionKeys - i18n keys for each description paragraph
 * @param {{ src: string, alt: string, wide?: boolean }[]} config.gallery
 *   - wide: adds the "room-gallery-item--wide" modifier class
 * @param {{ src: string, alt: string } | { src: string, alt: string }[]} config.floorPlan
 *   - Pass a single object or an array for multiple floor plan images
 */
export function renderRoomPage(config) {
	const main = document.querySelector("main");
	if (!main) return;

	// Combine hero image (treated as wide) with the rest of the gallery
	const allImages = [{ ...config.heroImage, wide: true }, ...config.gallery];

	const amenitiesHtml = config.amenities
		.map(({ icon, count }) => {
			const labelKey = amenityLabelKey(icon, count);
			return `
				<span class="amenity">
					<svg aria-hidden="true"><use href="${iconsUrl}#${icon}"></use></svg>
					${count > 0 ? `${count} ` : ''}<span data-i18n="${labelKey}"></span>
				</span>`;
		})
		.join('<span class="room-amenity-divider"></span>');

	const paragraphsHtml = config.descriptionKeys
		.map((key) => `<div class="room-desc-block" data-i18n="${key}"></div>`)
		.join("\n");

	main.innerHTML = `
		<div class="room-detail-wrap">

			<!-- Hero header -->
			<section class="room-hero">
				<h1 class="room-hero-title" data-i18n="${config.titleKey}"></h1>
				<p class="room-hero-sub" data-i18n="${config.locationKey}"></p>
				<div class="room-hero-amenities">
					${amenitiesHtml}
				</div>
				<div class="room-gallery-grid" id="room-preview-gallery">
					${buildPreviewGallery(allImages)}
				</div>
				<button class="warehouse-gallery-expand-btn" id="room-expand-btn">
					<span data-i18n="warehouse.gallery.viewAll.pre"></span> ${allImages.length} <span data-i18n="warehouse.gallery.viewAll.post"></span>
				</button>
			</section>

			<!-- Detail card -->
			<section class="room-info-card">
				<div class="room-info-top">
					<div>
						<p class="room-info-label" data-i18n="room.startingFrom"></p>
						<p class="room-price">${config.price} <span data-i18n="room.perMonth"></span></p>
						${config.priceNote ? `<p class="room-price-note">${config.priceNote}</p>` : ''}
					</div>
				</div>
				<div class="room-description">
					<h2 data-i18n="room.about"></h2>
					${paragraphsHtml}
				</div>
				<a href="contact.html" class="btn btn-primary room-cta" data-i18n="room.cta"></a>
			</section>

			${config.floorPlan ? `
			<!-- Floor plan -->
			<section class="room-floorplan">
				<h2 class="room-gallery-heading" data-i18n="room.floorplan"></h2>
				${(Array.isArray(config.floorPlan) ? config.floorPlan : [config.floorPlan])
					.map(({ src, alt }) => `<div class="room-floorplan-img-wrap"><img src="${src}" alt="${alt}"></div>`)
					.join("\n")}
			</section>` : ''}

			${config.mapUrl ? `
			<!-- Location map -->
			<section class="room-map">
				<h2 class="room-gallery-heading" data-i18n="room.location"></h2>
				<div class="room-map-wrap">
					<iframe
						src="${config.mapUrl}"
						style="border:0;"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						title="Location map"
						data-i18n-title="room.map.title"
					></iframe>
				</div>
			</section>` : ''}

		</div>
	`;

	// ── Gallery popup ──────────────────────────────────────────────────────────
	const galleryPopup = document.createElement("div");
	galleryPopup.id = "gallery-popup";
	galleryPopup.setAttribute("aria-modal", "true");
	galleryPopup.setAttribute("role", "dialog");
	galleryPopup.setAttribute("aria-label", "All photos");
	galleryPopup.innerHTML = `
		<div id="gallery-popup-backdrop"></div>
		<div id="gallery-popup-panel">
			<div id="gallery-popup-header">
				<h3 id="gallery-popup-title">All Photos (${allImages.length})</h3>
				<button id="gallery-popup-close" aria-label="Close">&times;</button>
			</div>
			<div class="room-gallery-grid" id="gallery-popup-grid">
				${buildPopupGallery(allImages)}
			</div>
		</div>
	`;
	document.body.appendChild(galleryPopup);

	function openGalleryPopup() {
		galleryPopup.style.display = "flex";
		document.body.style.overflow = "hidden";
	}

	function closeGalleryPopup() {
		galleryPopup.style.display = "none";
		document.body.style.overflow = "";
	}

	document.querySelector("#room-expand-btn").addEventListener("click", openGalleryPopup);
	document.querySelector("#gallery-popup-close").addEventListener("click", closeGalleryPopup);
	document.querySelector("#gallery-popup-backdrop").addEventListener("click", closeGalleryPopup);

	document.querySelector("#room-preview-gallery").addEventListener("click", (e) => {
		if (e.target.closest(".warehouse-gallery-more-overlay")) {
			openGalleryPopup();
			return;
		}
		const item = e.target.closest("[data-lightbox-index]");
		if (item) openLightbox(Number(item.dataset.lightboxIndex));
	});

	document.querySelector("#gallery-popup-grid").addEventListener("click", (e) => {
		const item = e.target.closest("[data-popup-index]");
		if (item) openLightbox(Number(item.dataset.popupIndex));
	});

	// ── Lightbox ──────────────────────────────────────────────────────────────
	const lightbox = document.createElement("div");
	lightbox.id = "lightbox";
	lightbox.setAttribute("aria-modal", "true");
	lightbox.setAttribute("role", "dialog");
	lightbox.innerHTML = `
		<div id="lightbox-backdrop"></div>
		<button id="lightbox-close" aria-label="Close">&times;</button>
		<button id="lightbox-prev" aria-label="Previous">&#8249;</button>
		<img id="lightbox-img" src="" alt="">
		<button id="lightbox-next" aria-label="Next">&#8250;</button>
	`;

	Object.assign(lightbox.style, {
		display: "none",
		position: "fixed",
		inset: "0",
		zIndex: "9999",
		alignItems: "center",
		justifyContent: "center",
	});

	const backdropStyle = "position:fixed;inset:0;background:rgba(0,0,0,.85);";
	const btnBase = `
		position:fixed;background:rgba(255,255,255,.15);border:none;color:#fff;
		font-size:2.5rem;line-height:1;cursor:pointer;border-radius:50%;
		width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;
		transition:background .15s;z-index:2;`;

	document.body.appendChild(lightbox);

	const backdrop = lightbox.querySelector("#lightbox-backdrop");
	const lbImg    = lightbox.querySelector("#lightbox-img");
	const btnClose = lightbox.querySelector("#lightbox-close");
	const btnPrev  = lightbox.querySelector("#lightbox-prev");
	const btnNext  = lightbox.querySelector("#lightbox-next");

	backdrop.style.cssText = backdropStyle;

	Object.assign(lbImg.style, {
		position: "relative",
		maxWidth: "90vw",
		maxHeight: "85vh",
		borderRadius: "6px",
		boxShadow: "0 8px 40px rgba(0,0,0,.6)",
		display: "block",
		zIndex: "1",
	});

	btnClose.style.cssText = btnBase + "top:1rem;right:1rem;font-size:2rem;";
	btnPrev.style.cssText  = btnBase + "left:1rem;top:50%;transform:translateY(-50%);";
	btnNext.style.cssText  = btnBase + "right:1rem;top:50%;transform:translateY(-50%);";

	let currentIndex = 0;

	function openLightbox(index) {
		currentIndex = index;
		lbImg.src = allImages[currentIndex].src;
		lbImg.alt = allImages[currentIndex].alt;
		btnPrev.style.display = allImages.length > 1 ? "flex" : "none";
		btnNext.style.display = allImages.length > 1 ? "flex" : "none";
		lightbox.style.display = "flex";
		document.body.style.overflow = "hidden";
	}

	function closeLightbox() {
		lightbox.style.display = "none";
		if (galleryPopup.style.display !== "flex") {
			document.body.style.overflow = "";
		}
	}

	function showPrev() {
		currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
		lbImg.src = allImages[currentIndex].src;
		lbImg.alt = allImages[currentIndex].alt;
	}

	function showNext() {
		currentIndex = (currentIndex + 1) % allImages.length;
		lbImg.src = allImages[currentIndex].src;
		lbImg.alt = allImages[currentIndex].alt;
	}

	btnClose.addEventListener("click", closeLightbox);
	backdrop.addEventListener("click", closeLightbox);
	btnPrev.addEventListener("click", showPrev);
	btnNext.addEventListener("click", showNext);

	document.addEventListener("keydown", (e) => {
		if (lightbox.style.display === "flex") {
			if (e.key === "Escape")     closeLightbox();
			if (e.key === "ArrowLeft")  showPrev();
			if (e.key === "ArrowRight") showNext();
			return;
		}
		if (galleryPopup.style.display === "flex" && e.key === "Escape") {
			closeGalleryPopup();
		}
	});
}

