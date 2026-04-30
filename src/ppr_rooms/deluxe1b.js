import "../styles.css";
import { setLanguage } from "../i18n.js";
import { initNav } from "../nav.js";
import { initFooter } from "../footer.js";
import { renderRoomPage, PPR_MAP_URL } from "../roomPage.js";
import { PRICES } from "../prices.js";

import heroImg  from "../assets/ppr/deluxe_1b/deluxe1b-1.webp";
import img2     from "../assets/ppr/deluxe_1b/deluxe1b-2.webp";
import img3     from "../assets/ppr/deluxe_1b/deluxe1b-3.webp";
import img4     from "../assets/ppr/deluxe_1b/deluxe1b-4.webp";
import img5     from "../assets/ppr/deluxe_1b/deluxe1b-5.webp";
import img6     from "../assets/ppr/deluxe_1b/deluxe1b-6.webp";
import img7     from "../assets/ppr/deluxe_1b/deluxe1b-7.webp";
import img8     from "../assets/ppr/deluxe_1b/deluxe1b-8.webp";
import img9     from "../assets/ppr/deluxe_1b/deluxe1b-9.webp";
import img10    from "../assets/ppr/deluxe_1b/deluxe1b-10.webp";
import img11    from "../assets/ppr/deluxe_1b/deluxe1b-11.webp";
import imgPlan1 from "../assets/ppr/deluxe_1b/deluxe1b-plan1.webp";
import imgPlan2 from "../assets/ppr/deluxe_1b/deluxe1b-plan2.webp";

window.setLanguage = setLanguage;

initNav("index.html");
initFooter("index.html");

renderRoomPage({
	titleKey:    "room.deluxe1b.title",
	locationKey: "room.ppr.location",
	amenities: [
		{ icon: "icon-bed",    count: 1 },
		{ icon: "icon-bath",   count: 1 },
		{ icon: "icon-levels", count: 1 },
	],
	price:      PRICES.ppr.deluxe1b.price,
	heroImage:  { src: heroImg, alt: "Deluxe 1B - living area" },
	descriptionKeys: [
		"room.ppr.desc.1",
		"room.ppr.desc.2",
	],
	gallery: [
		{ src: img2,  alt: "Deluxe 1B - view 2", wide: true },
		{ src: img3,  alt: "Deluxe 1B - view 3" },
		{ src: img4,  alt: "Deluxe 1B - view 4" },
		{ src: img5,  alt: "Deluxe 1B - view 5" },
		{ src: img6,  alt: "Deluxe 1B - view 6" },
		{ src: img7,  alt: "Deluxe 1B - view 7" },
		{ src: img8,  alt: "Deluxe 1B - view 8" },
		{ src: img9,  alt: "Deluxe 1B - view 9" },
		{ src: img10, alt: "Deluxe 1B - view 10" },
		{ src: img11, alt: "Deluxe 1B - view 11", wide: true },
	],
	floorPlan: [
		{ src: imgPlan1, alt: "Deluxe 1B - floor plan 1" },
		{ src: imgPlan2, alt: "Deluxe 1B - floor plan 2" },
	],
	mapUrl: PPR_MAP_URL,
	schema: {
		name:        "Deluxe 1B",
		description: "Fully furnished 1-bedroom deluxe unit at Penta P Residence, Ubon Ratchathani. Includes kitchen, smart TV, air-conditioner, in-room washing machine, and free fibre optic WiFi.",
		pageFile:    "ppr-deluxe1b.html",
		priceNum:    13000,
		containedIn: "ppr",
	},
});
