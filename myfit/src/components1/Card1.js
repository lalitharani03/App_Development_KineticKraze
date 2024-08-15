import React from 'react'
import { Link } from 'react-router-dom'

const Card1 = ({ image, title }) => {
  return (
    <Link to={`/workout/${cardTitle}`} style={{ textDecoration: 'none', color: '#a35a97' }}>
      <section className="workout-card">
        <img src={imageSource} alt={cardTitle} className="workout-card-img" />
        <div className="workout-card-details">
          <h3 className="workout-card-title">{cardTitle}</h3>
        </div>
      </section>
    </Link>
  )
}

export default Card1