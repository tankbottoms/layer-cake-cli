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

export const bayc_description: string = `bayc movedao.eth mascot`;

export const baycConfig: ProjectConfig = {
  name: `bayc`,
  // stunt_populations_to: 100,
  upload_images_to_ipfs: false,
  upload_metadata_to_ipfs: false,
  shuffle_assets: true,
  resume_folder: '',
  re_generate_collages: true,
  metadata_outputs: ['ethereum'],
  metadata_file_extension: false,
  hide_rarity_names: true,
  rotated_images_allowed: 50,
  // asset_origin: 0,
  metadata_input: {
    name: `BAYC MOVEDAO.ETH GENESIS`,
    symbol: 'bayc-move',
    description: bayc_description,
    birthdate: `${moment(iso_datetime_now).subtract(365 + random(365 * 2), "days").toISOString()}`,
    background_colors: bayc_colors,
    minter: `0xb69EB6EbCB98FfC27FAF84C5734cbc201Dec0153`,
    creators: [`me@natasha-pankina.com`, `0xb69EB6EbCB98FfC27FAF84C5734cbc201Dec0153@ethmail.cc`],
    publishers: [`@natasha__pankina`, `MoveDAO.eth`],
    genres: [`bayc`, `character`, `profile`],
    tags: [`ETH`],
    drop_date: `${iso_datetime_now}`,
    native_size: '2084x2084',
    more_info_link: 'https://move.xyz',
    include_total_population_in_name: true,
    royalties: {
      artist_address: `0xB772C38aCa8fac0FB50Fd01899ef3Dfa8B7DF628`,
      artist_percentage: 10,
      additional_payee: '0xb69EB6EbCB98FfC27FAF84C5734cbc201Dec0153',
      additional_payee_percentage: 10,
    },
    rights: `© 2022 Move.xyz DAO. All rights reserved.`,
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
      layer_order: ['Background_color', 'Background_pattern', 'T-shirt', 'Ape'],
      population_size: 2_222,
    },        
    {
      name: 't-shirts',
      layer_order: ['Background', 'T-shirt_color', 'T-shirt_pattern', 'Ape'],
      population_size: 2_222,
    },
  ],
  anim_outputs: [],
  collage_outputs: [
    // collage10000,
    // collage4000,
    collage4444,
    // collage5000,
    collageTwitter1200x675,
    collageTwitter1500x500,
    collageDiscord600x240,
  ],   
  re_generate_metadata_cid: false,
  excluded_layers_from_metadata: [],
};