import { KataNames } from '../../consts';

import mokso from '../../assests/audio/commands/mokso.mp3';
import yoy from '../../assests/audio/commands/yoy.mp3';

// White Belt
import taikyoku_sono_ichi from '../../assests/audio/kata_names/taikyoku sono ichi.mp3';
import taikyoku_sono_ni from '../../assests/audio/kata_names/taikyoku sono ni.mp3';
import sokugi_taikyoku_sono_ichi from '../../assests/audio/kata_names/sokugi taikyoku sono ichi.mp3';

// Orange Belt
import taikyoku_sono_san from '../../assests/audio/kata_names/taikyoku sono san.mp3';
import sokugi_taikyoku_sono_ni from '../../assests/audio/kata_names/sokugi taikyoku sono ni.mp3';
import sokugi_taikyoku_sono_san from '../../assests/audio/kata_names/sokugi taikyoku sono san.mp3';

// Blue Belt
import pinan_sono_ichi from '../../assests/audio/kata_names/pinan sono ichi.mp3';
import pinan_sono_ni from '../../assests/audio/kata_names/pinan sono ni.mp3';
import sanchin from '../../assests/audio/kata_names/sanchin.mp3';

// Yellow Belt
import pinan_sono_san from '../../assests/audio/kata_names/pinan sono san.mp3';
import pinan_sono_yon from '../../assests/audio/kata_names/pinan sono yon.mp3';
import tsukino_kata from '../../assests/audio/kata_names/tsuki no kata.mp3';
import yantsu from '../../assests/audio/kata_names/yansu.mp3';

// Green Belt
import pinan_sono_go from '../../assests/audio/kata_names/pinan sono go.mp3';
import tekki_sono_ichi from '../../assests/audio/kata_names/Tekki sono ichi.mp3';
import geksai_sono_ichi from '../../assests/audio/kata_names/geksai sono ichi.mp3';
import geksai_sono_ni from '../../assests/audio/kata_names/geksai sono ni.mp3';

// Brown Belt
import tekki_sono_ni from '../../assests/audio/kata_names/Tekki sono ni.mp3';
import geksai_sono_san from '../../assests/audio/kata_names/geksai sono san.mp3';
import saifa from '../../assests/audio/kata_names/Saifa.mp3';

// shodan
import seienchin from '../../assests/audio/kata_names/seienchin.mp3';
import garyo from '../../assests/audio/kata_names/Garyu.mp3';
import basai from '../../assests/audio/kata_names/basai.mp3';
import tekki_sono_san from '../../assests/audio/kata_names/tekki sono san.mp3';

// nidan
import seipai from '../../assests/audio/kata_names/Seipai.mp3';

// sandan
import kanku from '../../assests/audio/kata_names/kanku.mp3';

// yondan
import tensho from '../../assests/audio/kata_names/tensho.mp3';
import sushiho from '../../assests/audio/kata_names/sushiho.mp3';

const kataSounds = {
  [KataNames.Taikyoku_Sono_Ichi]: new Audio(taikyoku_sono_ichi),
  [KataNames.Taikyoku_Sono_Ni]: new Audio(taikyoku_sono_ni),
  [KataNames.Sokugi_Taikyoku_Sono_Ichi]: new Audio(sokugi_taikyoku_sono_ichi),

  [KataNames.Taikyoku_Sono_San]: new Audio(taikyoku_sono_san),
  [KataNames.Sokugi_Taikyoku_Sono_Ni]: new Audio(sokugi_taikyoku_sono_ni),
  [KataNames.Sokugi_Taikyoku_Sono_San]: new Audio(sokugi_taikyoku_sono_san),

  [KataNames.Pinan_Sono_Ichi]: new Audio(pinan_sono_ichi),
  [KataNames.Pinan_Sono_Ni]: new Audio(pinan_sono_ni),
  [KataNames.Sanchin]: new Audio(sanchin),

  [KataNames.Pinan_Sono_San]: new Audio(pinan_sono_san),
  [KataNames.Pinan_Sono_Yon]: new Audio(pinan_sono_yon),
  [KataNames.Yantsu]: new Audio(yantsu),
  [KataNames.Tsuki_No_Kata]: new Audio(tsukino_kata),

  [KataNames.Pinan_Sono_Go]: new Audio(pinan_sono_go),
  [KataNames.Geksai_Sono_Ichi]: new Audio(geksai_sono_ichi),
  [KataNames.Geksai_Sono_Ni]: new Audio(geksai_sono_ni),
  [KataNames.Tekki_Sono_Ichi]: new Audio(tekki_sono_ichi),

  [KataNames.Saifa]: new Audio(saifa),
  [KataNames.Geksai_Sono_San]: new Audio(geksai_sono_san),
  [KataNames.Tekki_Sono_Ni]: new Audio(tekki_sono_ni),

  [KataNames.Basai]: new Audio(basai),
  [KataNames.Seienchin]: new Audio(seienchin),
  [KataNames.Garyu]: new Audio(garyo),
  [KataNames.Tekki_Sono_San]: new Audio(tekki_sono_san),

  [KataNames.Seipai]: new Audio(seipai),

  [KataNames.Kanku]: new Audio(kanku),

  [KataNames.Sushiho]: new Audio(sushiho),
  [KataNames.Tensho]: new Audio(tensho),
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const mokso_delay = 5000;
const kata_name_delay = mokso_delay + 3000;
const yoy_delay = kata_name_delay + 2000;

export const play = (kataName: KataNames) => {
  sleep(mokso_delay).then(() => new Audio(mokso).play());
  sleep(kata_name_delay).then(() => kataSounds[kataName].play());
  sleep(yoy_delay).then(() => new Audio(yoy).play());
};
