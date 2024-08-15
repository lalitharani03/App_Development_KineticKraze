import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './diet.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    align: 'right'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(time, dietchart) {
  return { time, dietchart };
}

const rows1 = [
    createData('6:30 AM','Cucumber Detox Water (1 glass)'),
  createData('8:00 AM','Mixed Nuts (25 grams)'),
  createData('12:00 PM', 'Skimmed Milk Paneer (100 grams)'),
  createData('2:00 PM', 'Mixed Vegetable Salad (1 katori)'),
  createData('2:10 PM', 'Dal(1 katori) Gajar Matar Sabzi (1katori) and Roti (1 roti/chappathi)'),
  createData('4:00 PM', 'Cut Fruits (1 cup) Buttermilk (1 glass)'),
  createData('5:30 PM', 'Tea with Less Sugar and Miilk (1 teacup)'),
  createData('8:50 PM', 'Mixed Vegetable Salad (1 katori) and Dal (1 katori) Lauki Sabzi (1 katori)'),
  createData('9:00 PM','Roti (1 roti/chappathi)'),
];
const rows2 = [
    createData('6:30 AM','Cucumber Detox Water (1 glass)'),
  createData('8:00 AM','Curd(1.5 katori) Mixed Vegetable Stuffed Roti (2 pieces)'),
  createData('12:00 PM', 'Skimmed Milk Paneer (100 grams)'),
  createData('2:00 PM', 'Mixed Vegetable Salad (1 katori)'),
  createData('2:10 PM', 'Lentil Curry (0.75 bowl) Methi Rice (0.5 katori)'),
  createData('4:00 PM', 'Apple (0.5 small (2-3/4" dia)) Buttermilk (1 glass)'),
  createData('5:30 PM', 'Coffee with Less Sugar and Miilk (0.5 teacup)'),
  createData('8:50 PM', 'Mixed Vegetable Salad (1 katori) and Sauteed Vegetables with Paneer(1 katori) Roti (1 roti/chappathi)'),
  createData('9:00 PM','Roti (1 roti/chappathi)'),
];
const rows3 = [
    createData('6:30 AM','Cucumber Detox Water (1 glass)'),
  createData('8:00 AM','Curd(1.5 katori) Mixed Vegetable Stuffed Roti (2 pieces)'),
  createData('12:00 PM', 'Skimmed Milk Paneer (100 grams)'),
  createData('2:00 PM', 'Mixed Vegetable Salad (1 katori)'),
  createData('2:10 PM', 'Lentil Curry (0.75 bowl) Methi Rice (0.5 katori)'),
  createData('4:00 PM', 'Apple (0.5 small (2-3/4" dia)) Buttermilk (1 glass)'),
  createData('5:30 PM', 'Coffee with Less Sugar and Miilk (0.5 teacup)'),
  createData('8:50 PM', 'Mixed Vegetable Salad (1 katori) and Sauteed Vegetables with Paneer(1 katori) Roti (1 roti/chappathi)'),
  createData('9:00 PM','Roti (1 roti/chappathi)'),
];
const rows4 = [
    createData('6:30 AM','Cucumber Detox Water (1 glass)'),
  createData('8:00 AM','Curd(1.5 katori) Mixed Vegetable Stuffed Roti (2 pieces)'),
  createData('12:00 PM', 'Skimmed Milk Paneer (100 grams)'),
  createData('2:00 PM', 'Mixed Vegetable Salad (1 katori)'),
  createData('2:10 PM', 'Lentil Curry (0.75 bowl) Methi Rice (0.5 katori)'),
  createData('4:00 PM', 'Apple (0.5 small (2-3/4" dia)) Buttermilk (1 glass)'),
  createData('5:30 PM', 'Coffee with Less Sugar and Miilk (0.5 teacup)'),
  createData('8:50 PM', 'Mixed Vegetable Salad (1 katori) and Sauteed Vegetables with Paneer(1 katori) Roti (1 roti/chappathi)'),
  createData('9:00 PM','Roti (1 roti/chappathi)'),
];
const rows5 = [
    createData('6:30 AM','Cucumber Detox Water (1 glass)'),
  createData('8:00 AM','Curd(1.5 katori) Mixed Vegetable Stuffed Roti (2 pieces)'),
  createData('12:00 PM', 'Skimmed Milk Paneer (100 grams)'),
  createData('2:00 PM', 'Mixed Vegetable Salad (1 katori)'),
  createData('2:10 PM', 'Lentil Curry (0.75 bowl) Methi Rice (0.5 katori)'),
  createData('4:00 PM', 'Apple (0.5 small (2-3/4" dia)) Buttermilk (1 glass)'),
  createData('5:30 PM', 'Coffee with Less Sugar and Miilk (0.5 teacup)'),
  createData('8:50 PM', 'Mixed Vegetable Salad (1 katori) and Sauteed Vegetables with Paneer(1 katori) Roti (1 roti/chappathi)'),
  createData('9:00 PM','Roti (1 roti/chappathi)'),
];
const rows6 = [
    createData('6:30 AM','Cucumber Detox Water (1 glass)'),
  createData('8:00 AM','Curd(1.5 katori) Mixed Vegetable Stuffed Roti (2 pieces)'),
  createData('12:00 PM', 'Skimmed Milk Paneer (100 grams)'),
  createData('2:00 PM', 'Mixed Vegetable Salad (1 katori)'),
  createData('2:10 PM', 'Lentil Curry (0.75 bowl) Methi Rice (0.5 katori)'),
  createData('4:00 PM', 'Apple (0.5 small (2-3/4" dia)) Buttermilk (1 glass)'),
  createData('5:30 PM', 'Coffee with Less Sugar and Miilk (0.5 teacup)'),
  createData('8:50 PM', 'Mixed Vegetable Salad (1 katori) and Sauteed Vegetables with Paneer(1 katori) Roti (1 roti/chappathi)'),
  createData('9:00 PM','Roti (1 roti/chappathi)'),
];
const rows7 = [
    createData('6:30 AM','Cucumber Detox Water (1 glass)'),
  createData('8:00 AM','Curd(1.5 katori) Mixed Vegetable Stuffed Roti (2 pieces)'),
  createData('12:00 PM', 'Skimmed Milk Paneer (100 grams)'),
  createData('2:00 PM', 'Mixed Vegetable Salad (1 katori)'),
  createData('2:10 PM', 'Lentil Curry (0.75 bowl) Methi Rice (0.5 katori)'),
  createData('4:00 PM', 'Apple (0.5 small (2-3/4" dia)) Buttermilk (1 glass)'),
  createData('5:30 PM', 'Coffee with Less Sugar and Miilk (0.5 teacup)'),
  createData('8:50 PM', 'Mixed Vegetable Salad (1 katori) and Sauteed Vegetables with Paneer(1 katori) Roti (1 roti/chappathi)'),
  createData('9:00 PM','Roti (1 roti/chappathi)'),
];

export default function Diet() {

  return (
    <>
     <div className="logo">
                <a href="/home"><img src="https://img.freepik.com/free-vector/gradient-gym-page-linkedin-profile-picture_742173-11442.jpg?t=st=1721897230~exp=1721900830~hmac=ccf5482db677e982247255862244e61a146e2156d2a820f092b0112355444862&w=740" alt='travel logo' height={40} width={50}/></a>
                <h3>KineticKraze</h3>
         </div>
    <div className='dietplan1'>
        <h2>Day 1: Diet Plan</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>Day 1</StyledTableCell>
            <StyledTableCell align="left">Diet Chart</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows1.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align='center'>
                {row.time}
              </StyledTableCell>
              <StyledTableCell align="left">{row.dietchart}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 
    </div>
    <div className='dietplan2'>
        <h2>Day 2: Diet Plan</h2>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>Day 2</StyledTableCell>
            <StyledTableCell align="left">Diet Chart</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align='center'>
                {row.time}
              </StyledTableCell>
              <StyledTableCell align="left">{row.dietchart}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <div className='dietplan3'>
        <h2>Day 3: Diet Plan</h2>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>Day 3</StyledTableCell>
            <StyledTableCell align="left">Diet Chart</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows3.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align='center'>
                {row.time}
              </StyledTableCell>
              <StyledTableCell align="left">{row.dietchart}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <div className='dietplan4'>
        <h2>Day 4: Diet Plan</h2>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>Day 4</StyledTableCell>
            <StyledTableCell align="left">Diet Chart</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows4.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align='center'>
                {row.time}
              </StyledTableCell>
              <StyledTableCell align="left">{row.dietchart}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <div className='dietplan5'>
        <h2>Day 5: Diet Plan</h2>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>Day 5</StyledTableCell>
            <StyledTableCell align="left">Diet Chart</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows5.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align='center'>
                {row.time}
              </StyledTableCell>
              <StyledTableCell align="left">{row.dietchart}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <div className='dietplan6'>
        <h2>Day 6: Diet Plan</h2>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>Day 6</StyledTableCell>
            <StyledTableCell align="left">Diet Chart</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows6.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align='center'>
                {row.time}
              </StyledTableCell>
              <StyledTableCell align="left">{row.dietchart}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <div className='dietplan7'>
        <h2>Day 7: Diet Plan</h2>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>Day 7</StyledTableCell>
            <StyledTableCell align="left">Diet Chart</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows7.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align='center'>
                {row.time}
              </StyledTableCell>
              <StyledTableCell align="left">{row.dietchart}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  );
}