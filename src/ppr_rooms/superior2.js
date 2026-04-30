import "../styles.css";
import { setLanguage } from "../i18n.js";
import { initNav } from "../nav.js";
import { initFooter } from "../footer.js";
import { renderRoomPage, PPR_MAP_URL } from "../roomPage.js";
import { PRICES } from "../prices.js";

import heroImg  from "../assets/ppr/superior_2/superior2-1.webp";
import img2     from "../assets/ppr/superior_2/superior2-2.webp";
import img3     from "../assets/ppr/superior_2/superior2-3.webp";
import img4     from "../assets/ppr/superior_2/superior2-4.webp";
import img5     from "../assets/ppr/superior_2/superior2-5.webp";
import img6     from "../assets/ppr/superior_2/superior2-6.webp";
import img7     from "../assets/ppr/superior_2/superior2-7.webp";
import img8     from "../assets/ppr/superior_2/superior2-8.webp";
import img9     from "../assets/ppr/superior_2/superior2-9.webp";
import img10    from "../assets/ppr/superior_2/superior2-10.webp";
import imgPlan1 from "../assets/ppr/superior_2/superior2-plan1.webp";
import imgPlan2 from "../assets/ppr/superior_2/superior2-plan2.webp";

window.setLanguage = setLanguage;

initNav("index.html");
initFooter("index.html");

renderRoomPage({
	titleKey:    "room.superior2.title",
	locationKey: "room.ppr.location",
	amenities: [
		{ icon: "icon-bed",    count: 2 },
		{ icon: "icon-bath",   count: 2 },
		{ icon: "icon-levels", count: 2 },
	],
	price:      PRICES.ppr.superior2.price,
	heroImage:  { src: heroImg, alt: "Superior 2 living area, Penta P Residence, Ubon Ratchathani" },
	descriptionKeys: [
		"room.ppr.desc.1",
		"room.ppr.desc.2",
	],
	gallery: [
		{ src: img2,  alt: "Superior 2 interior, Penta P Residence, Ubon Ratchathani", wide: true },
		{ src: img3,  alt: "Superior 2 interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img4,  alt: "Superior 2 interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img5,  alt: "Superior 2 interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img6,  alt: "Superior 2 interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img7,  alt: "Superior 2 interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img8,  alt: "Superior 2 interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img9,  alt: "Superior 2 interior, Penta P Residence, Ubon Ratchathani" },
		{ src: img10, alt: "Superior 2 interior, Penta P Residence, Ubon Ratchathani", wide: true },
	],
	floorPlan: [
		{ src: imgPlan1, alt: "Superior 2 floor plan, Penta P Residence, Ubon Ratchathani" },
		{ src: imgPlan2, alt: "Superior 2 floor plan, Penta P Residence, Ubon Ratchathani" },
	],
	mapUrl: PPR_MAP_URL,
	schema: {
		name:        "Superior 2",
		description: "Spacious fully furnished 2-bedroom, 2-bathroom unit at Penta P Residence, Ubon Ratchathani. Includes kitchen, smart TV, air-conditioner, in-room washing machine, and free fibre optic WiFi.",
		pageFile:    "ppr-superior2.html",
		priceNum:    13000,
		containedIn: "ppr",
	},
});
