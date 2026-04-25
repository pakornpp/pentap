/**
 * Centralised room prices.
 * Edit this file to update prices across the accommodation listing and all room detail pages.
 */
export const PRICES = {
	ppr: {
		standard1: { price: "฿9,000" },
		superior1: { price: "฿10,000" },
		deluxe1a:  { price: "฿11,000" },
		deluxe1b:  { price: "฿13,000" },
		superior2: { price: "฿13,000" },
		deluxe2:   { price: "฿14,000" },
		grand2:    { price: "฿15,000" },
	},
	pph: {
		standard: { price: "<s>฿6,500</s> ฿6,000", note: "<span data-i18n=\"room.pph.standard.note\"></span>" },
		vip:      { price: "<s>฿9,000</s> ฿8,500", note: "<span data-i18n=\"room.pph.vip.note\"></span>" },
	},
	ppa: {
		studio: { price: "฿4,500" },
		vip:    { price: "฿8,500" },
	},
};
