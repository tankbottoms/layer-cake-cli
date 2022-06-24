const baseUrl = '';

const asBase64 = true;

type Layers = { [trait: string]: string };

export const layerOrdering = [
	'Background',
	'Fur',
	'Ears',
	'Brows',
	'Eyes',
	'Glasses',
	'Headwear',
	'Nose',
	'T-shirt',
	'Pattern',
	'Signature'
];

// TODO: return the SVG and not base64 data
export async function getLayeredSvg({ layers }: { layers: Layers }) {
	let svgImageString = '';
	let svgs: string[] = [];
	for (const key of layerOrdering) {
		const value = layers[key];
		if (!value || value === 'Nothing') continue;
		const src = `${baseUrl}/layers/${key}/${value}.svg`;
		const response = await fetch(src);

		if (asBase64) {
			const reader = new FileReader();
			reader.readAsDataURL(await response.blob());
			svgImageString += await new Promise((resolve) => {
				reader.onloadend = function () {
					const base64data = reader.result;
					const image = `<image x="50%" y="50%" width="1000" xlink:href="${base64data}" style="transform: translate(-500px, -500px)" />`;
					resolve(image);
				};
			});
		} else {
			svgs = [...svgs, await response.text()];
		}
	}
	return asBase64 ? svgImageString : svgs;
}
