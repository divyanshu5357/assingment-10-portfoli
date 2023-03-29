import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"
const Home = () => {
  return (
    <div className="home-page">
    <h1 className="title">Welcome to My Portfolio!</h1>
    <p className="description">Check out my latest projects below:</p>
    <ul className="project-list">
      <li>
        <Link to="/project1">Project 1</Link>
      </li>
      <li>
        <Link to="/project2">Project 2</Link>
      </li>
      <li>
        <Link to="/project3">Project 3</Link>
      </li>
    </ul>
    <p className="more-info">Learn more about me:</p>
    <ul className="profile-links">
      <li>
        <Link to="/about">About Me</Link>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/divyanshu-pratap-singh-506172199/">LinkedIn</a>
      </li>
      <li>
        <a href="https://github.com/divyanshu5357">GitHub</a>
      </li>
    </ul>
  </div>
  )
}

export default Home