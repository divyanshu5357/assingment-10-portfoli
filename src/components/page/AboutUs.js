import React from 'react'
import "./about.css"

const AboutUs = () => {
  return (
    <div className="about-page">
    <div className="person-section">
      <img src="https://library.ascd.org/m/f3244fdde05d428/webimage-PLS_Banner_1000x1000.png" alt="Person" className="person-image" />
      <h1 className="person-name">Divyanshu Pratap Singh</h1>
    </div>
    <div className="card-section">
      <div className="card">
        <h2 className="card-title">Skills</h2>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod enim nec justo dictum, vel sollicitudin orci bibendum.</p>
      </div>
      <div className="card">
        <h2 className="card-title">Hobbies</h2>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod enim nec justo dictum, vel sollicitudin orci bibendum.</p>
      </div>
      <div className="card">
        <h2 className="card-title">Experience</h2>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod enim nec justo dictum, vel sollicitudin orci bibendum.</p>
      </div>
    </div>
  </div>
  )
}

export default AboutUs