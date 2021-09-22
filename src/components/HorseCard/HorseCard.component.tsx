import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Horse } from "../HorseList/HorseList.component";
import { Icon } from "./HorseCard.styled";
import Fab from "@mui/material/Fab";
import HorseCardEditMode from "./HorseCardEditMode.component";

interface Props {
  horse: Horse;
}

export const HorseCard: React.FC<Props> = ({ horse }) => {
  console.log("horse", horse);
  const { name, profile } = horse;
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const [toggled, setToggled] = React.useState(false);

  const [editMode, setEditMode] = React.useState(false);

  return (
    <Card
      sx={{
        minWidth: 275,
        flexDirection: "row",
        display: "flex",
        position: "relative",
      }}
    >
      <Icon color={`#${randomColor}`} />
      <CardContent>
        {!editMode && (
          <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
            {name}
          </Typography>
        )}
        {toggled && !editMode && (
          <>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              favourite food: {profile.favouriteFood}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              weight: {profile.physical.weight}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              height: {profile.physical.height}
            </Typography>
          </>
        )}

        {editMode && <HorseCardEditMode horse={horse} />}

        {!editMode && (
          <Button
            sx={{ marginTop: "10px" }}
            variant="text"
            onClick={() => setToggled(!toggled)}
          >
            {toggled ? "Hide details" : "Show details"}
          </Button>
        )}
      </CardContent>
      <Fab
        sx={{ position: "absolute", bottom: 10, right: 10 }}
        color="primary"
        aria-label="edit"
        onClick={() => {
          setToggled(true);
          setEditMode(true);
        }}
      >
        Edit
      </Fab>
    </Card>
  );
};
