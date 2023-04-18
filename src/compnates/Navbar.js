import React from 'react'
import PropTypes from 'prop-types' //impt


export default function Navbar(props) {
  return (
    <div className="container-fliud">
    <div className="container">
      <div className="row">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
<a className="navbar-brand" href="#">{props.title}</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">About us</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">contact</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">map</a>
    </li>
    
    
  </ul>
  <form className="d-flex" role="search">
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-success" type="submit">Search</button>
  </form>
</div>
</div>
</nav>


      </div>
    </div>
  </div>
  )
}
Navbar.propTypes = {
    title:PropTypes.number .isRequired,
            home:PropTypes.string}  //pts

//defaullt props
Navbar.defaultProps = {
    home: 'set tilte here'
  }
