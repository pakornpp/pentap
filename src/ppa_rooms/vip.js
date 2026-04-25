import "../styles.css";
import { setLanguage } from "../i18n.js";
import { initNav } from "../nav.js";
import { renderRoomPage } from "../ppr_rooms/roomPage.js";
import { PRICES } from "../prices.js";

import heroImg from "../assets/ppa/vip/vip-1.webp";
import img2    from "../assets/ppa/vip/vip-2.webp";
import img3    from "../assets/ppa/vip/vip-3.webp";
import img4    from "../assets/ppa/vip/vip-4.webp";
import img5    from "../assets/ppa/vip/vip-5.webp";
import img6    from "../assets/ppa/vip/vip-6.webp";
import img7    from "../assets/ppa/vip/vip-7.webp";
import img8    from "../assets/ppa/vip/vip-8.webp";
import img9    from "../assets/ppa/vip/vip-9.webp";
import img10   from "../assets/ppa/vip/vip-10.webp";
import img11   from "../assets/ppa/vip/vip-11.webp";
import img12   from "../assets/ppa/vip/vip-12.webp";
import img13   from "../assets/ppa/vip/vip-13.webp";

window.setLanguage = setLanguage;

initNav("index.html");

renderRoomPage({
	titleKey:    "room.ppa.vip.title",
	locationKey: "room.ppa.location",
	amenities: [
		{ icon: "icon-bed",  count: 1 },
		{ icon: "icon-bath", count: 1 },
	],
	price:     PRICES.ppa.vip.price,
	priceNote: PRICES.ppa.vip.note,
	heroImage: { src: heroImg, alt: "PPA VIP - room view" },
	descriptionKeys: [
		"room.ppa.desc.1",
	],
	gallery: [
		{ src: img2,  alt: "PPA VIP - view 2",  wide: true },
		{ src: img3,  alt: "PPA VIP - view 3" },
		{ src: img4,  alt: "PPA VIP - view 4" },
		{ src: img5,  alt: "PPA VIP - view 5" },
		{ src: img6,  alt: "PPA VIP - view 6",  wide: true },
		{ src: img7,  alt: "PPA VIP - view 7" },
		{ src: img8,  alt: "PPA VIP - view 8" },
		{ src: img9,  alt: "PPA VIP - view 9" },
		{ src: img10, alt: "PPA VIP - view 10", wide: true },
		{ src: img11, alt: "PPA VIP - view 11" },
		{ src: img12, alt: "PPA VIP - view 12" },
		{ src: img13, alt: "PPA VIP - view 13" },
	],
});
