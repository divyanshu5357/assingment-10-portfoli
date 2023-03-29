import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import { FaUserAlt } from "react-icons/fa";


const Navbar = () => {
  const data =[
    { 
      id:1,
      name:"home",
      path:"/"
    },
    {
      id:2,
      name:"about us",
      path:"/about"
    },
    {
      id:3,
      name:"contract us",
      path:"/contract"
    },
    {
      id:4,
      name: <FaUserAlt />,
      path:"/login"
    }
  ]
  return (
  <Fragment>
  <header className='navbar'>
    <nav >
    <ul>
      <h3 className='heading'>UI / UX DESIGN</h3>
     
      {data.map((item)=>{
        
        return  <li key={item.id}>
        <NavLink to={item.path} className="text" >{item.name}

        </NavLink>
    </li>
      })}
       
    </ul>
    </nav>
  </header>
  </Fragment>
  )
}

export default Navbar