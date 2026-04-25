import "../styles.css";
import { setLanguage } from "../i18n.js";
import { initNav } from "../nav.js";
import { renderRoomPage } from "./roomPage.js";

import heroImg  from "../assets/ppr/superior_1/superior1-1.jpg";
import img2     from "../assets/ppr/superior_1/superior1-2.jpg";
import img3     from "../assets/ppr/superior_1/superior1-3.jpg";
import img4     from "../assets/ppr/superior_1/superior1-4.jpg";
import img5     from "../assets/ppr/superior_1/superior1-5.jpg";
import img6     from "../assets/ppr/superior_1/superior1-6.jpg";
import img7     from "../assets/ppr/superior_1/superior1-7.jpg";
import img8     from "../assets/ppr/superior_1/superior1-8.jpg";
import img9     from "../assets/ppr/superior_1/superior1-9.jpg";
import imgPlan  from "../assets/ppr/superior_1/superior1-plan.jpg";

window.setLanguage = setLanguage;

initNav("index.html");

renderRoomPage({
	titleKey:    "room.superior1.title",
	locationKey: "room.ppr.location",
	amenities: [
		{ icon: "icon-bed",    count: 1 },
		{ icon: "icon-bath",   count: 1 },
		{ icon: "icon-levels", count: 1 },
	],
	price:      "฿10,000",
	heroImage:  { src: heroImg, alt: "Superior 1 - living area" },
	descriptionKeys: [
		"room.superior1.desc.1",
		"room.superior1.desc.2",
		"room.superior1.desc.3",
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
});
