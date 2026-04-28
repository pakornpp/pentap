import "./styles.css";
import { setLanguage } from "./i18n.js";
import { initNav } from "./nav.js";
import { buildPreviewGallery, buildPopupGallery } from "./gallery.js";

// Warehouse 1 images
import w1img01 from "./assets/ppw/warehouse_1/1714725372970.webp";
import w1img02 from "./assets/ppw/warehouse_1/20230927_130443.webp";
import w1img03 from "./assets/ppw/warehouse_1/20231023_163917.webp";
import w1img04 from "./assets/ppw/warehouse_1/20231023_164046.webp";
import w1img05 from "./assets/ppw/warehouse_1/20231023_164117.webp";
import w1img06 from "./assets/ppw/warehouse_1/20231023_164133.webp";
import w1img07 from "./assets/ppw/warehouse_1/20231023_164229.webp";
import w1img08 from "./assets/ppw/warehouse_1/20231023_214508.webp";
import w1img09 from "./assets/ppw/warehouse_1/20231220_091306.webp";
import w1img10 from "./assets/ppw/warehouse_1/20240125_093927.webp";
import w1img11 from "./assets/ppw/warehouse_1/20240125_094127.webp";
import w1img12 from "./assets/ppw/warehouse_1/20240125_094211.webp";
import w1img13 from "./assets/ppw/warehouse_1/20240125_094248.webp";
import w1img14 from "./assets/ppw/warehouse_1/20240125_094326.webp";
import w1img15 from "./assets/ppw/warehouse_1/20240215_153930.webp";
import w1img16 from "./assets/ppw/warehouse_1/20240215_153945.webp";
import w1img17 from "./assets/ppw/warehouse_1/20240215_154005.webp";
import w1img18 from "./assets/ppw/warehouse_1/20240215_154117.webp";

// Warehouse 2 image
import w2img01 from "./assets/ppw/warehouse_2/1764477135926.webp";

window.setLanguage = setLanguage;

initNav("index.html");

const W1_MAP_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.704848951059!2d104.80997881237316!3d15.283883359918567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311689c2a24dfeb9%3A0xe2877bf15b116d02!2zUGVudGEgUCBXYXJlaG91c2Ug4LmA4Lie4LiZ4LiV4LmJ4Liy4Lie4Li1IOC5geC4p-C4o-C5jOC5gOC4ruC5ieC4suC4quC5jA!5e0!3m2!1sen!2sth!4v1777387027378!5m2!1sen!2sth";
const W2_MAP_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.960364983848!2d104.82308801237316!3d15.269957160274231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311689003154fc23%3A0xb958175f5cc710b3!2zUGVudGEgUCBXYXJlaG91c2UgMiDguYDguJ7guJnguJXguYnguLLguJ7guLUg4LmB4Lin4Lij4LmM4LmA4Liu4LmJ4Liy4Liq4LmMIDI!5e0!3m2!1sen!2sth!4v1777387072860!5m2!1sen!2sth";

const w1Images = [
	{ src: w1img01, alt: "Penta P Warehouse 1 - view 1",  wide: true },
	{ src: w1img02, alt: "Penta P Warehouse 1 - view 2" },
	{ src: w1img03, alt: "Penta P Warehouse 1 - view 3" },
	{ src: w1img04, alt: "Penta P Warehouse 1 - view 4" },
	{ src: w1img05, alt: "Penta P Warehouse 1 - view 5" },
	{ src: w1img06, alt: "Penta P Warehouse 1 - view 6", wide: true },
	{ src: w1img07, alt: "Penta P Warehouse 1 - view 7" },
	{ src: w1img08, alt: "Penta P Warehouse 1 - view 8" },
	{ src: w1img09, alt: "Penta P Warehouse 1 - view 9" },
	{ src: w1img10, alt: "Penta P Warehouse 1 - view 10" },
	{ src: w1img11, alt: "Penta P Warehouse 1 - view 11" },
	{ src: w1img12, alt: "Penta P Warehouse 1 - view 12", wide: true },
	{ src: w1img13, alt: "Penta P Warehouse 1 - view 13" },
	{ src: w1img14, alt: "Penta P Warehouse 1 - view 14" },
	{ src: w1img15, alt: "Penta P Warehouse 1 - view 15" },
	{ src: w1img16, alt: "Penta P Warehouse 1 - view 16" },
	{ src: w1img17, alt: "Penta P Warehouse 1 - view 17" },
	{ src: w1img18, alt: "Penta P Warehouse 1 - view 18", wide: true },
];

const includesKeys = [
	"warehouse.includes.office",
	"warehouse.includes.toilet",
	"warehouse.includes.indoor",
	"warehouse.includes.exterior",
	"warehouse.includes.parking",
];

function buildIncludesList() {
	return includesKeys.map((key) => `<li data-i18n="${key}"></li>`).join("");
}

function buildAreaChips(sizes) {
	return sizes.map((size) => `<span class="warehouse-area-chip">${size}</span>`).join("");
}

function buildMapSection(mapUrl) {
	return `
		<section class="room-map">
			<h2 class="room-gallery-heading" data-i18n="warehouse.location.heading">Location</h2>
			<div class="room-map-wrap">
				<iframe
					src="${mapUrl}"
					style="border:0;"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					title="Location map"
					data-i18n-title="warehouse.map.title"
				></iframe>
			</div>
		</section>`;
}

const main = document.querySelector("main");

if (main) {
	main.innerHTML = `
		<div class="warehouse-page-wrap">

			<!-- ── Warehouse 1 ── -->
			<section id="warehouse-1" class="warehouse-section">
				<div class="warehouse-section-header">
					<h1 class="warehouse-section-title" data-i18n="warehouse.w1.title">Penta P Warehouse 1</h1>
					<span class="warehouse-status-badge warehouse-status-badge--available" data-i18n="warehouse.w1.status">Available for rent now</span>
				</div>

				<section class="room-gallery">
					<h2 class="room-gallery-heading" data-i18n="warehouse.gallery.heading">Gallery</h2>
					<div class="room-gallery-grid" id="w1-gallery">
						${buildPreviewGallery(w1Images)}
					</div>
					<button class="warehouse-gallery-expand-btn" id="w1-expand-btn">
						<span data-i18n="warehouse.gallery.viewAll.pre"></span> ${w1Images.length} <span data-i18n="warehouse.gallery.viewAll.post"></span>
					</button>
				</section>

				<div class="room-info-card">
					<div>
						<p class="warehouse-info-label" data-i18n="warehouse.area.label">Warehouse Area</p>
						<div class="warehouse-area-chips">
							${buildAreaChips(["900sqm", "600sqm", "300sqm", "150sqm"])}
						</div>
					</div>
					<div>
						<p class="warehouse-info-label" data-i18n="warehouse.includes.label">Includes</p>
						<ul class="warehouse-includes-list">
							${buildIncludesList()}
						</ul>
					</div>
					<a href="contact.html" class="btn btn-primary room-cta" data-i18n="warehouse.cta">Enquire about this warehouse</a>
				</div>

				${buildMapSection(W1_MAP_URL)}
			</section>

			<hr class="warehouse-divider">

			<!-- ── Warehouse 2 ── -->
			<section id="warehouse-2" class="warehouse-section">
				<div class="warehouse-section-header">
					<h1 class="warehouse-section-title" data-i18n="warehouse.w2.title">Penta P Warehouse 2</h1>
					<span class="warehouse-status-badge warehouse-status-badge--dev" data-i18n="warehouse.w2.status">Under Development</span>
				</div>

				<div class="warehouse-single-img-wrap">
					<img src="${w2img01}" alt="Penta P Warehouse 2">
				</div>

				<div class="room-info-card">
					<p class="warehouse-dev-note" data-i18n="warehouse.w2.devNote">This warehouse is currently under development. Contact us to register your interest.</p>
					<div>
						<p class="warehouse-info-label" data-i18n="warehouse.area.label">Warehouse Area</p>
						<div class="warehouse-area-chips">
							${buildAreaChips(["300sqm", "180sqm", "150sqm"])}
						</div>
					</div>
					<div>
						<p class="warehouse-info-label" data-i18n="warehouse.includes.label">Includes</p>
						<ul class="warehouse-includes-list">
							${buildIncludesList()}
						</ul>
					</div>
					<a href="contact.html" class="btn btn-primary room-cta" data-i18n="warehouse.cta">Enquire about this warehouse</a>
				</div>

				${buildMapSection(W2_MAP_URL)}
			</section>

		</div>
	`;

	// ── Gallery popup ─────────────────────────────────────────────────────────
	const galleryPopup = document.createElement("div");
	galleryPopup.id = "gallery-popup";
	galleryPopup.setAttribute("aria-modal", "true");
	galleryPopup.setAttribute("role", "dialog");
	galleryPopup.setAttribute("aria-label", "All photos");
	galleryPopup.innerHTML = `
		<div id="gallery-popup-backdrop"></div>
		<div id="gallery-popup-panel">
			<div id="gallery-popup-header">
				<h3 id="gallery-popup-title">All Photos (${w1Images.length})</h3>
				<button id="gallery-popup-close" aria-label="Close">&times;</button>
			</div>
			<div class="room-gallery-grid" id="gallery-popup-grid">
				${buildPopupGallery(w1Images)}
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

	document.querySelector("#w1-expand-btn").addEventListener("click", openGalleryPopup);
	document.querySelector("#gallery-popup-close").addEventListener("click", closeGalleryPopup);
	document.querySelector("#gallery-popup-backdrop").addEventListener("click", closeGalleryPopup);

	document.querySelector("#w1-gallery").addEventListener("click", (e) => {
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
	const images = w1Images.map(({ src, alt }) => ({ src, alt }));

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
		lbImg.src = images[currentIndex].src;
		lbImg.alt = images[currentIndex].alt;
		btnPrev.style.display = images.length > 1 ? "flex" : "none";
		btnNext.style.display = images.length > 1 ? "flex" : "none";
		lightbox.style.display = "flex";
		document.body.style.overflow = "hidden";
	}

	function closeLightbox() {
		lightbox.style.display = "none";
		// Restore body scroll only if gallery popup is also closed
		if (galleryPopup.style.display !== "flex") {
			document.body.style.overflow = "";
		}
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

	btnClose.addEventListener("click", closeLightbox);
	backdrop.addEventListener("click", closeLightbox);
	btnPrev.addEventListener("click", showPrev);
	btnNext.addEventListener("click", showNext);

	document.addEventListener("keydown", (e) => {
		if (lightbox.style.display === "flex") {
			if (e.key === "Escape") closeLightbox();
			if (e.key === "ArrowLeft") showPrev();
			if (e.key === "ArrowRight") showNext();
			return;
		}
		if (galleryPopup.style.display === "flex" && e.key === "Escape") {
			closeGalleryPopup();
		}
	});
}
