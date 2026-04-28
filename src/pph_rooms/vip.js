import "../styles.css";
import { setLanguage } from "../i18n.js";
import { initNav } from "../nav.js";
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
	heroImage: { src: heroImg, alt: "PPH VIP - room view" },
	descriptionKeys: [
		"room.pph.desc.1",
	],
	gallery: [
		{ src: img2,  alt: "PPH VIP - view 2",  wide: true },
		{ src: img3,  alt: "PPH VIP - view 3" },
		{ src: img4,  alt: "PPH VIP - view 4" },
		{ src: img5,  alt: "PPH VIP - view 5" },
		{ src: img6,  alt: "PPH VIP - view 6",  wide: true },
		{ src: img7,  alt: "PPH VIP - view 7" },
		{ src: img8,  alt: "PPH VIP - view 8" },
		{ src: img9,  alt: "PPH VIP - view 9" },
		{ src: img10, alt: "PPH VIP - view 10", wide: true },
		{ src: img11, alt: "PPH VIP - view 11" },
		{ src: img12, alt: "PPH VIP - view 12" },
	],
	mapUrl: PPH_MAP_URL,
});
