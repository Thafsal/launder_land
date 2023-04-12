import React from 'react'
import { Link } from 'react-router-dom'
import imge from '../../images/launder.jpg'

const Login = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          
          <h1>Launder Land</h1>
          <p>
            The <i>Land </i>where your clothes feel more shine
          </p>
        </div>
        <div className="main__header-right">
          <div className="main__header-image">
            <img src={imge} alt="Header-logo" />
          </div>
          <h4>New to <i>Launder Land</i></h4>
          <Link to='/create'>Crete an account</Link >
          <h4>Already have an account .?</h4>
          <Link to='/UserLogin'>Login</Link >
        </div>
      </div>
    </header>
  )
}

export default Login