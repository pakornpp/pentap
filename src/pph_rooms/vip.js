import "../styles.css";
import { setLanguage } from "../i18n.js";
import { initNav } from "../nav.js";
import { initFooter } from "../footer.js";
import { renderRoomPage, PPH_MAP_URL } from "../roomPage.js";
import { PRICES } from "../prices.js";

import heroImg from "../assets/pph/vip/vip-1.webp";
import img2    from "../assets/pph/vip/vip-2.webp";
import img3    from "../assets/pph/vip/vip-3.webp";
import img4    from "../assets/pph/vip/vip-4.webp";
import img5    from "../assets/pph/vip/vip-5.webp";
import img6    from "../assets/pph/vip/vip-6.webp";
import img7    from "../assets/pph/vip/vip-7.webp";
import img8    from "../assets/pph/vip/vip-8.webp";
import img9    from "../assets/pph/vip/vip-9.webp";
import img10   from "../assets/pph/vip/vip-10.webp";
import img11   from "../assets/pph/vip/vip-11.webp";
import img12   from "../assets/pph/vip/vip-12.webp";

window.setLanguage = setLanguage;

initNav("index.html");
initFooter("index.html");

renderRoomPage({
	titleKey:    "room.pph.vip.title",
	locationKey: "room.pph.location",
	amenities: [
		{ icon: "icon-bed",         count: 1 },
		{ icon: "icon-bath",        count: 1 },
		{ icon: "icon-living-room", count: 0 },
	],
	price:     PRICES.pph.vip.price,
	priceNote: PRICES.pph.vip.note,
	heroImage: { src: heroImg, alt: "VIP room interior with living area, Penta P Huai Muang, Ubon Ratchathani" },
	descriptionKeys: [
		"room.pph.desc.1",
	],
	gallery: [
		{ src: img2,  alt: "VIP room interior, Penta P Huai Muang, Ubon Ratchathani",  wide: true },
		{ src: img3,  alt: "VIP room interior, Penta P Huai Muang, Ubon Ratchathani" },
		{ src: img4,  alt: "VIP room interior, Penta P Huai Muang, Ubon Ratchathani" },
		{ src: img5,  alt: "VIP room interior, Penta P Huai Muang, Ubon Ratchathani" },
		{ src: img6,  alt: "VIP room interior, Penta P Huai Muang, Ubon Ratchathani",  wide: true },
		{ src: img7,  alt: "VIP room interior, Penta P Huai Muang, Ubon Ratchathani" },
		{ src: img8,  alt: "VIP room interior, Penta P Huai Muang, Ubon Ratchathani" },
		{ src: img9,  alt: "VIP room interior, Penta P Huai Muang, Ubon Ratchathani" },
		{ src: img10, alt: "VIP room interior, Penta P Huai Muang, Ubon Ratchathani", wide: true },
		{ src: img11, alt: "VIP room interior, Penta P Huai Muang, Ubon Ratchathani" },
		{ src: img12, alt: "VIP room interior, Penta P Huai Muang, Ubon Ratchathani" },
	],
	mapUrl: PPH_MAP_URL,
	schema: {
		name:        "VIP",
		description: "Premium furnished room with living room at Penta P Huai Muang, Ubon Ratchathani. Includes air-conditioner, TV, fridge, electronic door lock, CCTV, free WiFi, and free parking.",
		pageFile:    "pph-vip.html",
		priceNum:    8500,
		containedIn: "pph",
	},
});
