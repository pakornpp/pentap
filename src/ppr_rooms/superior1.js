import "../styles.css";
import { setLanguage } from "../i18n.js";
import { initNav } from "../nav.js";
import { initFooter } from "../footer.js";
import { renderRoomPage, PPR_MAP_URL } from "../roomPage.js";
import { PRICES } from "../prices.js";

import heroImg  from "../assets/ppr/superior_1/superior1-1.webp";
import img2     from "../assets/ppr/superior_1/superior1-2.webp";
import img3     from "../assets/ppr/superior_1/superior1-3.webp";
import img4     from "../assets/ppr/superior_1/superior1-4.webp";
import img5     from "../assets/ppr/superior_1/superior1-5.webp";
import img6     from "../assets/ppr/superior_1/superior1-6.webp";
import img7     from "../assets/ppr/superior_1/superior1-7.webp";
import img8     from "../assets/ppr/superior_1/superior1-8.webp";
import img9     from "../assets/ppr/superior_1/superior1-9.webp";
import imgPlan  from "../assets/ppr/superior_1/superior1-plan.webp";

window.setLanguage = setLanguage;

initNav("index.html");
initFooter("index.html");

renderRoomPage({
	titleKey:    "room.superior1.title",
	locationKey: "room.ppr.location",
	amenities: [
		{ icon: "icon-bed",    count: 1 },
		{ icon: "icon-bath",   count: 1 },
		{ icon: "icon-levels", count: 1 },
	],
	price:      PRICES.ppr.superior1.price,
	heroImage:  { src: heroImg, alt: "Superior 1 - living area" },
	descriptionKeys: [
		"room.ppr.desc.1",
		"room.ppr.desc.2",
	],
	gallery: [
		{ src: img2, alt: "Superior 1 - view 2", wide: true },
		{ src: img3, alt: "Superior 1 - view 3" },
		{ src: img4, alt: "Superior 1 - view 4" },
		{ src: img5, alt: "Superior 1 - view 5" },
		{ src: img6, alt: "Superior 1 - view 6" },
		{ src: img7, alt: "Superior 1 - view 7" },
		{ src: img8, alt: "Superior 1 - view 8" },
		{ src: img9, alt: "Superior 1 - view 9", wide: true },
	],
	floorPlan: { src: imgPlan, alt: "Superior 1 - floor plan" },
	mapUrl:    PPR_MAP_URL,
});
