import iconsUrl from "../assets/icons/icons.svg";

/**
 * Maps an icon name + count to the correct amenity i18n key.
 * @param {string} icon - e.g. "icon-bed"
 * @param {number} count
 * @returns {string} i18n key
 */
function amenityLabelKey(icon, count) {
	const map = {
		"icon-bed":    count === 1 ? "amenity.bedroom"  : "amenity.bedrooms",
		"icon-bath":   count === 1 ? "amenity.bathroom" : "amenity.bathrooms",
		"icon-levels": count === 1 ? "amenity.level"    : "amenity.levels",
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

	const amenitiesHtml = config.amenities
		.map(({ icon, count }) => {
			const labelKey = amenityLabelKey(icon, count);
			return `
				<span class="amenity">
					<svg aria-hidden="true"><use href="${iconsUrl}#${icon}"></use></svg>
					${count} <span data-i18n="${labelKey}"></span>
				</span>`;
		})
		.join('<span class="room-amenity-divider"></span>');

	const paragraphsHtml = config.descriptionKeys
		.map((key) => `<div class="room-desc-block" data-i18n="${key}"></div>`)
		.join("\n");

	const galleryHtml = config.gallery
		.map(({ src, alt, wide }, i) =>
			`<div class="room-gallery-item${wide ? " room-gallery-item--wide" : ""}">
				<img src="${src}" alt="${alt}" data-lightbox-index="${i}" style="cursor:zoom-in;">
			</div>`
		)
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
				<div class="room-hero-img-wrap">
					<img src="${config.heroImage.src}" alt="${config.heroImage.alt}">
				</div>
			</section>

			<!-- Detail card -->
			<section class="room-info-card">
				<div class="room-info-top">
					<div>
						<p class="room-info-label" data-i18n="room.startingFrom"></p>
						<p class="room-price">${config.price} <span data-i18n="room.perMonth"></span></p>
					</div>
				</div>
				<div class="room-description">
					<h2 data-i18n="room.about"></h2>
					${paragraphsHtml}
				</div>
				<a href="#" class="btn btn-primary room-cta" data-i18n="room.cta"></a>
			</section>

			<!-- Photo gallery -->
			<section class="room-gallery">
				<h2 class="room-gallery-heading" data-i18n="room.gallery"></h2>
				<div class="room-gallery-grid">
					${galleryHtml}
				</div>
			</section>

			<!-- Floor plan -->
			<section class="room-floorplan">
				<h2 class="room-gallery-heading" data-i18n="room.floorplan"></h2>
				${(Array.isArray(config.floorPlan) ? config.floorPlan : [config.floorPlan])
					.map(({ src, alt }) => `<div class="room-floorplan-img-wrap"><img src="${src}" alt="${alt}"></div>`)
					.join("\n")}
			</section>

		</div>
	`;

	// ── Lightbox ──────────────────────────────────────────────────────────────
	const images = config.gallery.map(({ src, alt }) => ({ src, alt }));

	// Inject lightbox overlay once
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

	// Inline styles so no extra CSS file is required
	Object.assign(lightbox.style, {
		display: "none",
		position: "fixed",
		inset: "0",
		zIndex: "9999",
		alignItems: "center",
		justifyContent: "center",
	});

	const backdropStyle = `
		position:fixed;inset:0;background:rgba(0,0,0,.85);`;
	const btnBase = `
		position:fixed;background:rgba(255,255,255,.15);border:none;color:#fff;
		font-size:2.5rem;line-height:1;cursor:pointer;border-radius:50%;
		width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;
		transition:background .15s;`;

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
		lbImg.src = images[currentIndex].src;
		lbImg.alt = images[currentIndex].alt;
		btnPrev.style.display = images.length > 1 ? "flex" : "none";
		btnNext.style.display = images.length > 1 ? "flex" : "none";
		lightbox.style.display = "flex";
		document.body.style.overflow = "hidden";
	}

	function closeLightbox() {
		lightbox.style.display = "none";
		document.body.style.overflow = "";
	}

	function showPrev() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
		lbImg.src = images[currentIndex].src;
		lbImg.alt = images[currentIndex].alt;
	}

	function showNext() {
		currentIndex = (currentIndex + 1) % images.length;
		lbImg.src = images[currentIndex].src;
		lbImg.alt = images[currentIndex].alt;
	}

	// Attach click handlers to gallery images
	main.querySelectorAll("[data-lightbox-index]").forEach((img) => {
		img.addEventListener("click", () => openLightbox(Number(img.dataset.lightboxIndex)));
	});

	btnClose.addEventListener("click", closeLightbox);
	backdrop.addEventListener("click", closeLightbox);
	btnPrev.addEventListener("click", (e) => { e.stopPropagation(); showPrev(); });
	btnNext.addEventListener("click", (e) => { e.stopPropagation(); showNext(); });

	document.addEventListener("keydown", (e) => {
		if (lightbox.style.display !== "flex") return;
		if (e.key === "Escape")     closeLightbox();
		if (e.key === "ArrowLeft")  showPrev();
		if (e.key === "ArrowRight") showNext();
	});
}
