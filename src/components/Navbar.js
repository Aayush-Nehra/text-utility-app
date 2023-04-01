import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {

  const [colorMode, changeColorMode] = useState('light');
  let handleChange = (e)=>{
    const target = e.target;
    if (target.checked) {
      changeColorMode(target.value);
      props.websiteColorMode(target.value);
      console.log(target.value)
    }
  }

  return (
    <nav className="navbar navbar-expand-lg" style={props.mode.navbarStyle}>
      <div className="container-fluid" >
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
          </ul>
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