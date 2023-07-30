import React from 'react';

export enum Ranks {
  WHITE = 1,
  ORANGE = 2,
  BLUE = 3,
  YELLOW = 4,
  GREEN = 5,
  BROWN = 6,
  SHODAN = 7,
  NIDAN = 8,
  SANDAN = 9,
  YONDAN = 10,
}

export const katas: any = {
  [Ranks.WHITE]: [
    'Taikyoku Sono Each',
    'Taikyoku Sono Ni',
    'Sokugi Taikyoku Sono Each',
  ],
  [Ranks.ORANGE]: [
    'Taikyoku Sono Sun',
    'Sokugi Taikyoku Sono Ni',
    'Sokugi Taikyoku Sono Sun',
  ],
  [Ranks.BLUE]: ['Pinan Sono Each', 'Pinan Sono Ni', 'Sanchin'],
  [Ranks.YELLOW]: [
    'Pinan Sono San',
    'Yantsu',
    'Pinan Sono Yon',
    'Tsuki No Kata',
  ],
  [Ranks.GREEN]: [
    'Pinan Sono Go',
    'Geksai Sono Each',
    'Geksai Sono Ni',
    'Tekki Sono Each',
    'Taikyoku Sono Each Ura',
    'Taikyoku Sono Ni Ura',
    'Taikyoku Sono San Ura',
  ],
  [Ranks.BROWN]: [
    'Geksai Sono Sun',
    'Tekki Sono Ni',
    'Saifa',
    'Pinan Sono Each Ura',
    'Pinan Sono Ni Ura',
    'Pinan Sono Sun Ura',
    'Pinan Sono Yon Ura',
    'Pinan Sono Go Ura',
  ],
  [Ranks.SHODAN]: ['Seienchin', 'Garyu', 'Tekki Sono Sun', 'Bassai'],
  [Ranks.NIDAN]: ['Seipai'],
  [Ranks.SANDAN]: ['Kanku'],
  [Ranks.YONDAN]: ['Sushiho', 'Tensho'],
};
