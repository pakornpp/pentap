import "../styles.css";
import { setLanguage } from "../i18n.js";
import { initNav } from "../nav.js";
import { initFooter } from "../footer.js";
import { renderRoomPage, PPR_MAP_URL } from "../roomPage.js";
import { PRICES } from "../prices.js";

import heroImg  from "../assets/ppr/grand_2/grand2-1.webp";
import img2     from "../assets/ppr/grand_2/grand2-2.webp";
import img3     from "../assets/ppr/grand_2/grand2-3.webp";
import img4     from "../assets/ppr/grand_2/grand2-4.webp";
import img5     from "../assets/ppr/grand_2/grand2-5.webp";
import img6     from "../assets/ppr/grand_2/grand2-6.webp";
import img7     from "../assets/ppr/grand_2/grand2-7.webp";
import img8     from "../assets/ppr/grand_2/grand2-8.webp";
import img9     from "../assets/ppr/grand_2/grand2-9.webp";
import img10    from "../assets/ppr/grand_2/grand2-10.webp";
import img11    from "../assets/ppr/grand_2/grand2-11.webp";
import img12    from "../assets/ppr/grand_2/grand2-12.webp";
import imgPlan1 from "../assets/ppr/grand_2/grand2-plan1.webp";
import imgPlan2 from "../assets/ppr/grand_2/grand2-plan2.webp";

window.setLanguage = setLanguage;

initNav("index.html");
initFooter("index.html");

renderRoomPage({
	titleKey:    "room.grand2.title",
	locationKey: "room.ppr.location",
	amenities: [
		{ icon: "icon-bed",    count: 2 },
		{ icon: "icon-bath",   count: 2 },
		{ icon: "icon-levels", count: 2 },
	],
	price:      PRICES.ppr.grand2.price,
	heroImage:  { src: heroImg, alt: "Grand 2 living area, Penta P Residence, Ubon Ratchathani" },
	descriptionKeys: [
		"room.ppr.desc.1",
		"room.ppr.desc.2",
	],
	gallery: [
		{ src: img2,  alt: "Grand 2 interior, Penta P Residence, Ubon Ratchathani", wide: true },
		{ src: img3,  alt: "Grand 2 interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img4,  alt: "Grand 2 interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img5,  alt: "Grand 2 interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img6,  alt: "Grand 2 interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img7,  alt: "Grand 2 interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img8,  alt: "Grand 2 interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img9,  alt: "Grand 2 interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img10, alt: "Grand 2 interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img11, alt: "Grand 2 interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img12, alt: "Grand 2 interior, Penta P Residence, Ubon Ratchathani", wide: true },
	],
	floorPlan: [
		{ src: imgPlan1, alt: "Grand 2 floor plan, Penta P Residence, Ubon Ratchathani" },
		{ src: imgPlan2, alt: "Grand 2 floor plan, Penta P Residence, Ubon Ratchathani" },
	],
	mapUrl: PPR_MAP_URL,
	schema: {
		name:        "Grand 2",
		description: "Premium fully furnished 2-bedroom, 2-bathroom unit spanning 2 levels at Penta P Residence, Ubon Ratchathani. Includes kitchen, smart TV, air-conditioner, in-room washing machine, and free fibre optic WiFi.",
		pageFile:    "ppr-grand2.html",
		priceNum:    15000,
		containedIn: "ppr",
	},
});
