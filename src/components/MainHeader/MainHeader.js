import React from 'react'
import { Link } from 'react-router-dom'
import './MainHeader.css';


const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
        <div className="main__header-circle"></div>
        <h2 className='button-home'>WASH YOUR TROUBLES AWAY</h2>
        <Link to='/about' className='btn sm button-home'>Learn More...</Link>
        </div>
        <div className="main__header-right">
        <div className="main__header-circle"></div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader