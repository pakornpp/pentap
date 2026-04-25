import "./styles.css";
import { setLanguage } from "./i18n.js";
import { initNav } from "./nav.js";
import iconsUrl from "./assets/icons/icons.svg";
import imgStandard1 from "./assets/ppr/standard_1/standard1-1.jpg";
import imgSuperior1 from "./assets/ppr/superior_1/superior1-1.jpg";
import imgDeluxe1a from "./assets/ppr/deluxe_1a/deluxe1a-1.jpg";
import imgDeluxe1b from "./assets/ppr/deluxe_1b/deluxe1b-1.jpg";
import imgSuperior2 from "./assets/ppr/superior_2/superior2-1.jpg";
import imgDeluxe2 from "./assets/ppr/deluxe_2/deluxe2-1.jpg";
import imgGrand2 from "./assets/ppr/grand_2/grand2-1.jpg";

window.setLanguage = setLanguage;

initNav("index.html");

/**
 * Creates and returns a listing card element.
 * @param {{ src: string, alt: string, name: string, price: string, bedrooms: number, bathrooms: number, levels: number }} options
 */
function createCard({ src, alt, name, price, bedrooms, bathrooms, levels, href }) {
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
				<span class="listing-price-badge">${price}</span>
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
				<span class="amenity">
					<svg><use href="${iconsUrl}#icon-levels"></use></svg>
					${levels} <span data-i18n="${levels === 1 ? "amenity.level" : "amenity.levels"}"></span>
				</span>
			</div>
		</div>
	`;
	return article;
}

const cards = [
	{ src: imgStandard1, alt: "Standard 1",  name: "Standard 1", price: "฿9,000",  bedrooms: 1, bathrooms: 1, levels: 1, href: "standard1.html" },
	{ src: imgSuperior1, alt: "Superior 1",  name: "Superior 1", price: "฿10,000", bedrooms: 1, bathrooms: 1, levels: 1, href: "superior1.html" },
	{ src: imgDeluxe1a,  alt: "Deluxe 1A",   name: "Deluxe 1A",  price: "฿11,000", bedrooms: 1, bathrooms: 1, levels: 1, href: "deluxe1a.html" },
	{ src: imgDeluxe1b,  alt: "Deluxe 1B",   name: "Deluxe 1B",  price: "฿13,000", bedrooms: 1, bathrooms: 2, levels: 2, href: "deluxe1b.html" },
	{ src: imgSuperior2, alt: "Superior 2",  name: "Superior 2", price: "฿13,000", bedrooms: 2, bathrooms: 2, levels: 2, href: "superior2.html" },
	{ src: imgDeluxe2,   alt: "Deluxe 2",    name: "Deluxe 2",   price: "฿14,000", bedrooms: 2, bathrooms: 2, levels: 2, href: "deluxe2.html" },
	{ src: imgGrand2,    alt: "Grand 2",     name: "Grand 2",    price: "฿15,000", bedrooms: 2, bathrooms: 2, levels: 2, href: "grand2.html" },
];

const grid = document.querySelector(".listing-grid");
cards.forEach((card) => grid.appendChild(createCard(card)));
