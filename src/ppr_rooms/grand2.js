import "../styles.css";
import { setLanguage } from "../i18n.js";
import { initNav } from "../nav.js";
import { renderRoomPage } from "./roomPage.js";

import heroImg  from "../assets/ppr/grand_2/grand2-1.jpg";
import img2     from "../assets/ppr/grand_2/grand2-2.jpg";
import img3     from "../assets/ppr/grand_2/grand2-3.jpg";
import img4     from "../assets/ppr/grand_2/grand2-4.jpg";
import img5     from "../assets/ppr/grand_2/grand2-5.jpg";
import img6     from "../assets/ppr/grand_2/grand2-6.jpg";
import img7     from "../assets/ppr/grand_2/grand2-7.jpg";
import img8     from "../assets/ppr/grand_2/grand2-8.jpg";
import img9     from "../assets/ppr/grand_2/grand2-9.jpg";
import img10    from "../assets/ppr/grand_2/grand2-10.jpg";
import img11    from "../assets/ppr/grand_2/grand2-11.jpg";
import img12    from "../assets/ppr/grand_2/grand2-12.jpg";
import imgPlan1 from "../assets/ppr/grand_2/grand2-plan1.jpg";
import imgPlan2 from "../assets/ppr/grand_2/grand2-plan2.jpg";

window.setLanguage = setLanguage;

initNav("index.html");

renderRoomPage({
	titleKey:    "room.grand2.title",
	locationKey: "room.ppr.location",
	amenities: [
		{ icon: "icon-bed",    count: 2 },
		{ icon: "icon-bath",   count: 2 },
		{ icon: "icon-levels", count: 2 },
	],
	price:      "฿15,000",
	heroImage:  { src: heroImg, alt: "Grand 2 - living area" },
	descriptionKeys: [
		"room.grand2.desc.1",
		"room.grand2.desc.2",
		"room.grand2.desc.3",
	],
	gallery: [
		{ src: img2,  alt: "Grand 2 - view 2", wide: true },
		{ src: img3,  alt: "Grand 2 - view 3" },
		{ src: img4,  alt: "Grand 2 - view 4" },
		{ src: img5,  alt: "Grand 2 - view 5" },
		{ src: img6,  alt: "Grand 2 - view 6" },
		{ src: img7,  alt: "Grand 2 - view 7" },
		{ src: img8,  alt: "Grand 2 - view 8" },
		{ src: img9,  alt: "Grand 2 - view 9" },
		{ src: img10, alt: "Grand 2 - view 10" },
		{ src: img11, alt: "Grand 2 - view 11" },
		{ src: img12, alt: "Grand 2 - view 12", wide: true },
	],
	floorPlan: [
		{ src: imgPlan1, alt: "Grand 2 - floor plan 1" },
		{ src: imgPlan2, alt: "Grand 2 - floor plan 2" },
	],
});
