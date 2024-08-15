// import React from 'react';
// import WorkoutDetails1 from './WorkoutDetails1/WorkoutDetails1';
// import { useParams } from 'react-router-dom';

// export default function PersonalWorkout({ workouts }) {
//   const { userId } = useParams(); // Assuming userId is used elsewhere, like for fetching personalized data

//   return (
//     <div>
//       <h1 style={{fontFamily:'opensans-heavy',lineHeight:'1.1',textAlign:'center',marginBottom:'25px',fontSize:'3rem',fontWeight:'bolder'}}>
//          Workouts
//       </h1>
//       <p style={{textAlign:'center',margin:'0 auto 25px',maxWidth:'800px',fontSize:'1.3rem',lineHeight:'1.6',textRendering:'optimizeLegibility'}}>
//         Our workouts database has hundreds of free workout plans designed for building muscle. 
//         The workouts are created by fitness experts and come with a free downloadable PDF you can reference when training. 
//         Use the filters below to find the best workout for your goal, training experience and equipment access.
//       </p>
//       <WorkoutDetails1 workouts={workouts} />
//     </div>
//   );
// }

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import './PersonalWorkout.css';


// Styled Components
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

const data2 = [
  {
    id:'5',
    img: "https://cdn.muscleandstrength.com/sites/default/files/fit_woman_doing_dumbbell_workout.jpg",
    title: '8 Week Beginner Fat Loss Workout for Women',
    summary: 'This 4-day workout plan combines weight training and cardio to help you get leaner! Each day is separated into upper and lower body sessions with core work mixed into both.',
    maingoal: 'Lose Fat',
    type: 'Split',
    level: 'Beginner',
    duration: '8 Weeks',
    perweek: '4',
    time: '60-75 minutes',
    equipment: 'Barbell, Bodyweight, Cables, Dumbbells, Exercise Ball, Machines',
    gender: 'Female',
    description1: "Many members of the M&S community are active and regular gym-goers, or they train hard at home, but there are always people new to fitness joining us to learn more about how to lose weight, improve their wellness, and create a new lifestyle for themselves.",
    description2: "If this sounds like you, then you'll likely enjoy this 8-week program to help you start your fitness journey on the right foot.",
    description3: "This routine will be followed every week on the same schedule. Your job is to get familiar with the movements, challenge yourself to train harder each day, and track your progress along the way. You should also start to develop new habits to support this lifestyle so you enjoy the progress along the way.",
    nutrition: "Nutrition First",
    nutrition1: "There are so many diet plans and ideas that it can make your head spin.",
    nutrition2: "For these eight weeks, we suggest that you refer to our fat loss expert guide, and follow this as best as you can. Keep it this simple for now, and you’ll find this process to be a lot easier. Trust me, there will be plenty of time to learn more about specific diets and strategies down the road.",
    img1: "https://cdn.muscleandstrength.com/sites/default/files/images/2023/08/overhead_shot_of_female_making_protein_shake.jpg",
    supplements: "Supplements",
    s1: "Let’s also talk briefly about supplements. There are a lot of pre-workouts, fat burners, and other weight loss products on the market. You can certainly add them into this program if you want, but make sure you avoid these two mistakes:",
    s2: "1. Don’t out-supplement a bad diet. Food matters more than supplements. If you have a tight budget and have to make a decision, buy food every single time.",
    s3: "2. Keep it simple.",
    s4: "There is a theme to this program. We don’t want you to feel overwhelmed.",
    s5: "A multivitamin and protein powder is great to start with. If you feel like you can take on a pre-workout or fat loss supplement as well, that is okay, but they aren’t necessary. Talk to your doctor about any supplement you’re thinking of buying first as well so you know you’re healthy enough to have it.",
    img2: "https://cdn.muscleandstrength.com/sites/default/files/images/2023/08/fit_woman_getting_ready_to_jog_outside.jpg",
    zone2: "Zone 2 Cardio",
    z1: "Cardiovascular exercise is going to be a big part of this program, specifically Zone 2 Cardio. This is where we’re going to get into the weeds a little bit, but it will be worth it.",
    z2: "Many cardio programs used to be centered around five heart-rate “zones.” The higher the number, the more intense the exercise is and the higher your heart rate goes. For beginners, doing cardio that would be the equivalent of the second or third heart rate zone (70-80% of your max heart rate).",
    z3: "To determine your max heart rate, take the number 220 and subtract your age. So, if you’re 40 years old, 220-40 would be 180 beats per minute. The 70-80% range would be 70 to 80 percent of that 180.",
    z4: "Zone 2 cardio calls for you to keep your heart rate at the 70% range throughout the entire time you do cardio. So, if we go back to our previous example, 70% of 180 would be 126 beats per minute. You would track this on the machine you’re using for cardio if it has heart rate capability or with a monitor that you can wear.",
    z5: "The key to Zone 2 is that you maintain that consistent pace from start to finish. You can use the elliptical, rower, treadmill, or do any other form of cardio that you like. As long as you’re either tracking the heart rate and it stays in that 70% range, or if you feel like you’re giving a seven out of ten effort, you’re good.",
    z6: "Beginners on this program will do four cardio sessions a week for 20-30 minutes per session at the Zone 2 pace. 20 minutes is the minimum, but if you have time to do 30, then you should. You will perform these sessions after your weight training. So, you will train with weights first, then do cardio after. This approach will help you use your strength with the weights without affecting your cardio performance.",
    stitle: '8 Week Beginner Fat Loss Workout for Women',
    day1: "Workout #1 - Upper Body",
    exercises: [
      { Exercise: 'Incline Dumbbell Press', Sets: 3, Reps: '12,10,8' },
      { Exercise: 'Bent-Over Barbell Row', Sets: 3, Reps: '12,10,8' },
      { Exercise: 'Smith Machine Shoulder Press', Sets: 3, Reps: '12,10,8' },
      { Exercise: 'Alternate Dumbbell Curl', Sets: 3, Reps: '12,10,8' },
      { Exercise: 'Lying Triceps Extension', Sets: 3, Reps: '12,10,8' },
      { Exercise: 'Lying Leg Raise', Sets: 3, Reps: '12,12,12' },
      { Exercise: 'Do 20-30 minutes of Zone 2 cardio' },
    ],
    day2: "Workout #2 - Lower Body",
    exercises1: [
      { Exercise: 'Goblet Squat', Sets: 3, Reps: '12,10,8' },
      { Exercise: 'Stiff Leg Deadlift', Sets: 3, Reps: '12,10,8' },
      { Exercise: 'Leg Press', Sets: 3, Reps: '12,10,8' },
      { Exercise: 'Walking Lunge', Sets: 3, Reps: '12,10,8' },
      { Exercise: 'Seated Calf Raise', Sets: 3, Reps: '12,10,8' },
      { Exercise: 'Crunches', Sets: 3, Reps: '12,10,8' },
      { Exercise: 'Do 20-30 minutes of Zone 2 cardio' },
    ],
    day3: "Workout #3 - Upper Body",
    exercises2: [
      { Exercise: 'Wide Grip Lat Pull Down', Sets: 3, Reps: '12, 10, 8' },
      { Exercise: 'Flat Bench Press', Sets: 3, Reps: '12, 10, 8' },
      { Exercise: 'Lateral Raise', Sets: 3, Reps: '12, 10, 8' },
      { Exercise: 'Hammer Dumbbell Curl', Sets: 3, Reps: '12, 10, 8' },
      { Exercise: 'Straight Bar Tricep Extension', Sets: 3, Reps: '12, 10, 8' },
      { Exercise: 'Abdominal Air Bike', Sets: 3, Reps: '12, 12, 12' },
      { Exercise: 'Do 20-30 minutes of Zone 2 cardio' },
    ],
    day4: "Workout #4 - Lower Body",
    exercises3: [
      { Exercise: 'Squat', Sets: 3, Reps: '12, 10, 8' },
      { Exercise: 'Deadlift', Sets: 3, Reps: '12, 10, 8' },
      { Exercise: 'Dumbbell Split Up', Sets: 3, Reps: '12, 10, 8' },
      { Exercise: 'Abductor Machine', Sets: 3, Reps: '12, 10, 8' },
      { Exercise: 'Adductor Machine', Sets: 3, Reps: '12, 10, 8' },
      { Exercise: 'Seated Calf Raise', Sets: 3, Reps: '12, 10, 8' },
      { Exercise: 'Exercise Ball Crunch', Sets: 3, Reps: '12, 12, 12' },
      { Exercise: 'Do 20-30 minutes of Zone 2 cardio' },
    ],
    day5: "Workout #5 - Complete Upper Body Dumbbell Workout",
    exercises4: [
      { Exercise: 'One Arm Dumbbell Rows', Sets: 4, Reps: '8-10 Each' },
      { Exercise: 'Dumbbell Arnold Press', Sets: 4, Reps: '8-10' },
      { Exercise: 'Incline Dumbbell Bench Press', Sets: 4, Reps: '8-12' },
      { Exercise: 'Chest Supported Dumbbell Row', Sets: 3, Reps: '8-12' },
      { Exercise: 'Dumbbell Pinwheel Curl', Sets: 2, Reps: '8-12' },
      { Exercise: 'Overhead Dumbbell Tricep Extension', Sets: 3, Reps: '8-12' },
      { Exercise: 'Dumbbell Shrug', Sets: 3, Reps: '12-15' },
    ],
    conclusion: "Conclusion",
    c1: "Even though we want this to be an easy process, we’re well aware that you may have questions along the way. The good news is that there is a comments section at the bottom of this article. Feel free to leave questions there, and we’ll do our best to help you out along the way.",
    c2: "Make sure you share your progress as well. We want to celebrate the wins with you."
  }
];

const PersonalWorkout = () => {
  const { id } = useParams();
  const workout = data2.find((item) => item.id === id);

  if (!workout) return <div>Workout not found</div>;

  return (
    <div className="personal-workout-container">
      <h1 style={{textAlign:'center',fontWeight:'bold'}}>{workout.title}</h1>
      <img src={workout.img} alt={workout.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
      <p>{workout.summary}</p>
      <h2><strong>Main Goal:</strong> {workout.maingoal}</h2>
      <h2><strong>Type: </strong> {workout.type}</h2>
      <h2><strong>Level: </strong>{workout.level}</h2>
      <h2><strong>Duration:</strong> {workout.duration}</h2>
      <h2><strong>Per Week: </strong> {workout.perweek}</h2>
      <h2><strong>Time: </strong> {workout.time}</h2>
      <h2><strong>Equipment:</strong> {workout.equipment}</h2>
      <h2><strong>Gender: </strong> {workout.gender}</h2>
      <p>{workout.description1}</p>
      <p>{workout.description2}</p>
      <p>{workout.description3}</p>
      <h2 style={{fontWeight:'bold'}}>{workout.nutrition}</h2>
      <p>{workout.nutrition1}</p>
      <p>{workout.nutrition2}</p>
      <img src={workout.img1} alt="Nutrition" style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }} />
      <h2 style={{fontWeight:'bold'}}>{workout.supplements}</h2>
      <p>{workout.s1}</p>
      <p>{workout.s2}</p>
      <p>{workout.s3}</p>
      <p>{workout.s4}</p>
      <p>{workout.s5}</p>
      <img src={workout.img2} alt="Supplements" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
      <h2 style={{fontWeight:'bold'}}>{workout.zone2}</h2>
      <p>{workout.z1}</p>
      <p>{workout.z2}</p>
      <p>{workout.z3}</p>
      <p>{workout.z4}</p>
      <p>{workout.z5}</p>
      <p>{workout.z6}</p>
      <h2 style={{fontWeight:'bold'}}>{workout.stitle}</h2>
      {[workout.day1, workout.day2, workout.day3, workout.day4, workout.day5].map((day, index) => (
        <div key={index}>
          <br/>
          <h3>{day}</h3>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <HeaderTableCell>Exercise</HeaderTableCell>
                  <HeaderTableCell>Sets</HeaderTableCell>
                  <HeaderTableCell>Reps</HeaderTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {workout[`exercises${index === 0 ? '' : index}`]?.map((exercise, i) => (
                  <TableRow key={i}>
                    <ContentTableCell>{exercise.Exercise}</ContentTableCell>
                    <ContentTableCell>{exercise.Sets}</ContentTableCell>
                    <ContentTableCell>{exercise.Reps}</ContentTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ))}
      
      <h2 style={{fontWeight:'bold'}}>{workout.conclusion}</h2>
      <p>{workout.c1}</p>
      <p>{workout.c2}</p>
    </div>
  );
};

export default PersonalWorkout;