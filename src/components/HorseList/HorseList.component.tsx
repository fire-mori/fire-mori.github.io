import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchHorses } from '../../redux/horses/horses.actions';
import { HorseCard } from '../HorseCard/HorseCard.component';
import { Grid, Pagination, Fab } from '@mui/material';
import { PAGE_SIZE } from '../../config/constants';
import { HorseCompareTable } from '../HorseCompareTable/HorseCompareTable.component';
import AddHorseModal from '../AddHorseModal/AddHorseModal.component';

export interface Physical {
  height: number;
  weight: number;
}

export interface Profile {
  favouriteFood: string;
  physical: Physical;
}

export interface Horse {
  id: string;
  name: string;
  profile: Profile;
}

interface StateProps {
  error: any;
  loading: boolean;
  items: Horse[];
}

interface Props {
  horses: StateProps;
}

const HorseList: React.FC<Props> = ({ horses }) => {
  const dispatch = useDispatch();
  const pageSize = PAGE_SIZE;

  React.useEffect(() => {
    dispatch(fetchHorses());
  }, [dispatch]);

  const { error, loading, items } = horses;
  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState(items.slice(0, pageSize));
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState<Horse[]>([]);

  React.useEffect(() => {
    setData(items.slice(0, pageSize));
  }, [items, pageSize]);

  const handleChange = (value: number) => {
    setPage(value);
    setData(items.slice(0 + pageSize * (value - 1), pageSize * value));
  };

  const addToCompare = (item: Horse) => {
    setSelectedItems((selectedItems) => [...selectedItems, item]);
  };

  const removeFromCompare = (item: Horse) => {
    const filteredItems = selectedItems.filter((horse) => horse.id !== item.id);
    setSelectedItems((selectedItems) => filteredItems);
  };

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  const handleClose = () => setModalOpen(false);

  return (
    <>
      <div style={{ width: '50%', height: '200px' }}>
        {selectedItems.length > 0 ? (
          <HorseCompareTable horses={selectedItems} />
        ) : (
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '168px',
              backgroundColor: '#dddddd',
              borderRadius: '10px',
            }}
          >
            Please pick 2 items to compare
          </div>
        )}
      </div>
      <Grid sx={{ width: '50%', position: 'relative' }} container spacing={2}>
        {data.map((horse) => (
          <Grid key={horse.id} item xs={12}>
            <HorseCard
              horse={horse}
              addToCompare={addToCompare}
              removeFromCompare={removeFromCompare}
              selected={selectedItems}
            />
          </Grid>
        ))}

        {items?.length > pageSize && (
          <Pagination
            sx={{ margin: '20px auto' }}
            count={Math.ceil(items.length / pageSize)}
            page={page}
            onChange={(_event, newPage: number) => handleChange(newPage)}
          />
        )}
      </Grid>
      <Fab
        sx={{ position: 'fixed', bottom: 10, right: 10 }}
        color="primary"
        aria-label="add"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Add
      </Fab>

      {isModalOpen && (
        <AddHorseModal handleClose={handleClose} open={isModalOpen} />
      )}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  horses: state.horses,
});

export default connect(mapStateToProps)(HorseList);
