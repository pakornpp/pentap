import "../styles.css";
import { setLanguage } from "../i18n.js";
import { initNav } from "../nav.js";
import { initFooter } from "../footer.js";
import { renderRoomPage, PPR_MAP_URL } from "../roomPage.js";
import { PRICES } from "../prices.js";

import heroImg  from "../assets/ppr/standard_1/standard1-1.webp";
import img2     from "../assets/ppr/standard_1/standard1-2.webp";
import img3     from "../assets/ppr/standard_1/standard1-3.webp";
import img4     from "../assets/ppr/standard_1/standard1-4.webp";
import img5     from "../assets/ppr/standard_1/standard1-5.webp";
import img6     from "../assets/ppr/standard_1/standard1-6.webp";
import img7     from "../assets/ppr/standard_1/standard1-7.webp";
import img8     from "../assets/ppr/standard_1/standard1-8.webp";
import img9     from "../assets/ppr/standard_1/standard1-9.webp";
import imgPlan  from "../assets/ppr/standard_1/standard1-plan.webp";

window.setLanguage = setLanguage;

initNav("index.html");
initFooter("index.html");

renderRoomPage({
	titleKey:    "room.standard1.title",
	locationKey: "room.ppr.location",
	amenities: [
		{ icon: "icon-bed",    count: 1 },
		{ icon: "icon-bath",   count: 1 },
		{ icon: "icon-levels", count: 1 },
	],
	price:      PRICES.ppr.standard1.price,
	heroImage:  { src: heroImg, alt: "Standard 1 living area, Penta P Residence, Ubon Ratchathani" },
	descriptionKeys: [
		"room.ppr.desc.1",
		"room.ppr.desc.2",
	],
	gallery: [
		{ src: img2, alt: "Standard 1 interior, Penta P Residence, Ubon Ratchathani", wide: true },
		{ src: img3, alt: "Standard 1 interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img4, alt: "Standard 1 interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img5, alt: "Standard 1 interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img6, alt: "Standard 1 interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img7, alt: "Standard 1 interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img8, alt: "Standard 1 interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img9, alt: "Standard 1 interior, Penta P Residence, Ubon Ratchathani", wide: true },
	],
	floorPlan: { src: imgPlan, alt: "Standard 1 floor plan, Penta P Residence, Ubon Ratchathani" },
	mapUrl:    PPR_MAP_URL,
	schema: {
		name:        "Standard 1",
		description: "Fully furnished 1-bedroom unit at Penta P Residence, Ubon Ratchathani. Includes kitchen, smart TV, air-conditioner, in-room washing machine, and free fibre optic WiFi.",
		pageFile:    "ppr-standard1.html",
		priceNum:    9000,
		containedIn: "ppr",
	},
});
