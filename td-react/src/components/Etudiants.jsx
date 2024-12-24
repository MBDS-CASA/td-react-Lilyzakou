import React, { Fragment } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import data from '../data.json';

function Etudiants() {
  const studentsData = data.map(item => item.student);

  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentsData.map((student, index) => (
              <TableRow key={index}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.firstname}</TableCell>
                <TableCell>{student.lastname}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}

export default Etudiants;