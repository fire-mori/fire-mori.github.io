import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Horse } from "../list/list.component";
import { Icon } from "./card.styled";

interface Props {
  horse: Horse;
}

export const BasicCard: React.FC<Props> = ({ horse }) => {
  const { name, profile } = horse;
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const [toggled, setToggled] = React.useState(false);

  return (
    <Card sx={{ minWidth: 275, flexDirection: "row", display: "flex" }}>
      <Icon color={`#${randomColor}`} />
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
          {name}
        </Typography>
        {toggled && (
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
        <Button
          sx={{ marginTop: "10px" }}
          variant="text"
          onClick={() => setToggled(!toggled)}
        >
          {toggled ? "Hide details" : "Show details"}
        </Button>
      </CardContent>
    </Card>
  );
};
