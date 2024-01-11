import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div>
     

  <nav  id="header" className=" navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">LONELY</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Resume</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Service</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">portfolio</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">Drop Down1</Link></li>
            <li><Link className="dropdown-item" href="#">Drop Down2</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Contact</Link>
        </li>
        
      </ul>
      
      
      
    </div>
  </div>
</nav>


    </div>
  )
}
