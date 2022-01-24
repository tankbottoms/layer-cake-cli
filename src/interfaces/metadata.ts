export enum Type {
  IMAGE = 'Image',
  VIDEO = 'Video',
};

export interface Metadata {
  dna?: string;
  date?: string;
  birthday?: string;
  // edition: Edition;
  // minter: typeof Minter;
  symbol: string;
  creator: string;
  authors: string[] | string;
  background_colors: string [];  
  image: string;
  icon?: string;
  thumbnail?: string;
  description?: string;
};

export type Extra_Metadata = {};

export const TZIP_Interfaces: string[] = ['TZIP-007-2021-04-17', 'TZIP-016-2021-04-17'];

export interface XTZ_Metadata {
  interfaces?: string[];
  decimals?: string;
  tags?: string[] | string;
  langauge?: string; // 'en'
  artifactUri?: string;
  displayUri?: string;
  thumbnailUri?: string;
  externalUri: string;
};
