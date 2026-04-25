import "./styles.css";
import { setLanguage } from "./i18n.js";
import { initNav } from "./nav.js";
import iconsUrl from "./assets/icons/icons.svg";
import imgStandard1 from "./assets/ppr/standard_1/standard1-1.webp";
import imgSuperior1 from "./assets/ppr/superior_1/superior1-1.webp";
import imgDeluxe1a from "./assets/ppr/deluxe_1a/deluxe1a-1.webp";
import imgDeluxe1b from "./assets/ppr/deluxe_1b/deluxe1b-1.webp";
import imgSuperior2 from "./assets/ppr/superior_2/superior2-1.webp";
import imgDeluxe2 from "./assets/ppr/deluxe_2/deluxe2-1.webp";
import imgGrand2 from "./assets/ppr/grand_2/grand2-1.webp";
import imgPphStandard from "./assets/pph/standard/standard-1.webp";
import imgPphVip     from "./assets/pph/vip/vip-1.webp";
import imgPpaStudio  from "./assets/ppa/studio/studio-1.webp";
import imgPpaVip     from "./assets/ppa/vip/vip-1.webp";
import { PRICES } from "./prices.js";

window.setLanguage = setLanguage;

initNav("index.html");

/**
 * Creates and returns a listing card element.
 * @param {{ src: string, alt: string, name: string, price: string, bedrooms: number, bathrooms: number, levels: number }} options
 */
function createCard({ src, alt, name, price, priceNote, bedrooms, bathrooms, levels, livingRoom, href }) {
	const article = document.createElement("article");
	article.className = "listing-card";
	if (href) {
		article.style.cursor = "pointer";
		article.addEventListener("click", () => { window.location.href = href; });
	}
	article.innerHTML = `
		<div class="listing-card-img-wrap">
			<img src="${src}" alt="${alt}">
		</div>
		<div class="listing-card-body">
			<div class="listing-card-title-row">
				<div><h3 class="listing-card-name">${name}</h3></div>
				<div class="listing-price-group">
					<span class="listing-price-badge">${price}</span>
					${priceNote ? `<p class="listing-price-note">${priceNote}</p>` : ''}
				</div>
			</div>
			<div class="listing-amenities">
				<span class="amenity">
					<svg><use href="${iconsUrl}#icon-bed"></use></svg>
					${bedrooms} <span data-i18n="${bedrooms === 1 ? "amenity.bedroom" : "amenity.bedrooms"}"></span>
				</span>
				<span class="amenity">
					<svg><use href="${iconsUrl}#icon-bath"></use></svg>
					${bathrooms} <span data-i18n="${bathrooms === 1 ? "amenity.bathroom" : "amenity.bathrooms"}"></span>
				</span>
				${levels != null ? `
				<span class="amenity">
					<svg><use href="${iconsUrl}#icon-levels"></use></svg>
					${levels} <span data-i18n="${levels === 1 ? 'amenity.level' : 'amenity.levels'}"></span>
				</span>` : ''}
				${livingRoom ? `
				<span class="amenity">
					<svg><use href="${iconsUrl}#icon-living-room"></use></svg>
					<span data-i18n="amenity.livingRoom"></span>
				</span>` : ''}
			</div>
		</div>
	`;
	return article;
}


const pprCards = [
	{ src: imgStandard1, alt: "PPR Standard 1",  name: "Standard 1", price: PRICES.ppr.standard1.price, bedrooms: 1, bathrooms: 1, levels: 1, href: "ppr-standard1.html" },
	{ src: imgSuperior1, alt: "PPR Superior 1",  name: "Superior 1", price: PRICES.ppr.superior1.price, bedrooms: 1, bathrooms: 1, levels: 1, href: "ppr-superior1.html" },
	{ src: imgDeluxe1a,  alt: "PPR Deluxe 1A",   name: "Deluxe 1A",  price: PRICES.ppr.deluxe1a.price,  bedrooms: 1, bathrooms: 1, levels: 1, href: "ppr-deluxe1a.html" },
	{ src: imgDeluxe1b,  alt: "PPR Deluxe 1B",   name: "Deluxe 1B",  price: PRICES.ppr.deluxe1b.price,  bedrooms: 1, bathrooms: 2, levels: 2, href: "ppr-deluxe1b.html" },
	{ src: imgSuperior2, alt: "PPR Superior 2",  name: "Superior 2", price: PRICES.ppr.superior2.price, bedrooms: 2, bathrooms: 2, levels: 2, href: "ppr-superior2.html" },
	{ src: imgDeluxe2,   alt: "PPR Deluxe 2",    name: "Deluxe 2",   price: PRICES.ppr.deluxe2.price,   bedrooms: 2, bathrooms: 2, levels: 2, href: "ppr-deluxe2.html" },
	{ src: imgGrand2,    alt: "PPR Grand 2",     name: "Grand 2",    price: PRICES.ppr.grand2.price,    bedrooms: 2, bathrooms: 2, levels: 2, href: "ppr-grand2.html" },
];

const pphCards = [
	{ src: imgPphStandard, alt: "PPH Standard", name: "Standard", price: PRICES.pph.standard.price, priceNote: PRICES.pph.standard.note, bedrooms: 1, bathrooms: 1, href: "pph-standard.html" },
	{ src: imgPphVip,     alt: "PPH VIP",      name: "VIP",      price: PRICES.pph.vip.price,      priceNote: PRICES.pph.vip.note,      bedrooms: 1, bathrooms: 1, livingRoom: true,  href: "pph-vip.html" },
];

const ppaCards = [
	{ src: imgPpaStudio, alt: "PPA Studio", name: "Studio", price: PRICES.ppa.studio.price, priceNote: PRICES.ppa.studio.note, bedrooms: 1, bathrooms: 1, href: "ppa-studio.html" },
	{ src: imgPpaVip,    alt: "PPA VIP",    name: "VIP",    price: PRICES.ppa.vip.price,    priceNote: PRICES.ppa.vip.note,    bedrooms: 1, bathrooms: 1, livingRoom: true, href: "ppa-vip.html" },
];

const ppaGrid = document.querySelector("#ppa-grid");
ppaCards.forEach((card) => ppaGrid.appendChild(createCard(card)));

const pprGrid = document.querySelector("#ppr-grid");
pprCards.forEach((card) => pprGrid.appendChild(createCard(card)));

const pphGrid = document.querySelector("#pph-grid");
pphCards.forEach((card) => pphGrid.appendChild(createCard(card)));
