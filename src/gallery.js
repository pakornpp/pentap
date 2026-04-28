/**
 * Builds the HTML string for the preview gallery (first 3 images).
 * The first image gets the hero modifier; the last gets an overlay showing
 * how many more images are available.
 *
 * @param {Array<{ src: string, alt: string, wide?: boolean }>} images
 * @returns {string}
 */
export function buildPreviewGallery(images) {
	const previewCount = Math.min(3, images.length);
	const remaining = images.length - previewCount;
	return images.slice(0, previewCount)
		.map(({ src, alt }, i) => {
			const isHero = i === 0;
			const isLast = remaining > 0 && i === previewCount - 1;
			return `<div class="room-gallery-item${isHero ? " room-gallery-item--hero" : ""}${isLast ? " warehouse-gallery-item--more" : ""}">				<img src="${src}" alt="${alt}" data-lightbox-index="${i}" style="cursor:zoom-in;">
				${isLast ? `<div class="warehouse-gallery-more-overlay">+${remaining}</div>` : ""}
			</div>`;
		})
		.join("\n");
}

/**
 * Builds the HTML string for the full popup gallery (all images).
 *
 * @param {Array<{ src: string, alt: string, wide?: boolean }>} images
 * @returns {string}
 */
export function buildPopupGallery(images) {
	return images
		.map(({ src, alt, wide }, i) =>
			`<div class="room-gallery-item${wide ? " room-gallery-item--wide" : ""}">
				<img src="${src}" alt="${alt}" data-popup-index="${i}" style="cursor:zoom-in;">
			</div>`
		)
		.join("\n");
}
