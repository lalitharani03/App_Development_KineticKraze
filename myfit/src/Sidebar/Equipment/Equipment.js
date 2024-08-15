import React from 'react';
import Input from "../../components/Input";
import './Equipment.css';

function Equipment({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title color-title">Equipments</h2>
      <div>
        <Input
          handleChange={handleChange}
          value=""
          title="All"
          name="equipment"
        />
        <Input
          handleChange={handleChange}
          value="No Equipment"
          title="No Equipment"
          name="equipment"
        />
        <Input
          handleChange={handleChange}
          value="Treadmill"
          title="Treadmill"
          name="equipment"
        />
        <Input
          handleChange={handleChange}
          value="Dumbbell"
          title="Dumbbell"
          name="equipment"
        />
        <Input
          handleChange={handleChange}
          value="Mat"
          title="Mat"
          name="equipment"
        />
      </div>
    </div>
  );
}

export default Equipment;