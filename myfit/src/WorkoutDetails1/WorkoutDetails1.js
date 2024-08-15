import React from "react";
import { useParams } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableCell } from '@mui/material';

const HeaderTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: '#a35a97',
  color: theme.palette.common.white, 
  fontWeight: 'bold',
  fontSize: '24px',
  borderBottom: '2px solid #FFFFFF',
}));

const ContentTableCell = styled(TableCell)(({ theme }) => ({
  color: '#333333', 
  fontSize: '20px',
  borderBottom: '1px solid #E0E0E0', 
}));

const WorkoutDetails1 = ({ workouts }) => {
  const { title } = useParams();
  const workout = workouts.find((workout) => workout.title === title);
  console.log(title);

  if (!workout) {
    return <div>Workout not found</div>;
  }

  return (
    <div className="workout-detail-section">
      <h1 className="workout-title-header" style={{fontSize:'2.7rem',fontWeight:'bold'}}>{workout.title}</h1>
      <img src={workout.img} alt={workout.title} className="workout-image" />
      <div className="instructions-section">
        <div className="summary-container" style={{margin:'0 15px 15px',paddingLeft:'15px',fontFamily:'roboto-medium,sans-serif',fontSize:'22px',marginTop:'3rem',marginBottom:'3rem',width:'80%',marginLeft:'3cm'}}>
          <div className="summary-content" style={{margin:'0 15px 15px',paddingLeft:'15px',borderLeft:'5px solid #a35a97',fontFamily:'roboto-medium,sans-serif',fontSize:'24px'}}>
            <div className="field-item">
              <div className="field-item-content" style={{fontSize:'28px'}}>
                {workout.summary}
              </div>
            </div>
          </div>
          <div style={{background:'#f5f5f5',marginBottom:'25px',padding:'15px',borderTop:'5px solid #a35a97',borderRadius:'2px',textAlign:'center',textTransform:'uppercase',paddingTop:'2rem',fontSize:'21px'}}>
            <h5 style={{fontSize:'1.7rem',lineHeight:1.4,marginTop:0,marginBottom:'0.4em',color:'#1a1a1a',fontFamily:'opensans-heavy'}}>Instructions</h5>
          </div>
          <div className="instructions-list">
            <ol>
              {workout.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
        <div className="exercise-table-container">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <HeaderTableCell>Exercise</HeaderTableCell>
                  <HeaderTableCell align="right">Sets</HeaderTableCell>
                  <HeaderTableCell align="right">Reps</HeaderTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {workout.exercises.map((exercise, index) => (
                  <TableRow key={index}>
                    <ContentTableCell>{exercise.name}</ContentTableCell>
                    <ContentTableCell align="right">{exercise.sets}</ContentTableCell>
                    <ContentTableCell align="right">{exercise.reps}</ContentTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default WorkoutDetails1;
