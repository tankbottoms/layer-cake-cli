import { MeowStatName } from './meow-stats'
import { TestStatName } from './test-stats';

const boost_max: number = 100;
const half: number = .5;

export type Stat = {
    stat_name: MeowStatName | TestStatName,
    trigger_keywords: string[],
    max_keywords: string[]
};
  
export function random_birthday(min_years: number, max_years: number): number {
  const range = max_years - min_years;
  const age = min_years + Math.random() * range;
  const days_ago = age * 365;
  const d = new Date();
  d.setDate(d.getDate() - days_ago);
  return d.getTime();
};

