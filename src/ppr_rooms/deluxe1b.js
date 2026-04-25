import "../styles.css";
import { setLanguage } from "../i18n.js";
import { initNav } from "../nav.js";
import { renderRoomPage } from "./roomPage.js";

import heroImg  from "../assets/ppr/deluxe_1b/deluxe1b-1.jpg";
import img2     from "../assets/ppr/deluxe_1b/deluxe1b-2.jpg";
import img3     from "../assets/ppr/deluxe_1b/deluxe1b-3.jpg";
import img4     from "../assets/ppr/deluxe_1b/deluxe1b-4.jpg";
import img5     from "../assets/ppr/deluxe_1b/deluxe1b-5.jpg";
import img6     from "../assets/ppr/deluxe_1b/deluxe1b-6.jpg";
import img7     from "../assets/ppr/deluxe_1b/deluxe1b-7.jpg";
import img8     from "../assets/ppr/deluxe_1b/deluxe1b-8.jpg";
import img9     from "../assets/ppr/deluxe_1b/deluxe1b-9.jpg";
import img10    from "../assets/ppr/deluxe_1b/deluxe1b-10.jpg";
import img11    from "../assets/ppr/deluxe_1b/deluxe1b-11.jpg";
import imgPlan1 from "../assets/ppr/deluxe_1b/deluxe1b-plan1.jpg";
import imgPlan2 from "../assets/ppr/deluxe_1b/deluxe1b-plan2.jpg";

window.setLanguage = setLanguage;

initNav("index.html");

renderRoomPage({
	titleKey:    "room.deluxe1b.title",
	locationKey: "room.ppr.location",
	amenities: [
		{ icon: "icon-bed",    count: 1 },
		{ icon: "icon-bath",   count: 1 },
		{ icon: "icon-levels", count: 1 },
	],
	price:      "฿13,000",
	heroImage:  { src: heroImg, alt: "Deluxe 1B - living area" },
	descriptionKeys: [
		"room.deluxe1b.desc.1",
		"room.deluxe1b.desc.2",
		"room.deluxe1b.desc.3",
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
});
