import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './component/Home';
import AboutPage from './component/About';
import PositivePointsPage from './component/Whyus';
import Login from './component/Login';
import Chatbot from './component/Chatbot';
import 'bootstrap/dist/css/bootstrap.min.css';
import MarathonForm from './component/Marathon';
import SearchEvents from './component/SearchEvents';
import InnerHome from './component/InnerHome';
import Diet from './component/Diet';
import Payment from './shop/Payment';
import CustomerForm from './component/Register';
import Registration from './component/Registration';
import Profile from './Profile/Profile';
import SupplementList from './shop/SupplementList';
import SupplementDetails from './shop/SupplementDetails';
import ProductList from './shop/ProductList';
import ProductDetails from './shop/ProductDetails';
import Cart from './shop/Cart';
import { AddressProvider } from './shop/AddressContext';
import ShippingAddress from './shop/ShippingAddress';
import Navigation from './Navigation/Nav';
import Workouts from './Workouts/Workouts';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import workouts from './db/data.';
import WorkoutDetail from './WorkoutDetails';
import Card from './components/Card';
import { useState } from 'react';
import Plan from './PlanningPage/Plan';
import PersonalWorkout from './PersonalWorkout';
import GymMap from './Map/GymMap';
import TrackOrder from './shop/TrackOrder';
import OrderTracking from './shop/TrackOrder';
import OrderConfirmation from './shop/OrderConfirmation';

const workoutData = [
  {
    goal: 'Weight Loss',
    title: 'Upper Body Strength',
    img: 'image-url.jpg',
    summary: 'A great workout for building upper body strength.',
    instructions: ['Warm-up for 5 minutes.', 'Do 4 sets of each exercise.', 'Cool down and stretch.'],
    exercises: [
      { name: 'Bench Press', sets: 4, reps: 8 },
      { name: 'Pull-ups', sets: 4, reps: 10 },
      // More exercises...
    ],
  },
];

function App() {
  const [selectedBodyFocus, setSelectedBodyFocus] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState("");
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleBodyFocusChange = (event) => {
    setSelectedBodyFocus(event.target.value);
  };

  const handleEquipmentChange = (event) => {
    setSelectedEquipment(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedBodyFocus(event.target.value);
  };

  const filteredItems = workouts.filter(
    (workout) =>
      workout.title.toLowerCase().includes(query.toLowerCase()) &&
      (selectedBodyFocus ? workout.bodyfoucs === selectedBodyFocus : true) &&
      (selectedEquipment ? workout.equipment === selectedEquipment : true)
  );

  const result = filteredItems.map(({ img, title }) => (
    <Card key={title} img={img} title={title} />
  ));

  const gyms = [
    // { name: 'The Combat Academy', lat: 11.0168, lng: 76.9558, address: 'Race Course Road, Coimbatore, Tamil Nadu 641018' },
    { name: 'Gold\'s Gym Coimbatore', lat: 11.004556, lng: 76.966563, address: 'Avinashi Road, Coimbatore, Tamil Nadu 641018' },
    { name: 'Body Fuel Station Gym', lat: 11.029257, lng: 76.984657, address: 'RS Puram, Coimbatore, Tamil Nadu 641002' },
    { name: 'Anytime Fitness Coimbatore', lat: 11.013390, lng: 76.961200, address: 'Avinashi Road, Coimbatore, Tamil Nadu 641018' },
    { name: 'Talwalkars Gym Coimbatore', lat: 11.010680, lng: 76.961920, address: 'NSR Road, Saibaba Colony, Coimbatore, Tamil Nadu 641011' }
  ];

  return (
    <BrowserRouter>
      <AddressProvider>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<InnerHome />} />
          <Route exact path='/dietplan' element={<Diet />} />
          <Route exact path='/register' element={<CustomerForm />} />
          <Route exact path='/about-us' element={<AboutPage />} />
          <Route exact path='/why-us' element={<PositivePointsPage />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/chatbot' element={<Chatbot />} />
          <Route exact path='/payment' element={<Payment />} />
          <Route exact path='/marathon' element={<MarathonForm />} />
          <Route exact path='/searchevents' element={<SearchEvents />} />
          <Route exact path='/gyms' element={<GymMap gyms={gyms}/>}/>
          <Route exact path='/registration' element={<Registration />} />
          <Route exact path='/profile/:userId' element={<Profile />} />
          <Route path="/planning/:userId" element={<Plan />} />
          <Route path="/order/:orderId" element={<OrderConfirmation />} />
          <Route exact path='/workout' element={
            <div className="app-container">
              <ConditionalSidebar>
                <Sidebar handleBodyFocusChange={handleBodyFocusChange} handleEquipmentChange={handleEquipmentChange} />
              </ConditionalSidebar>
              <div className="main-content">
                <ConditionalHeader>
                  <Navigation query={query} handleInputChange={handleInputChange} />
                  <Recommended handleClick={handleClick} />
                </ConditionalHeader>
                <Routes>
                  <Route path="/" element={<Workouts result={result} />} />

                </Routes>
              </div>
            </div>
          }/>
           <Route path="/workout/:title" element={<WorkoutDetail workouts={workouts} />} />
          <Route exact path='/supplements' element={<SupplementList />} />
          <Route exact path='/equipment' element={<ProductList />} />
          <Route exact path='/supplement/:id' element={<SupplementDetails />} />
          <Route exact path='/product/:id' element={<ProductDetails />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/shipping' element={<ShippingAddress />} />
          <Route path="/workouts/:id" element={<PersonalWorkout workouts={workoutData} />} />
        </Routes>
      </AddressProvider>
    </BrowserRouter>
  );
}

function ConditionalSidebar({ children }) {
  const location = useLocation();
  return location.pathname === '/workout' ? <div className="sidebar">{children}</div> : null;
}

function ConditionalHeader({ children }) {
  const location = useLocation();
  return location.pathname === '/workout' ? <div className="header">{children}</div> : null;
}
export default App;