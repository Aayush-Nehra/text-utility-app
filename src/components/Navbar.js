import "../App.css";
import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

export default function Navbar(props) {

  let handleChange = (e)=>{
    const target = e.target;
    if (target.checked) {
      props.websiteColorMode(target.value);
    }
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} data-bs-theme={props.mode==='dark'?'dark':''}>
      <div className="container-fluid" >
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className='form-check'>
            Website Mode
          </div>
          <div className="form-check">
            <input type="radio" value="light" name="websiteColorMode" defaultChecked onChange={handleChange} /> Light
          </div>
          <div className="form-check">
            <input type="radio" value="dark" name="websiteColorMode" onChange={handleChange} /> Dark
          </div>
          <div className="form-check">
            <input type="radio" value="eco" name="websiteColorMode" onChange={handleChange} /> Eco
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
}

Navbar.defaultProps = {
  title: "Text Utils",
}