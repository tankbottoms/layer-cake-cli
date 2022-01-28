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

The Bored Ape Yacht Club, No. 1420 or referred to as The One, Four-twenty (derivative) Movement DAO Genesis utility-NFT Collection, comprising of 4,444 uniquely composited primate.

Four-twenty received a Message so powerful; it literally blew his eyes out.  Fully under the psychedelic influences of couch rescued blotter-paper, industrial ether, and questionable browned mushrooms - which were all consumed without question.  

Four-twenty forgot how fully opposite-Michelin-star eating mushrooms were, almost reflexive, despite the subsequent gagging response.  None of this actually mattered, the Message, as if spoken to him by Jane Goodall herself, instructed Four-twenty, to cross space, time, and cartoon boundaries, to the instant reality, to his far-distant progeny and guide them, clearly not in psychedelic trip nutrition, but in coordination.

“What is the point of walking upright”, pondered Four-twenty. If communities could easily pool resources, share-ideas, responsibility, oversight, perhaps decentralized governance has a chance. Luckily, Four-twenty was able to capture his thoughts and feelings using the primitive method of photography, while to us images appear to encode an isolated sensory activity. It was only a matter of time until the discovery of chromo-luminescent-micro-antagonistic encoding by acoustic variances, or audio encoding in surrounding objects given several tens of millions of factors in camera resolution. 

Four-twenty\’s marginal confidence in our current generation, travelled to this point, when the minimum technical requirement existed to encode, coupled with the preservation of such images on to IPFS and the blockchain Ethereum. The One - Four-twenty’s impossible journey to us captured in all its technicolor glory, will now serves as the utility bestowed upon individuals who have expressed aptitude and passion for decentralized finance, development, coordination while pooling resources and facilitating the community as they vet what issues, movements, and actions are of priority. 

The Bored Ape Yacht Club Four-twenty derivative Movement DAO Genesis NFT is both a name-drop-keyword-packed title and the Movement community utility token offered to established proven DAO participants and Discord community members alike to bootstrap the governance to manage the Movement DAO’s public endowment and its assets in perpetuity. 
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
    name: `BAYC-1420`,
    symbol: 'MOV-1420',
    description: bayc_description,
    birthdate: `${moment(iso_datetime_now).subtract(365 + random(365 * 2), "days").toISOString()}`,
    background_colors: bayc_colors,
    minter: `tankbottoms.eth`,
    creators: [`Movement DAO, <info@move.xyz>`, `Natasha Pankina, <me@natasha-pankina.com>`],
    publishers: [`@natasha__pankina`, `@movedotxyz`],
    genres: [`Bored Ape Yacht Club`, `endowment`, `derivative`, `character`, `profile`, 'movements'],
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
    rights: `© 2022 Movement DAO. All rights reserved.`,
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
      max_stacks: 50,
      images_per_stack: 50
    }
  ],  
  populations: [            
    {
      name: 'bg',
      layer_order: ['Background_color', 'Background_pattern', 'T-shirt', 'Fur', 'Ears', 'Face', 'Ape'],
      population_size: 2222,
    },        
    {
      name: 't-shirts',
      layer_order: ['Background', 'T-shirt_color', 'T-shirt_pattern', 'Fur', 'Ears', 'Face', 'Ape'],
      population_size: 2222,
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