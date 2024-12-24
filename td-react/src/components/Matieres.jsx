import React, { Fragment } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import data from '../data.json';

function Matieres() {
  const classData = data.map(item => ({ id: item.unique_id, name: item.course }));

  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Class ID</TableCell>
              <TableCell>Class Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {classData.map((classItem) => (
              <TableRow key={classItem.id}>
                <TableCell>{classItem.id}</TableCell>
                <TableCell>{classItem.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}

export default Matieres;