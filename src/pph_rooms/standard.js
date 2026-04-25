import "../styles.css";
import { setLanguage } from "../i18n.js";
import { initNav } from "../nav.js";
import { renderRoomPage } from "../ppr_rooms/roomPage.js";
import { PRICES } from "../prices.js";

import heroImg from "../assets/pph/standard/standard-1.webp";
import img2    from "../assets/pph/standard/standard-2.webp";
import img3    from "../assets/pph/standard/standard-3.webp";
import img4    from "../assets/pph/standard/standard-4.webp";
import img5    from "../assets/pph/standard/standard-5.webp";
import img6    from "../assets/pph/standard/standard-6.webp";
import img7    from "../assets/pph/standard/standard-7.webp";
import img8    from "../assets/pph/standard/standard-8.webp";
import img9    from "../assets/pph/standard/standard-9.webp";

window.setLanguage = setLanguage;

initNav("index.html");

renderRoomPage({
	titleKey:    "room.pph.standard.title",
	locationKey: "room.pph.location",
	amenities: [
		{ icon: "icon-bed",  count: 1 },
		{ icon: "icon-bath", count: 1 },
	],
	price:     PRICES.pph.standard.price,
	priceNote: PRICES.pph.standard.note,
	heroImage: { src: heroImg, alt: "PPH Standard - room view" },
	descriptionKeys: [
		"room.pph.desc.1",
	],
	gallery: [
		{ src: img2, alt: "PPH Standard - view 2", wide: true },
		{ src: img3, alt: "PPH Standard - view 3" },
		{ src: img4, alt: "PPH Standard - view 4" },
		{ src: img5, alt: "PPH Standard - view 5" },
		{ src: img6, alt: "PPH Standard - view 6", wide: true },
		{ src: img7, alt: "PPH Standard - view 7" },
		{ src: img8, alt: "PPH Standard - view 8" },
		{ src: img9, alt: "PPH Standard - view 9", wide: true },
	],
});
