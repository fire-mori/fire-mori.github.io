import React from "react";
import { connect, useDispatch } from "react-redux";
import { fetchHorses } from "../../redux/horses/horses.actions";
import { BasicCard } from "../card/card.component";
import Grid from "@mui/material/Grid";

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

const List: React.FC<Props> = ({ horses }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchHorses());
  }, [dispatch]);

  const { error, loading, items } = horses;

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Grid sx={{ width: "30%" }} container spacing={2}>
      {items.map((horse) => (
        <Grid item xs={12}>
          <BasicCard horse={horse} />
        </Grid>
      ))}
    </Grid>
  );
};

const mapStateToProps = (state: any) => ({
  horses: state.horses,
});

export default connect(mapStateToProps)(List);
