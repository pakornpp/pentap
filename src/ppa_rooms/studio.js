import "../styles.css";
import { setLanguage } from "../i18n.js";
import { initNav } from "../nav.js";
import { renderRoomPage, PPA_MAP_URL } from "../roomPage.js";
import { PRICES } from "../prices.js";

import heroImg from "../assets/ppa/studio/studio-1.webp";
import img2    from "../assets/ppa/studio/studio-2.webp";
import img3    from "../assets/ppa/studio/studio-3.webp";
import img4    from "../assets/ppa/studio/studio-4.webp";
import img5    from "../assets/ppa/studio/studio-5.webp";
import img6    from "../assets/ppa/studio/studio-6.webp";

window.setLanguage = setLanguage;

initNav("index.html");

renderRoomPage({
	titleKey:    "room.ppa.studio.title",
	locationKey: "room.ppa.location",
	amenities: [
		{ icon: "icon-bed",  count: 1 },
		{ icon: "icon-bath", count: 1 },
	],
	price:     PRICES.ppa.studio.price,
	priceNote: PRICES.ppa.studio.note,
	heroImage: { src: heroImg, alt: "PPA Studio - room view" },
	descriptionKeys: [
		"room.ppa.desc.1",
	],
	gallery: [
		{ src: img2, alt: "PPA Studio - view 2", wide: true },
		{ src: img3, alt: "PPA Studio - view 3" },
		{ src: img4, alt: "PPA Studio - view 4" },
		{ src: img5, alt: "PPA Studio - view 5", wide: true },
		{ src: img6, alt: "PPA Studio - view 6" },
	],
	mapUrl: PPA_MAP_URL,
});
