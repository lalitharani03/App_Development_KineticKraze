import React from "react";
import { Link } from "react-router-dom";

const Card = ({ img, title }) => {
  return (
    <Link to={`/workout/${title}`} style={{textDecoration:'none'}}>
      <section className="card" style={{border:'2px solid lightgray'}}>
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title" style={{fontSize:'25px'}}>{title}</h3>
        </div>
      </section>
    </Link>
  );
};

export default Card;