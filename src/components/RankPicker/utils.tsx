import React from 'react';

import WhiteBeltImg from '../../assests/belt colors/white.jpg';
import OrangeBeltImg from '../../assests/belt colors/orange.jpg';
import BlueBeltImg from '../../assests/belt colors/blue.jpg';
import YellowBeltImg from '../../assests/belt colors/yellow.jpg';
import GreenBeltImg from '../../assests/belt colors/green.jpg';
import BrownBeltImg from '../../assests/belt colors/brown.jpg';
import ShoDanBeltImg from '../../assests/belt colors/sho-dan.jpg';
import NiDanBeltImg from '../../assests/belt colors/ni-dan.jpg';
import SanDanBeltImg from '../../assests/belt colors/san-dan.jpg';
import YonDanBeltImg from '../../assests/belt colors/yon-dan.jpg';
import { Ranks, katas } from '../../consts';

const isInRange = (markValue: Ranks, sliderMarks: Ranks[]) =>
  markValue >= sliderMarks[0] && markValue <= sliderMarks[1];

export const getMarks = (sliderRangeValues: Ranks[]): any => [
  {
    value: Ranks.WHITE,
    label: (
      <img
        style={{ opacity: isInRange(Ranks.WHITE, sliderRangeValues) ? 1 : 0.2 }}
        src={WhiteBeltImg}
        alt=""
      />
    ),
  },
  {
    value: Ranks.ORANGE,
    label: (
      <img
        style={{
          opacity: isInRange(Ranks.ORANGE, sliderRangeValues) ? 1 : 0.2,
        }}
        src={OrangeBeltImg}
        alt=""
      />
    ),
  },
  {
    value: Ranks.BLUE,
    label: (
      <img
        style={{ opacity: isInRange(Ranks.BLUE, sliderRangeValues) ? 1 : 0.2 }}
        src={BlueBeltImg}
        alt=""
      />
    ),
  },
  {
    value: Ranks.YELLOW,
    label: (
      <img
        style={{
          opacity: isInRange(Ranks.YELLOW, sliderRangeValues) ? 1 : 0.2,
        }}
        src={YellowBeltImg}
        alt=""
      />
    ),
  },
  {
    value: Ranks.GREEN,
    label: (
      <img
        style={{ opacity: isInRange(Ranks.GREEN, sliderRangeValues) ? 1 : 0.2 }}
        src={GreenBeltImg}
        alt=""
      />
    ),
  },
  {
    value: Ranks.BROWN,
    label: (
      <img
        style={{ opacity: isInRange(Ranks.BROWN, sliderRangeValues) ? 1 : 0.2 }}
        src={BrownBeltImg}
        alt=""
      />
    ),
  },
  {
    value: Ranks.SHODAN,
    label: (
      <img
        style={{
          opacity: isInRange(Ranks.SHODAN, sliderRangeValues) ? 1 : 0.2,
        }}
        src={ShoDanBeltImg}
        alt=""
      />
    ),
  },
  {
    value: Ranks.NIDAN,
    label: (
      <img
        style={{ opacity: isInRange(Ranks.NIDAN, sliderRangeValues) ? 1 : 0.2 }}
        src={NiDanBeltImg}
        alt=""
      />
    ),
  },
  {
    value: Ranks.SANDAN,
    label: (
      <img
        style={{
          opacity: isInRange(Ranks.SANDAN, sliderRangeValues) ? 1 : 0.2,
        }}
        src={SanDanBeltImg}
        alt=""
      />
    ),
  },
  {
    value: Ranks.YONDAN,
    label: (
      <img
        style={{
          opacity: isInRange(Ranks.YONDAN, sliderRangeValues) ? 1 : 0.2,
        }}
        src={YonDanBeltImg}
        alt=""
      />
    ),
  },
];

export const getRankKatas = (rank: Ranks): string[] => katas[rank];

export const getKatasForRange = (rankRange: Ranks[]) => {
  let katas: string[] = [];
  for (let i = rankRange[0]; i <= rankRange[1]; i++) {
    katas = [...katas, ...getRankKatas(i)];
  }

  return katas;
};

export const randomKata = (katas: string[]): string =>
  katas[Math.floor(Math.random() * katas.length)];
