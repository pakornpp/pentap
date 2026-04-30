import "../styles.css";
import { setLanguage } from "../i18n.js";
import { initNav } from "../nav.js";
import { initFooter } from "../footer.js";
import { renderRoomPage, PPR_MAP_URL } from "../roomPage.js";
import { PRICES } from "../prices.js";

import heroImg  from "../assets/ppr/deluxe_1a/deluxe1a-1.webp";
import img2     from "../assets/ppr/deluxe_1a/deluxe1a-2.webp";
import img3     from "../assets/ppr/deluxe_1a/deluxe1a-3.webp";
import img4     from "../assets/ppr/deluxe_1a/deluxe1a-4.webp";
import img5     from "../assets/ppr/deluxe_1a/deluxe1a-5.webp";
import img6     from "../assets/ppr/deluxe_1a/deluxe1a-6.webp";
import img7     from "../assets/ppr/deluxe_1a/deluxe1a-7.webp";
import img8     from "../assets/ppr/deluxe_1a/deluxe1a-8.webp";
import img9     from "../assets/ppr/deluxe_1a/deluxe1a-9.webp";
import img10    from "../assets/ppr/deluxe_1a/deluxe1a-10.webp";
import img11    from "../assets/ppr/deluxe_1a/deluxe1a-11.webp";
import img12    from "../assets/ppr/deluxe_1a/deluxe1a-12.webp";
import img13    from "../assets/ppr/deluxe_1a/deluxe1a-13.webp";
import img14    from "../assets/ppr/deluxe_1a/deluxe1a-14.webp";
import imgPlan  from "../assets/ppr/deluxe_1a/deluxe1a-plan.webp";

window.setLanguage = setLanguage;

initNav("index.html");
initFooter("index.html");

renderRoomPage({
	titleKey:    "room.deluxe1a.title",
	locationKey: "room.ppr.location",
	amenities: [
		{ icon: "icon-bed",    count: 1 },
		{ icon: "icon-bath",   count: 1 },
		{ icon: "icon-levels", count: 1 },
	],
	price:      PRICES.ppr.deluxe1a.price,
	heroImage:  { src: heroImg, alt: "Deluxe 1A living area, Penta P Residence, Ubon Ratchathani" },
	descriptionKeys: [
		"room.ppr.desc.1",
		"room.ppr.desc.2",
	],
	gallery: [
		{ src: img2,  alt: "Deluxe 1A interior, Penta P Residence, Ubon Ratchathani", wide: true },
		{ src: img3,  alt: "Deluxe 1A interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img4,  alt: "Deluxe 1A interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img5,  alt: "Deluxe 1A interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img6,  alt: "Deluxe 1A interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img7,  alt: "Deluxe 1A interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img8,  alt: "Deluxe 1A interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img9,  alt: "Deluxe 1A interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img10, alt: "Deluxe 1A interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img11, alt: "Deluxe 1A interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img12, alt: "Deluxe 1A interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img13, alt: "Deluxe 1A interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img14, alt: "Deluxe 1A interior, Penta P Residence, Ubon Ratchathani", wide: true },
	],
	floorPlan: { src: imgPlan, alt: "Deluxe 1A floor plan, Penta P Residence, Ubon Ratchathani" },
	mapUrl: PPR_MAP_URL,
	schema: {
		name:        "Deluxe 1A",
		description: "Fully furnished 1-bedroom deluxe unit at Penta P Residence, Ubon Ratchathani. Includes kitchen, smart TV, air-conditioner, in-room washing machine, and free fibre optic WiFi.",
		pageFile:    "ppr-deluxe1a.html",
		priceNum:    11000,
		containedIn: "ppr",
	},
});
