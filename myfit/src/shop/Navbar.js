import React from 'react';
import './Navbarcss.css';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
export default function Navbar({cartCount,cartTotal}){
    return(
        <nav className="navbar" style={{padding:'1.5rem'}}>
            <div className="navbar-logo">
                <a href="/"><img src={logo} alt='logo' height='55px' width='80px'/></a>
                <h4 style={{fontFamily:'cursive',fontWeight:'bold'}}>KineticKraze</h4>
            </div>
            <ul className="navbar-link">
                <li><a href="/workout" style={{fontFamily:'cursive'}}> Workout</a></li>
                <li><a href="/equipment" style={{fontFamily:'cursive'}}>Equipments</a></li>
                <li><a href="/supplements" style={{fontFamily:'cursive'}}>Supplements</a></li>
                <li><a href="/dietplan" style={{fontFamily:'cursive'}}> Diet Plan</a></li>
                <li><a href='/gyms' style={{fontFamily:'cursive'}}>Gyms Nearby</a></li>
                <li>
                <Link to="/cart"> 
          <div className='cart-icon'>
            <LocalMallOutlinedIcon className='shoppingbag-icon' />
            {cartCount > 0 && (
              <span className='cart-count'>{cartCount}</span>
            )}
          </div>
        </Link>
                </li>
            </ul>
        </nav>
  );
}