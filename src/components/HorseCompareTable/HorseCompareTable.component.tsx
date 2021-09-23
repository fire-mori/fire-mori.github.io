import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Horse } from "../HorseList/HorseList.component";

interface Props {
  horses: Horse[];
}

export const HorseCompareTable: React.FC<Props> = ({ horses }) => {
  const createData = (
    name: string,
    favouriteFood: string,
    weight: string | number,
    height: string | number
  ) => {
    return { name, favouriteFood, weight, height };
  };

  console.log(horses);

  const rows = horses.map((horse: Horse) => {
    const { profile, name } = horse;
    const { favouriteFood, physical } = profile;
    return createData(name, favouriteFood, physical.weight, physical.height);
  });

  return (
    <TableContainer
      component={Paper}
      sx={{ marginBottom: "40px", width: "50%" }}
    >
      <Table aria-label="customized table">
        <TableHead sx={{ backgroundColor: "#1976d2" }}>
          <TableRow>
            <TableCell sx={{ color: "#ffffff" }}>Horse name</TableCell>
            <TableCell sx={{ color: "#ffffff" }} align="right">
              Favourite food
            </TableCell>
            <TableCell sx={{ color: "#ffffff" }} align="right">
              Weight
            </TableCell>
            <TableCell sx={{ color: "#ffffff" }} align="right">
              Height
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.favouriteFood}</TableCell>
              <TableCell align="right">{row.weight}</TableCell>
              <TableCell align="right">{row.height}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
