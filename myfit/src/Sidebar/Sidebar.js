import React from 'react';
import BodyFocus from './BodyFocus/BodyFocus';
import Equipment from './Equipment/Equipment';
import "./Sidebar.css";

const Sidebar = ({ handleBodyFocusChange, handleEquipmentChange }) => {
  return (
    <>
      <section className='sidebar'>
        <div>
          <h1></h1>
        </div>
        <BodyFocus handleChange={handleBodyFocusChange} />
        <Equipment handleChange={handleEquipmentChange} />
      </section>
    </>
  );
}

export default Sidebar;