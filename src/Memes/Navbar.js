import React from 'react'
import { Link } from 'react-router-dom';
import Doggy from './Doggy Meme.png'

export const Navbar = (props) => {
  return (
    <>
      <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
        <Link className="navbar-brand" to="/">
          <img src={Doggy} alt="dg" width="30" height="30" />
          {props.title}
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/note">Important Note</Link>
            </li>
          </ul>
          <div className="custom-control custom-switch">
            <li>
              <input type="checkbox" onClick={props.toggleMode} className="custom-control-input" id="customSwitch1" />
              <label className={`custom-control-label light text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="customSwitch1">Toggle To Change Mode</label>
            </li>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;