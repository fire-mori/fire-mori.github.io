import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { Horse } from '../HorseList/HorseList.component';

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

  const rows = horses.map((horse: Horse) => {
    const { profile, name } = horse;
    const { favouriteFood, physical } = profile;
    return createData(name, favouriteFood, physical.weight, physical.height);
  });

  return (
    <TableContainer
      component={Paper}
      sx={{ marginBottom: '40px', width: '100%' }}
    >
      <Table aria-label="customized table">
        <TableHead sx={{ backgroundColor: '#1976d2' }}>
          <TableRow>
            <TableCell sx={{ color: '#ffffff' }}>Horse name</TableCell>
            <TableCell sx={{ color: '#ffffff' }} align="right">
              Favourite food
            </TableCell>
            <TableCell sx={{ color: '#ffffff' }} align="right">
              Weight
            </TableCell>
            <TableCell sx={{ color: '#ffffff' }} align="right">
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
