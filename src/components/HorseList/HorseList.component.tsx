import React from "react";
import { connect, useDispatch } from "react-redux";
import { fetchHorses } from "../../redux/horses/horses.actions";
import { HorseCard } from "../HorseCard/HorseCard.component";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import { PAGE_SIZE } from "../../config/constants";
import Fab from "@mui/material/Fab";

import AddHorseModal from "../AddHorseModal/AddHorseModal.component";

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

  React.useEffect(() => {
    setData(items.slice(0, pageSize));
  }, [items, pageSize]);

  console.log("data", data);

  const handleChange = (value: number) => {
    setPage(value);
    setData(items.slice(0 + pageSize * (value - 1), pageSize * value));
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
      <Grid sx={{ width: "50%" }} container spacing={2}>
        {data.map((horse) => (
          <Grid item xs={12}>
            <HorseCard horse={horse} />
          </Grid>
        ))}

        {items?.length > pageSize && (
          <Pagination
            sx={{ margin: "20px auto" }}
            count={Math.ceil(items.length / pageSize)}
            page={page}
            onChange={(_event, newPage: number) => handleChange(newPage)}
          />
        )}
      </Grid>
      <Fab
        sx={{ position: "fixed", bottom: 10, right: 10 }}
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
