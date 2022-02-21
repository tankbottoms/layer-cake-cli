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
  collageOpenSea1200x75,
  collageDiscord600x240,
  collageTwitter1200x675,
  collageTwitter1500x500,
  collage10000,
} from './collages';
const iso_datetime_now = new Date().toISOString();

export const banny_colors = [
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

export const banny_description: string = 
`
This is where a description of the project would go.
`;

const population_size = 250;

export const bannyConfig: ProjectConfig = {
  name: `banny`,
  // stunt_populations_to: 50,
  upload_images_to_ipfs: false,
  upload_metadata_to_ipfs: false,
  shuffle_assets: false,
  resume_folder: '', 
  re_generate_collages: false,
  metadata_outputs: ['ethereum'],
  metadata_file_extension: false,
  hide_rarity_names: true,
  rotated_images_allowed: 0, 
  mirror_images_allowed: 0,
  // asset_origin: 0,
  metadata_input: {
    name: `Juicebox Banny NFT`,
    symbol: 'JBX-',
    description: banny_description,
    birthdate: `${moment(iso_datetime_now).subtract(365 + random(365 * 2), "days").toISOString()}`,
    background_colors: banny_colors,
    minter: `tankbottoms.eth`,
    creators: [`@WagmiStudios`],
    publishers: [`@WagmiStudios`],
    genres: [ `Banny`, `banana`, `character`, `profile` ],
    tags: [`ETH`],
    drop_date: `${iso_datetime_now}`,
    native_size: '1000x1000', // '2084x2084',
    more_info_link: 'https://wagmistudios.xyz',
    include_total_population_in_name: true,
    royalties: {
      artist_address: `wagmistudios.eth`,
      artist_percentage: 0,
      additional_payee: 'juicebox.money',
      additional_payee_percentage: 0,
    },
    rights: `© 2022 JuiceBox DAO, WAGMI Studios.xyz All rights reserved.`,
    decimals: 0,
    generation: 0,
    edition: 0,
  },  
  image_outputs: [
    // feeds into collage, please don't remove.
    { width: 350, height: 350, tag: 'icon', ipfs_tag: 's' }, 
    { width: 512, height: 512, tag: 'profile', ipfs_tag: '' },
    { width: 1_000, height: 1_000, tag: 'image', ipfs_tag: '' },
    // { width: 1_500, height: 1_500, tag: 'image', ipfs_tag: '' },
  ],    
  stacked_gif_outputs: [
    {
      tag: 'stacked-gif',
      source_image_type: 'profile',
      max_stacks: 3,
      images_per_stack: 15
    }
  ],  
  populations: [                        
    {
      name: 'character',
      layer_order: [
        'Background',
        'Character',
        ],
      population_size: 78,
    },        
    {
      name: 'example',
      layer_order: [
        'Background',
        'Body', 
        'Face', 
        'Headgear',
        'Oral_Fixation', 
        'Outfits', 
        'Lower_Accessory', 
        'Hawaiian', 
        'Weapons',
        'In-Hand',
        ],
      population_size: population_size,
    },            
  ],
  anim_outputs: [],
  collage_outputs: [    
    collage1600,
    collage4444,
    collage4000,  
    collageOpenSea1200x75,
    collageDiscord600x240,
    collageTwitter1200x675,
    collageTwitter1500x500,  
  ],   
  re_generate_metadata_cid: true,
  excluded_layers_from_metadata: [],
};