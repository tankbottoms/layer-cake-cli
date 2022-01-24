import { MEOWSDAO_GNOSIS_SAFE } from './index';

export interface OpenSeaStoreInformation {
  name: string,
  description: string,
  image: string,
  external_link: string,
  seller_fee_basis_points: number, // 100 indicates a 1% seller fee.
  fee_recipient: string, // "0x971B4533EdBFcfE34e0F6eA053D33231a814FD96" // Where seller fees will be paid to  
};

export const opensea_store_information: OpenSeaStoreInformation = {
  "name": "Mr, Whiskers Genesis Collection",
  "description": "",
  "image": "https://openseacreatures.io/image.png",
  "external_link": "https://openseacreatures.io",
  "seller_fee_basis_points": 250, // Indicates a 1% seller fee.
  "fee_recipient": `${MEOWSDAO_GNOSIS_SAFE}` // Where seller fees will be paid to
};