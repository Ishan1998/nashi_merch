import React from 'react'
import logo1 from '../assets/img/logo1.png'
import { Link } from "react-router-dom"

const navDetails = () => {
  return (
    <>
            <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>E-commerce Webapp</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.2/css/all.css" integrity="sha384-fZCoUih8XsaUZnNDOiLqnby1tMJ0sE7oBbNk2Xxf5x8Z4SvNQ9j83vFMa/erbVrV" crossOrigin="anonymous" />
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 fixed-top">
          <div className="container">
            <img src={logo1} alt="" />
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))">
              <svg width={50} height={50} viewBox="0 0 100 100">
                <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                <path className="line line2" d="M 20,50 H 80" />
                <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
              </svg>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <Link to="/">
                <li className="nav-item">
                  <a className="nav-link">Home</a>
                </li>
                </Link>
                <Link to="/shop">
                <li className="nav-item">
                  <a className="nav-link">Shop</a>
                </li>
                </Link>

                
                <Link to="/blog">
                <li className="nav-item">
                  <a className="nav-link">Blog</a>
                </li>
                </Link>

                <Link to="">
                <li className="nav-item">
                  <a className="nav-link" >About</a>
                </li>
                </Link>

                <Link to="">
                <li className="nav-item">
                  <a className="nav-link" >Contact Us</a>
                </li>
                </Link>


                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fa-solid fa-magnifying-glass" /></a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fa-solid fa-bag-shopping" /></a>
                </li>
              </ul></div>
          </div>
        </nav>
    </>
  )
}

export default navDetails