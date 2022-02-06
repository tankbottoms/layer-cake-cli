/* eslint-disable max-len */

import moment from 'moment';
import { CollageOutput, ProjectConfig } from '../interfaces';
import { random } from '../utils';
import {
  collage11110,
  collage1600,
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
Introducing the Ascended Apes, a derivative NFT collection of Bored Ape Yacht Club Number 1420 proffered by the Movement DAO.

The Ascended Apes are 4,444 psychedelically clad technicolor anthropoids, each on their own mission to change the world.  

As a subset of the primate population, they stumbled upon the rare psilocybe movementsis fungi from its unique characteristic of bioluminescence. Upon the fungi consumption, the once Bored Ape suffered immediate and extreme exophthalmos. Physically and metaphorically, the Bored Ape's view of the world forever changed.

The emergence of the Ascended Apes, now straddling the 3rd and 5th dimensions, navigating solely through their 3rd eye, could see only a world without problems. The Ascended Apes alchemized their helplessness (and poop throwing) into empowerment, fear into love, scarcity into abundance. The population manifested a platform to organize, channel, shape movements into action. 

The evolution of grunts becoming votes, bananas becoming tokens, despair into dialog, troops were able to organize and “Move” quickly and confidently. They called this unstoppable force of love and impact a Movement.

The Ascended Ape collection represents ambassadors of change, those who empower and facilitate the community to be heard and shape impact.
`;

const population_size = 10;

export const baycConfig: ProjectConfig = {
  name: `bayc-20220204`,
  // stunt_populations_to: 50,
  upload_images_to_ipfs: true,
  upload_metadata_to_ipfs: false,
  shuffle_assets: false,
  resume_folder: '', // '20220205-03283885',
  re_generate_collages: false,
  metadata_outputs: ['ethereum'],
  metadata_file_extension: false,
  hide_rarity_names: true,
  rotated_images_allowed: 0, //random(20),
  // mirror_images_allowed: random(2222),
  // asset_origin: 0,
  metadata_input: {
    name: `BAYC 1420 Movement DAO Ambassador`,
    symbol: 'MOVE-',
    description: bayc_description,
    birthdate: `${moment(iso_datetime_now).subtract(365 + random(365 * 2), "days").toISOString()}`,
    background_colors: bayc_colors,
    minter: `tankbottoms.eth`,
    creators: [`Movement DAO, <info@move.xyz>`, `Natasha Pankina, <me@natasha-pankina.com>`],
    publishers: [`@movedotxyz`],
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
    rights: `© 2022 Movement DAO, Natasha Pankina`,
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
      max_stacks: 5,
      images_per_stack: 10
    }
  ],  
  populations: [                        
    {
      name: 'bg',
      layer_order: [
        'Background_Color', 
        'Background_Pattern', 
        'Shadow',
        'T-shirt', 
        'Fur', 
        'Ears', 
        'Face', 
        'Ape',
        'Accessory'
        ],
      population_size: population_size,
    },        
    {
      name: 'bg_eyes',
      layer_order: [
        'Background_Color', 
        'Background_Pattern', 
        'Shadow',
        'T-shirt', 
        'Fur', 
        'Ears', 
        'Face', 
        'Eyes', 
        'Ape',
        'Accessory'
        ],
      population_size: population_size,
    },    
    {
      name: 'bg_mouth',
      layer_order: [
        'Background_Color', 
        'Background_Pattern', 
        'Shadow',
        'T-shirt',  
        'Fur', 
        'Ears', 
        'Face', 
        'Eyes', 
        'Ape',
        'Accessory'
        ],
      population_size: population_size,
    },        
    {
      name: 'stolen_t-shirts',
      layer_order: [
        'Background',         
        'Shadow',
        'Fur', 
        'Face', 
        'Ears',
        'Chest',
        'Nipples',
        'Ape',
        'Medallion',
        'Accessory'
        ],
      population_size: population_size,
    },    
    {
      name: 'stolen_t-shirts_eyes',
      layer_order: [
        'Background', 
        'Shadow',
        'Fur', 
        'Face', 
        'Ears',
        'Eyes',
        'Chest',
        'Nipples',
        'Ape',
        'Medallion',
        'Accessory'        
        ],
      population_size: population_size,
    },    
    {
      name: 'stolen_t-shirts_mouth',
      layer_order: [
        'Background',
        'Shadow',
        'Fur', 
        'Face', 
        'Ears',
        'Eyes',
        'Chest',
        'Nipples',
        'Ape',
        'Medallion',
        'Accessory'        
        ],
      population_size: population_size,
    },
    {
      name: 't-shirts',
      layer_order: [
        'Background',
        'Shadow',
        'Fur', 
        'Face', 
        'Ears', 
        'T-shirt_Color', 
        'T-shirt_Pattern', 
        'Ape',
        'Accessory'
        ],
      population_size: population_size + 250 + 100,
    },    
    {
      name: 't-shirts_eyes',
      layer_order: [
        'Background', 
        'Shadow',
        'Fur', 
        'Face', 
        'Ears', 
        'Eyes',
        'T-shirt_Color', 
        'T-shirt_Pattern', 
        'Ape',
        'Accessory'
        ],
      population_size: population_size + 100,
    },    
    {
      name: 't-shirts_mouth',
      layer_order: [
        'Background', 
        'Shadow',
        'Fur', 
        'Face',
        'Ears', 
        'Eyes',        
        'T-shirt_Color', 
        'T-shirt_Pattern', 
        'Ape',
        'Accessory'
        ],
      population_size: population_size + 100,
    },    
    {
      name: 'tiedye_stolen_t-shirts',
      layer_order: [
        'Background',
        'Shadow',
        'Fur', 
        'Face', 
        'Ears',
        'Eyes',
        'Chest',
        'Nipples',
        'Ape',        
        'Accessory'        
        ],
      population_size: population_size + 10,
    },    
    {
      name: 'tiedye_stolen_t-shirts_eyes',
      layer_order: [
        'Background',
        'Shadow',
        'Fur', 
        'Face', 
        'Ears',
        'Eyes',
        'Chest',
        'Nipples',
        'Ape',     
        'Accessory'   
        ],
      population_size: population_size + 10,
    },    
    {
      name: 'tiedye_stolen_t-shirts_mouth',
      layer_order: [
        'Background',
        'Shadow',
        'Fur', 
        'Face', 
        'Ears',
        'Eyes',
        'Chest',
        'Nipples',
        'Ape',
        'Accessory'   
        ],
      population_size: population_size + 10,
    },
    {
      name: 'tiedye_t-shirts',
      layer_order: [
        'Background',
        'Shadow',
        'Fur', 
        'Face', 
        'Ears', 
        'Eyes',
        'T-shirt',         
        'Ape',
        'Accessory'
        ],
      population_size: population_size + 10,
    },        
    {
      name: 'tiedye_t-shirts_eyes',
      layer_order: [
        'Background',
        'Shadow',
        'Fur', 
        'Face', 
        'Ears', 
        'Eyes',
        'T-shirt',       
        'Ape',
        'Accessory'
        ],
      population_size: population_size + 4,
    },    
    {
      name: 'tiedye_t-shirts_mouth',
      layer_order: [
        'Background',
        'Shadow',
        'Fur', 
        'Face', 
        'Ears', 
        'Eyes',
        'T-shirt',         
        'Ape',
        'Accessory'
        ],
      population_size: population_size + 100,
    },    
  ],
  anim_outputs: [],
  collage_outputs: [    
    collage1600,
    collage4444,
    collage4000,  
    collageDiscord600x240,
    collageTwitter1200x675,
    collageTwitter1500x500,  
  ],   
  re_generate_metadata_cid: true,
  excluded_layers_from_metadata: [],
};