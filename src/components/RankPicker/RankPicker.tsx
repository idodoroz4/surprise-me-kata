import React from 'react';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { getKatasForRange, getMarks, randomKata } from './utils';
import { Ranks } from '../../consts';
import { Button } from '@mui/material';
import Logo from '../../assests/logo/logo.png';

type RankPickerProps = {};

const RankPicker: React.FC<RankPickerProps> = () => {
  const defaultValue = [Ranks.WHITE, Ranks.YONDAN];
  const [v, setV] = React.useState<any>(defaultValue);
  const [kataName, setKataName] = React.useState<string>('');
  const marks = getMarks(v);

  return (
    <Stack
      sx={{
        height: 700,
        width: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      spacing={3}
      direction="column"
    >
      <img src={Logo} alt="" style={{ marginBottom: '20px' }} />
      <Slider
        sx={{ color: 'white', right: 75 }}
        orientation="vertical"
        defaultValue={defaultValue}
        max={10}
        min={1}
        value={v}
        onChange={(e: any) => setV(e.target.value)}
        valueLabelDisplay="off"
        marks={marks}
      />
      <div>{kataName}</div>
      <Button
        sx={{
          color: 'white',
          textTransform: 'unset',
          fontSize: '24px',
          borderColor: 'white',
        }}
        variant="outlined"
        onClick={() => setKataName(randomKata(getKatasForRange(v)))}
      >
        Surprise Me
      </Button>
    </Stack>
  );
};

export default RankPicker;
