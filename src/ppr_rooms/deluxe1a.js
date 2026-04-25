import "../styles.css";
import { setLanguage } from "../i18n.js";
import { initNav } from "../nav.js";
import { renderRoomPage } from "./roomPage.js";

import heroImg  from "../assets/ppr/deluxe_1a/deluxe1a-1.jpg";
import img2     from "../assets/ppr/deluxe_1a/deluxe1a-2.jpg";
import img3     from "../assets/ppr/deluxe_1a/deluxe1a-3.jpg";
import img4     from "../assets/ppr/deluxe_1a/deluxe1a-4.jpg";
import img5     from "../assets/ppr/deluxe_1a/deluxe1a-5.jpg";
import img6     from "../assets/ppr/deluxe_1a/deluxe1a-6.jpg";
import img7     from "../assets/ppr/deluxe_1a/deluxe1a-7.jpg";
import img8     from "../assets/ppr/deluxe_1a/deluxe1a-8.jpg";
import img9     from "../assets/ppr/deluxe_1a/deluxe1a-9.jpg";
import img10    from "../assets/ppr/deluxe_1a/deluxe1a-10.jpg";
import img11    from "../assets/ppr/deluxe_1a/deluxe1a-11.jpg";
import img12    from "../assets/ppr/deluxe_1a/deluxe1a-12.jpg";
import img13    from "../assets/ppr/deluxe_1a/deluxe1a-13.jpg";
import img14    from "../assets/ppr/deluxe_1a/deluxe1a-14.jpg";
import imgPlan  from "../assets/ppr/deluxe_1a/deluxe1a-plan.jpg";

window.setLanguage = setLanguage;

initNav("index.html");

renderRoomPage({
	titleKey:    "room.deluxe1a.title",
	locationKey: "room.ppr.location",
	amenities: [
		{ icon: "icon-bed",    count: 1 },
		{ icon: "icon-bath",   count: 1 },
		{ icon: "icon-levels", count: 1 },
	],
	price:      "฿11,000",
	heroImage:  { src: heroImg, alt: "Deluxe 1A - living area" },
	descriptionKeys: [
		"room.deluxe1a.desc.1",
		"room.deluxe1a.desc.2",
		"room.deluxe1a.desc.3",
	],
	gallery: [
		{ src: img2,  alt: "Deluxe 1A - view 2", wide: true },
		{ src: img3,  alt: "Deluxe 1A - view 3" },
		{ src: img4,  alt: "Deluxe 1A - view 4" },
		{ src: img5,  alt: "Deluxe 1A - view 5" },
		{ src: img6,  alt: "Deluxe 1A - view 6" },
		{ src: img7,  alt: "Deluxe 1A - view 7" },
		{ src: img8,  alt: "Deluxe 1A - view 8" },
		{ src: img9,  alt: "Deluxe 1A - view 9" },
		{ src: img10, alt: "Deluxe 1A - view 10" },
		{ src: img11, alt: "Deluxe 1A - view 11" },
		{ src: img12, alt: "Deluxe 1A - view 12" },
		{ src: img13, alt: "Deluxe 1A - view 13" },
		{ src: img14, alt: "Deluxe 1A - view 14", wide: true },
	],
	floorPlan: { src: imgPlan, alt: "Deluxe 1A - floor plan" },
});
