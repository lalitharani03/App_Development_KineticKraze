// import React,{useState} from 'react'
// import { BrowserRouter as Router,Route,Routes,useLocation } from 'react-router-dom';
// import Navigation from './Navigation/Nav'
// import Recommended from './Recommended/Recommended';
// import Sidebar from './Sidebar/Sidebar';
// import workouts from './db/data.'
// import './index.css'
// import WorkoutDetail from './WorkoutDetails'
// import Card from './components/Card';
// import Workouts from './Workouts/Workouts';


// const Workout = () => {

//   const [selectedBodyFocus, setSelectedBodyFocus] = useState("");
//   const [selectedEquipment, setSelectedEquipment] = useState("");
//   const [query, setQuery] = useState("");

//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleBodyFocusChange = (event) => {
//     setSelectedBodyFocus(event.target.value);
//   };

//   const handleEquipmentChange = (event) => {
//     setSelectedEquipment(event.target.value);
//   };

//   const handleClick = (event) => {
//     setSelectedBodyFocus(event.target.value);
//   };

//   const filteredItems = workouts.filter(
//     (workout) =>
//       workout.title.toLowerCase().includes(query.toLowerCase()) &&
//       (selectedBodyFocus ? workout.bodyfoucs === selectedBodyFocus : true) &&
//       (selectedEquipment ? workout.equipment === selectedEquipment : true)
//   );

//   const result = filteredItems.map(({ img, title }) => (
//     <Card key={title} img={img} title={title} />
//   ));

//   return (
//     <Router>
//       <div className="app-container">
//         <ConditionalSidebar>
//           <Sidebar handleBodyFocusChange={handleBodyFocusChange} handleEquipmentChange={handleEquipmentChange} />
//         </ConditionalSidebar>
//         <div className="main-content">
//           <ConditionalHeader>
//             <Navigation query={query} handleInputChange={handleInputChange} />
//             <Recommended handleClick={handleClick} />
//           </ConditionalHeader>
//           <Workouts/>
//           <WorkoutDetail/>
//           <Routes>
//             <Route path="/" element={<Workouts result={result} />} />
//             <Route path="/workout/:title" element={<WorkoutDetail workouts={workouts} />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// function ConditionalSidebar({ children }) {
//   const location = useLocation();
//   return location.pathname === '/' ? <div className="sidebar">{children}</div> : null;
// }

// function ConditionalHeader({ children }) {
//   const location = useLocation();
//   return location.pathname === '/' ? <div className="header">{children}</div> : null;
// }

// export default Workout