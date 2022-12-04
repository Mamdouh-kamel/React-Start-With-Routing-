import React, { Component } from 'react'
import Styles from './Navbar.module.css'
import {NavLink} from "react-router-dom"
export default class Navbar extends Component {
  render() {
    return (
      <><nav className= {`navbar navbar-expand-lg navbar-dark py-4 ${Styles.fixed_top}`}>
      <div className="container">
        <NavLink className={`navbar-brand text-uppercase fw-bold fs-3 px-3 ${Styles.start}`} to="/">start react</NavLink>
        <button className={`navbar-toggler ${Styles.button}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        menu <span className={`navbar-toggler-icon`} ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <NavLink className={`nav-link ${Styles.hvr}`} to="/Portfolio">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${Styles.hvr}`} to="/About">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${Styles.hvr}`} to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav></>
    )
  }
}
