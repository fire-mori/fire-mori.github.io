import * as React from 'react';
import { Horse } from '../HorseList/HorseList.component';
import { TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { updateHorses } from '../../redux/horses/horses.actions';
import { connect, useDispatch } from 'react-redux';

interface Props {
  horse: Horse;
  onSave: () => void;
}

interface HorseToUpdate {
  name: string;
  favouriteFood: string;
  height: string;
  weight: string;
}

const HorseCardEditMode: React.FC<Props> = ({ horse, onSave }) => {
  const { id, name, profile } = horse;
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (data: HorseToUpdate) => {
    const result = await trigger('name');

    if (result) {
      const updatedHorseValues = {
        id: id,
        name: data.name,
        profile: {
          favouriteFood: data.favouriteFood,
          physical: {
            height: Number(data.height),
            weight: Number(data.weight),
          },
        },
      };
      dispatch(updateHorses(updatedHorseValues, horse.id));
      onSave();
    }
  };

  return (
    <div style={{ width: '80%' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('name', { required: true })}
          name={'name'}
          defaultValue={name}
          autoFocus
          margin="dense"
          id="name"
          label="Name*"
          type="text"
          fullWidth
          variant="standard"
          error={!!errors.name}
          helperText={!!errors.name && 'Please fill required field'}
        />
        <TextField
          {...register('favouriteFood')}
          name="favouriteFood"
          defaultValue={profile.favouriteFood}
          margin="dense"
          id="name"
          label="Favourite food"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          {...register('weight')}
          name="weight"
          defaultValue={profile.physical.weight}
          margin="dense"
          id="name"
          label="Weight"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          {...register('height')}
          name="height"
          defaultValue={profile.physical.height}
          margin="dense"
          id="name"
          label="Height"
          type="text"
          fullWidth
          variant="standard"
        />
        <Button sx={{ marginTop: '20px' }} variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

// TODO remove any
const mapDispatchToProps = (dispatch: any) => ({
  editHorse: (item: any, id: string) => dispatch(updateHorses(item, id)),
});

export default connect(null, mapDispatchToProps)(HorseCardEditMode);
