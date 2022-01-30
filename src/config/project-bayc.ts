/* eslint-disable max-len */

import moment from 'moment';
import { CollageOutput, ProjectConfig } from '../interfaces';
import { random } from '../utils';
import {
  collage11110,
  collage4444,
  collage4000,
  collage5000,
  collageDiscord600x240,
  collageTwitter1200x675,
  collageTwitter1500x500,
  collage10000,
} from './collages';
const iso_datetime_now = new Date().toISOString();

export const bayc_colors = [
  'F6A3AD',
  'FF808D',
  'FFAFB9',
  'CBEEC2',
  '8EE9F2',
  'F5F3BA',
  '71CEF3',
  'FCEEB2',
  'FCAD5E',
  'FB6155',
  'E5BBD7',
  'AFD7D0',
];

export const bayc_description: string = 
`
Introducing…

The Bored Ape Yacht Club, No. 1420 or colloquially referred to as Four-twenty presents yet another BAYC derivative NFT Collection, as the Movement DAO Genesis Seed Community Collection.  Comprising of 4,444 psychedelic, questionally posed, images of Four-Twenty.

After ingesting copious amounts ergos fungus, kykeon, Artemisia absinthium, peyote, datura, morning glory, Salvia divinorum, pituri, couch rescued blotter-paper, industrial ether, and questionable browned mushrooms. There was no question, Four-twenty was recieving Messages - it literally blew his eyes out.

This Message, as if spoken to him by Jane Goodall herself, is thought to have instructed Four-twenty, to cross space, time, and cartoon boundaries, and allow himself to be objectified. This objectification's purpose was to incentivize an individual's sense of purpose and community and foster, usher, and guide communities associated with the Movement DAO.

Four-Twenty's likeness molested with titalating unnecessary nipple highlights, as currency for purportedly more evolved individuals, was dubious at best, however, so long as the choosen participated in the movement, he would set aside his judgement and allow himself to be objectified.

The Bored Ape Yacht Club Four-twenty Derivative Movement DAO Genesis NFT is a name-drop-keyword-orgy title with a marginal public good purpose mascarading as a mission statement. Together with scores of technicolor primate-porn disseminated over immutable storage Four-twenty resigned his involvement to a long history of similiarly poor choices.  

This cornucopia of psychedelic evidence stands as tribute to those encouraged to participate in sheparding the Movement DAO's community, its governance, by sequentially pushing buttons, usually coupled with some meaningful distance traveled by a machine pointing device. 
`;

export const baycConfig: ProjectConfig = {
  name: `bayc`,
  // stunt_populations_to: 50,
  upload_images_to_ipfs: false,
  upload_metadata_to_ipfs: false,
  shuffle_assets: true,
  resume_folder: '',
  re_generate_collages: false,
  metadata_outputs: ['ethereum'],
  metadata_file_extension: false,
  hide_rarity_names: true,
  rotated_images_allowed: random(100),
  // asset_origin: 0,
  metadata_input: {
    name: `BAYC 1420 Movement DAO Community Leader NFTs`,
    symbol: 'MOVE-1420',
    description: bayc_description,
    birthdate: `${moment(iso_datetime_now).subtract(365 + random(365 * 2), "days").toISOString()}`,
    background_colors: bayc_colors,
    minter: `tankbottoms.eth`,
    creators: [`Movement DAO, <info@move.xyz>`, `Natasha Pankina, <me@natasha-pankina.com>`],
    publishers: [`@movedotxyz`, `@natasha__pankina`],
    genres: [ `Bored Ape Yacht Club`, `endowment`, `derivative`, `character`, `profile`, 'movements' ],
    tags: [`ETH`],
    drop_date: `${iso_datetime_now}`,
    native_size: '2084x2084',
    more_info_link: 'https://move.xyz',
    include_total_population_in_name: true,
    royalties: {
      artist_address: `0xB772C38aCa8fac0FB50Fd01899ef3Dfa8B7DF628`,
      artist_percentage: 5,
      additional_payee: '0x46D65c64E883f70371A6fcAcB124FB5dd68c9918',
      additional_payee_percentage: 10,
    },
    rights: `© 2022 Movement DAO, BAYC All rights reserved.`,
    decimals: 0,
    generation: 0,
    edition: 0,
  },  
  image_outputs: [
    { width: 350, height: 350, tag: 'icon', ipfs_tag: 's' }, // feeds into collage, please don't remove.
    { width: 512, height: 512, tag: 'profile', ipfs_tag: '' },
    { width: 1_500, height: 1_500, tag: 'image', ipfs_tag: '' },
  ],  
  stacked_gif_outputs: [
    {
      tag: 'stacked-gif',
      source_image_type: 'profile',
      max_stacks: 100,
      images_per_stack: 100
    }
  ],  
  populations: [            
    {
      name: 'bg',
      layer_order: ['Background_color', 'Background_pattern', 'T-shirt', 'Fur', 'Ears', 'Face', 'Ape'],
      population_size: 500,
    },        
    {
      name: 't-shirts',
      layer_order: ['Background', 'T-shirt_color', 'T-shirt_pattern', 'Fur', 'Ears', 'Face', 'Ape'],
      population_size: 500,
    },
    {
      name: 'bg-eyes',
      layer_order: ['Background_color', 'Background_pattern', 'T-shirt', 'Fur', 'Ears', 'Face', 'Eyes', 'Ape'],
      population_size: 500,
    },
    {
      name: 't-shirt_eyes',
      layer_order: ['Background', 'T-shirt_color', 'T-shirt_pattern', 'Fur', 'Ears', 'Face', 'Eyes', 'Ape'],
      population_size: 500,
    },
    {
      name: 'bg_mouth',
      layer_order: ['Background_color', 'Background_pattern', 'T-shirt',  'Fur', 'Ears', 'Face', 'Eyes', 'Ape'],
      population_size: 250,
    },
    {
      name: 't-shirts_mouth',
      layer_order: ['Background', 'T-shirt_color', 'T-shirt_pattern',  'Fur', 'Ears', 'Face', 'Eyes', 'Ape'],
      population_size: 250,
    },
    {
      name: 'naked',
      layer_order: ['Background_color', 'Background_pattern', 'Fur', 'Ears', 'Face', 'Eyes', 'Chest',  'Nipples', 'Ape'],
      population_size: 500,
    },
    {
      name: 'bg_upsidedown',
      layer_order: ['Background_color', 'Background_pattern', 'T-shirt', 'Fur', 'Ears', 'Face', 'Ape'],
      population_size: 222,
    },
    {
      name: 't-shirts_upsidedown',
      layer_order: ['Background_color', 'T-shirt_color', 'T-shirt_pattern', 'Fur', 'Ears', 'Face', 'Ape'],
      population_size: 222,
    },
  ],
  anim_outputs: [],
  collage_outputs: [    
    collage4444,
    collage4000,  
    collageDiscord600x240,
    collageTwitter1200x675,
    collageTwitter1500x500,  
  ],   
  re_generate_metadata_cid: false,
  excluded_layers_from_metadata: [],
};