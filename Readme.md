# Layer-cake, an image compositing tool

<p align="center">
  <img src="docs/images/cake.webp" />
</p>

Creating a generative collection of images, for say, a NFT drop, is like making a cake.

## Install, build

```bash
yarn
yarn build
```

## [Image directory](Layering.md)

- [Meows(DAO)](layered-assets/meowsdao)
- [GloGang](layered-assets/glo-gang)

## [Project config](Example.md)

Following the project config link reveals a complete example, however, once files are placed in `layer_assets` specifying the order the layers are to be composed is pretty useful. Note within the `Project Config` `layer order` must correspond with `trait folders`.

```typescript
...
      layer_order: [
        'Background',
        'Fur',
        'Ears',
        'Eyes',
        'Nose',
        'Brows',
        'Nipples',
        'Headwear',
        'Glasses',
        'Collar',
        'Signature',
      ],
...
```

### resume_folder

Leave this blank at first to create an output folder and composite images.

Once image composition is completed, you may place the name of the output folder in this field, in order to pick up where you left off with uploading etc.

### upload_images_to_ipfs

If true, and images are ready for upload, the system will upload to nft.storage in small batches over time.

The system will frequently save state while allowing the service to "rest". If you need to Ctrl-C out, don't do it when it's saving state please (but rather, just as it starts uploading a block of assets).

Once the state is saved for a successfully uploaded block of assets, they will not be uploaded again. This means if you exit and then re-enter this mode, it will skip over finished assets and generally pick up where it left off.

### upload_metadata_to_ipfs

If true, and metadata is ready for upload, the system will upload to nft.storage in small batches.

The process of managing batches and state is the same as for upload_images_to_ipfs, so the same notes above, apply equally here.

### image_outputs

By default, the original image size from the layers, will be output in the 'original' folder.

Here, you may specify additional output image sizes.

The `tag` property is used to organize the outputs in folders.

The `ipfs_tag` (generally a single character) is used to signify whether the given output should be uploaded to IPFS (empty means no), and is used as a suffix to name the file in the output directories as well as in IPFS. E.g., you might have an 'icon' output with an ipfs_tag of 's' (for small); this will be named something like 0001s.png, and would be addressed in IPFS via [CID]/0001s.png.

## Run

```bash
yarn ts-node ./src/index.ts
```

## Lint

```bash
yarn run prettier
```

## Specify rare layer files

Name an input file appended with '\_r' or '\_u', followed by numbers, to signify the file should have an enforced rarity.

Name an input file similar to Hat_r12.png to signify that the given file may be used 12% of the time in the relevant (sub) population.

A name similar to Hat_r01.png will be interpreted to mean the file may be used 0.01% of the time.

(Note this implies there is no way to express e.g. 0.1% at present.)

A name similar to Hat_u12.png will be used at most 12 times.

In the event that the stated percentage would imply less than one allowed usage, exactly one will be allowed.
