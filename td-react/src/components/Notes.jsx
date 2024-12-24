import React, { Fragment } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import data from '../data.json';

function Notes() {
  const notesData = data.filter(item => item.course.includes('Math') || item.course.includes('Physics') || item.course.includes('Chemistry') || item.course.includes('Biology'));

  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Course</TableCell>
              <TableCell>Student</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Grade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notesData.map((note) => (
              <TableRow key={note.unique_id}>
                <TableCell>{note.course}</TableCell>
                <TableCell>{`${note.student.firstname} ${note.student.lastname}`}</TableCell>
                <TableCell>{note.date}</TableCell>
                <TableCell>{note.grade}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}

export default Notes;