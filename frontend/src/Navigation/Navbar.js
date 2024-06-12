import React from "react";
import AAS from "../images/AAS.png"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src= {AAS}
            alt="Logo"
            width={30}
            height={24}
            className="d-inline-block align-text-top"
          />
          AllAboutSoccer
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="{{url_for('leagues')}}" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Leagues</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/leagues">
                Leagues
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/teams/page/1">
                Teams
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/players/page/1">
                Players
              </a>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  )
}
export default Navbar