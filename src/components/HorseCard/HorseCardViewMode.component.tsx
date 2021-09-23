import * as React from 'react';
import { Horse } from '../HorseList/HorseList.component';
import Typography from '@mui/material/Typography';

interface Props {
  horse: Horse;
}

const HorseCardViewMode: React.FC<Props> = ({ horse }) => {
  const { profile } = horse;
  const { favouriteFood, physical } = profile;

  return (
    <>
      <Typography sx={{ fontSize: 14 }} color="text.secondary">
        favourite food: {favouriteFood}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary">
        weight:{' '}
        {physical.weight && physical.weight !== 0 ? physical.weight : null}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary">
        height:{' '}
        {physical.height && physical.height !== 0 ? physical.height : null}
      </Typography>
    </>
  );
};

export default HorseCardViewMode;
