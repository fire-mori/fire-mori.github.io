import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Horse } from "../HorseList/HorseList.component";
import { Icon } from "./HorseCard.styled";
import Fab from "@mui/material/Fab";
import HorseCardEditMode from "./HorseCardEditMode.component";
import HorseCardViewMode from "./HorseCardViewMode.component";

interface Props {
  horse: Horse;
  addToCompare: (value: Horse) => void;
  removeFromCompare: (value: Horse) => void;
  selected: Horse[];
}

export const HorseCard: React.FC<Props> = ({
  horse,
  addToCompare,
  removeFromCompare,
  selected,
}) => {
  const { name } = horse;
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const [toggled, setToggled] = React.useState(false);
  const [editMode, setEditMode] = React.useState(false);

  return (
    <Card
      onClick={() => {
        !editMode && setToggled(!toggled);
      }}
      sx={{
        minWidth: 275,
        flexDirection: "row",
        display: "flex",
        position: "relative",
      }}
    >
      <Icon color={`#${randomColor}`} />
      <CardContent
        sx={!toggled ? { alignItems: "center", display: "flex" } : null}
      >
        {!editMode && (
          <Typography
            sx={{ fontSize: 24, marginBottom: 0 }}
            color="text.primary"
            gutterBottom
          >
            {name} |
            {selected && selected.includes(horse) ? (
              <Button
                color="secondary"
                onClick={() => removeFromCompare(horse)}
                sx={{ marginLeft: "10px" }}
              >
                Remove from compare table
              </Button>
            ) : (
              <Button
                color="primary"
                onClick={() => addToCompare(horse)}
                sx={{ marginLeft: "10px" }}
                disabled={Boolean(selected.length >= 2)}
              >
                Add to compare table
              </Button>
            )}
          </Typography>
        )}
        {toggled && !editMode && <HorseCardViewMode horse={horse} />}
        {editMode && (
          <HorseCardEditMode horse={horse} onSave={() => setEditMode(false)} />
        )}
      </CardContent>
      <Fab
        sx={{ position: "absolute", bottom: 10, right: 10 }}
        color={!editMode ? "primary" : "secondary"}
        aria-label="edit"
        onClick={() => {
          setEditMode(!editMode);
        }}
      >
        {!editMode ? "Edit" : "Exit"}
      </Fab>
    </Card>
  );
};
