import "../styles.css";
import { setLanguage } from "../i18n.js";
import { initNav } from "../nav.js";
import { initFooter } from "../footer.js";
import { renderRoomPage, PPH_MAP_URL } from "../roomPage.js";
import { PRICES } from "../prices.js";

import heroImg from "../assets/pph/standard/standard-1.webp";
import img2    from "../assets/pph/standard/standard-2.webp";
import img3    from "../assets/pph/standard/standard-3.webp";
import img4    from "../assets/pph/standard/standard-4.webp";
import img5    from "../assets/pph/standard/standard-5.webp";
import img6    from "../assets/pph/standard/standard-6.webp";
import img7    from "../assets/pph/standard/standard-7.webp";
import img8    from "../assets/pph/standard/standard-8.webp";
import img9    from "../assets/pph/standard/standard-9.webp";

window.setLanguage = setLanguage;

initNav("index.html");
initFooter("index.html");

renderRoomPage({
	titleKey:    "room.pph.standard.title",
	locationKey: "room.pph.location",
	amenities: [
		{ icon: "icon-bed",  count: 1 },
		{ icon: "icon-bath", count: 1 },
	],
	price:     PRICES.pph.standard.price,
	priceNote: PRICES.pph.standard.note,
	heroImage: { src: heroImg, alt: "Standard room interior, Penta P Huai Muang, Ubon Ratchathani" },
	descriptionKeys: [
		"room.pph.desc.1",
	],
	gallery: [
		{ src: img2, alt: "Standard room interior, Penta P Huai Muang, Ubon Ratchathani", wide: true },
		{ src: img3, alt: "Standard room interior, Penta P Huai Muang, Ubon Ratchathani" },
		{ src: img4, alt: "Standard room interior, Penta P Huai Muang, Ubon Ratchathani" },
		{ src: img5, alt: "Standard room interior, Penta P Huai Muang, Ubon Ratchathani" },
		{ src: img6, alt: "Standard room interior, Penta P Huai Muang, Ubon Ratchathani", wide: true },
		{ src: img7, alt: "Standard room interior, Penta P Huai Muang, Ubon Ratchathani" },
		{ src: img8, alt: "Standard room interior, Penta P Huai Muang, Ubon Ratchathani" },
		{ src: img9, alt: "Standard room interior, Penta P Huai Muang, Ubon Ratchathani", wide: true },
	],
	mapUrl: PPH_MAP_URL,
	schema: {
		name:        "Standard",
		description: "Fully furnished room at Penta P Huai Muang, Ubon Ratchathani. Includes air-conditioner, TV, fridge, electronic door lock, CCTV, free WiFi, and free parking.",
		pageFile:    "pph-standard.html",
		priceNum:    6000,
		containedIn: "pph",
	},
});
