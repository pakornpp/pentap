import "../styles.css";
import { setLanguage } from "../i18n.js";
import { initNav } from "../nav.js";
import { renderRoomPage } from "./roomPage.js";

import heroImg  from "../assets/ppr/superior_2/superior2-1.jpg";
import img2     from "../assets/ppr/superior_2/superior2-2.jpg";
import img3     from "../assets/ppr/superior_2/superior2-3.jpg";
import img4     from "../assets/ppr/superior_2/superior2-4.jpg";
import img5     from "../assets/ppr/superior_2/superior2-5.jpg";
import img6     from "../assets/ppr/superior_2/superior2-6.jpg";
import img7     from "../assets/ppr/superior_2/superior2-7.jpg";
import img8     from "../assets/ppr/superior_2/superior2-8.jpg";
import img9     from "../assets/ppr/superior_2/superior2-9.jpg";
import img10    from "../assets/ppr/superior_2/superior2-10.jpg";
import imgPlan1 from "../assets/ppr/superior_2/superior2-plan1.jpg";
import imgPlan2 from "../assets/ppr/superior_2/superior2-plan2.jpg";

window.setLanguage = setLanguage;

initNav("index.html");

renderRoomPage({
	titleKey:    "room.superior2.title",
	locationKey: "room.ppr.location",
	amenities: [
		{ icon: "icon-bed",    count: 2 },
		{ icon: "icon-bath",   count: 2 },
		{ icon: "icon-levels", count: 2 },
	],
	price:      "฿13,000",
	heroImage:  { src: heroImg, alt: "Superior 2 - living area" },
	descriptionKeys: [
		"room.superior2.desc.1",
		"room.superior2.desc.2",
		"room.superior2.desc.3",
	],
	gallery: [
		{ src: img2,  alt: "Superior 2 - view 2", wide: true },
		{ src: img3,  alt: "Superior 2 - view 3" },
		{ src: img4,  alt: "Superior 2 - view 4" },
		{ src: img5,  alt: "Superior 2 - view 5" },
		{ src: img6,  alt: "Superior 2 - view 6" },
		{ src: img7,  alt: "Superior 2 - view 7" },
		{ src: img8,  alt: "Superior 2 - view 8" },
		{ src: img9,  alt: "Superior 2 - view 9" },
		{ src: img10, alt: "Superior 2 - view 10", wide: true },
	],
	floorPlan: [
		{ src: imgPlan1, alt: "Superior 2 - floor plan 1" },
		{ src: imgPlan2, alt: "Superior 2 - floor plan 2" },
	],
});
