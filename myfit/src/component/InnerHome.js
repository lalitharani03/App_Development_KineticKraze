import React,{useState} from "react";
import './innerhome.css';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
import Layout from "../shop/Layout";
import Image from "../assets/images/121345.jpg";
// import Exercises from "../workout/Exercises"
// import Workout from "../workout/Workout";
//  const Item = styled(Paper)(({ theme }) => ({
//               backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//               ...theme.typography.body2,
//               padding: theme.spacing(1),
//               textAlign: 'center',
//               color: theme.palette.text.secondary,
//             }));
const InnerHome = () =>{ 

    
    return(
        <Layout>
       
        <div className="container">
            <div className="homeText">
                <h4 id="h4fgbm">Feel Great.<br></br>Body and Mind.</h4>
                <p id="para">Choose from hundreds of workouts, healthy recipes, relaxing meditations, and expert articles, for a whole body and mind approach to feeling great.</p>
            </div>
            <div className="picture">        
                <img src={Image} alt="fit" className="fullWidthImg"/>
            </div>    
        </div>
       

    <div class="grid-container">
        <div class="grid-item">
             <h2>WORKOUTS</h2>
             <p>Exercise with certified personal trainers whether you're at home or on the road.</p>
             <div className="unit-link"><a href="/workout"><button>Workout Now</button></a></div>
        </div>
        <div class="grid-item">
             <h2>PURCHASE</h2>
             <p>Unlock Your Potential: Invest in Your Fitness Journey Today!</p>
             <div className="unit-link"><a href="/purchase"><button>Purchase Now</button></a></div>
        </div>
        <div class="grid-item">
             <h2>DIET PLAN</h2>
             <p>Fuel Your Body Right: Transform Your Health with Our Diet Plan!</p>
             <div className="unit-link"><a href="/dietplan"><button>A Plan for You</button></a></div>
        </div>
    </div>
          

        </Layout>
    )
}
export default InnerHome;