import "../styles.css";
import { setLanguage } from "../i18n.js";
import { initNav } from "../nav.js";
import { initFooter } from "../footer.js";
import { renderRoomPage, PPA_MAP_URL } from "../roomPage.js";
import { PRICES } from "../prices.js";

import heroImg from "../assets/ppa/vip/vip-1.webp";
import img2    from "../assets/ppa/vip/vip-2.webp";
import img3    from "../assets/ppa/vip/vip-3.webp";
import img4    from "../assets/ppa/vip/vip-4.webp";
import img5    from "../assets/ppa/vip/vip-5.webp";
import img6    from "../assets/ppa/vip/vip-6.webp";
import img7    from "../assets/ppa/vip/vip-7.webp";
import img8    from "../assets/ppa/vip/vip-8.webp";
import img9    from "../assets/ppa/vip/vip-9.webp";
import img10   from "../assets/ppa/vip/vip-10.webp";
import img11   from "../assets/ppa/vip/vip-11.webp";
import img12   from "../assets/ppa/vip/vip-12.webp";
import img13   from "../assets/ppa/vip/vip-13.webp";

window.setLanguage = setLanguage;

initNav("index.html");
initFooter("index.html");

renderRoomPage({
	titleKey:    "room.ppa.vip.title",
	locationKey: "room.ppa.location",
	amenities: [
		{ icon: "icon-bed",  count: 1 },
		{ icon: "icon-bath", count: 1 },
	],
	price:     PRICES.ppa.vip.price,
	priceNote: PRICES.ppa.vip.note,
	heroImage: { src: heroImg, alt: "VIP room interior with living area, Penta P Apartment, Ubon Ratchathani" },
	descriptionKeys: [
		"room.ppa.desc.1",
	],
	gallery: [
		{ src: img2,  alt: "VIP room interior, Penta P Apartment, Ubon Ratchathani",  wide: true },
		{ src: img3,  alt: "VIP room interior, Penta P Apartment, Ubon Ratchathani" },
		{ src: img4,  alt: "VIP room interior, Penta P Apartment, Ubon Ratchathani" },
		{ src: img5,  alt: "VIP room interior, Penta P Apartment, Ubon Ratchathani" },
		{ src: img6,  alt: "VIP room interior, Penta P Apartment, Ubon Ratchathani",  wide: true },
		{ src: img7,  alt: "VIP room interior, Penta P Apartment, Ubon Ratchathani" },
		{ src: img8,  alt: "VIP room interior, Penta P Apartment, Ubon Ratchathani" },
		{ src: img9,  alt: "VIP room interior, Penta P Apartment, Ubon Ratchathani" },
		{ src: img10, alt: "VIP room interior, Penta P Apartment, Ubon Ratchathani", wide: true },
		{ src: img11, alt: "VIP room interior, Penta P Apartment, Ubon Ratchathani" },
		{ src: img12, alt: "VIP room interior, Penta P Apartment, Ubon Ratchathani" },
		{ src: img13, alt: "VIP room interior, Penta P Apartment, Ubon Ratchathani" },
	],
	mapUrl: PPA_MAP_URL,
	schema: {
		name:        "VIP",
		description: "Spacious furnished VIP room at Penta P Apartment, Kham Yai district, Ubon Ratchathani. Move-in ready with TV, fridge, wardrobe, and balcony.",
		pageFile:    "ppa-vip.html",
		priceNum:    8500,
		containedIn: "ppa",
	},
});
