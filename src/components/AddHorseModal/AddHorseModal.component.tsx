import * as React from 'react';
import {
  DialogContent,
  DialogTitle,
  Dialog,
  TextField,
  DialogActions,
  Button,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { addHorse } from '../../redux/horses/horses.actions';
import { connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

interface Props {
  open: boolean;
  handleClose: () => void;
}

interface HorseToAdd {
  name: string;
  favouriteFood: string;
  height: string;
  weight: string;
}

const AddHorseModal: React.FC<Props> = ({ open, handleClose }) => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (data: HorseToAdd) => {
    const isValid = await trigger('name');

    if (!isValid) {
      return;
    }

    const updatedHorseValues = {
      name: data.name,
      profile: {
        favouriteFood: data.favouriteFood,
        physical: {
          height: Number(data.height),
          weight: Number(data.weight),
        },
      },
    };
    dispatch(addHorse(updatedHorseValues));
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>Add horse</DialogTitle>
        <DialogContent>
          <TextField
            {...register('name', { required: true })}
            name={'name'}
            autoFocus
            margin="dense"
            id="name"
            label="Name *"
            type="text"
            fullWidth
            variant="standard"
            error={!!errors.name}
            helperText={!!errors.name && 'Please fill required field'}
          />
          <TextField
            {...register('favouriteFood')}
            name="favouriteFood"
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
            margin="dense"
            id="name"
            label="Height"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  addHorse: (item: any) => dispatch(addHorse(item)),
});

export default connect(null, mapDispatchToProps)(AddHorseModal);
