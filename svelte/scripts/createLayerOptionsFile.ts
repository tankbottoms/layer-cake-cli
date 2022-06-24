import fs from 'fs';

const layerDirectory = './static/layers';

const layerJsonPath = './src/data/layerOptions.json';

/**
 * Given a structure of nested directories:
 * - baseDirectory
 *          - Body
 *              - Yellow.png
 *          - Both_Hands
 *              - Nothing.png
 *          - Choker
 *              - Choker.png
 *          ....
 * Take each of the files and add the asset name to the layerJson
 */

function getDirectories(srcpath: string) {
	return fs.readdirSync(srcpath).filter((file) => fs.lstatSync(`${srcpath}/${file}`).isDirectory());
}

function extractUniqueAssetsFromDirs(base: string) {
	const layerJson: { [x: string]: Set<string> } = {};

	const characterLayers = getDirectories(base);

	characterLayers.forEach((layer) => {
		layerJson[layer] = new Set();
	});

	characterLayers.forEach((layer) => {
		const layerDirectory = `${base}/${layer}`;
		const layerFiles = fs.readdirSync(layerDirectory);
		layerFiles.forEach((file) => {
			const fileName = file.replace('.svg', '');
			layerJson[layer].add(fileName);
		});
	});
	const formattedLayerJson = {} as { [x: string]: string[] };

	// Cast the sets to arrays
	Object.keys(layerJson).forEach((layer) => {
		formattedLayerJson[layer] = Array.from(layerJson[layer]);
	});
	fs.writeFileSync(layerJsonPath, JSON.stringify(formattedLayerJson, null, 2));
}

extractUniqueAssetsFromDirs(layerDirectory);
