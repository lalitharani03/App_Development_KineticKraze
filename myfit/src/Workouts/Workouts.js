import React from 'react'
import "./Workouts.css"
import Card from '../components/Card'

const Workouts = ({result}) => {
  return (
    <>
      <section className="card-container" >{result}</section>
    </>
  )
}

export default Workouts