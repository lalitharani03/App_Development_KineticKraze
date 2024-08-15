import React from 'react';
import Input from "../../components/Input";
import './BodyFocus.css';

function BodyFocus({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">BodyFocus</h2>
      <div>
        <Input
          handleChange={handleChange}
          value=""
          title="All"
          name="bodyFocus"
        />
        <Input
          handleChange={handleChange}
          value="Upper Body"
          title="Upper Body"
          name="bodyFocus"
        />
        <Input
          handleChange={handleChange}
          value="Lower Body"
          title="Lower Body"
          name="bodyFocus"
        />
        <Input
          handleChange={handleChange}
          value="Core"
          title="Core"
          name="bodyFocus"
        />
        <Input
          handleChange={handleChange}
          value="Full Body"
          title="Full Body"
          name="bodyFocus"
        />
      </div>
    </div>
  );
}

export default BodyFocus;