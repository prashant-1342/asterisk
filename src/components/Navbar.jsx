// Navbar.jsx
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ searchQuery, setSearchQuery }) => {
  useEffect(() => {
    const handleLinkClick = () => {
      const navbar = document.getElementById('navbarTogglerDemo03');
      if (navbar && navbar.classList.contains('show')) {
        const collapse = new window.bootstrap.Collapse(navbar, {
          toggle: true
        });
      }
    };

    const links = document.querySelectorAll('.nav-link, .dropdown-item');
    links.forEach(link => link.addEventListener('click', handleLinkClick));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleLinkClick));
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to='/' className="navbar-brand" ><img
            onClick={() => setSearchQuery('')} src="/Screenshot 2025-06-04 011825-Photoroom.png" height={45} /></Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"

                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Explore
                </a>
                <ul className="explore-menu dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                  <li><Link className="dropdown-item" to="/explore/popular"  >Popular</Link></li>
                  <li><Link className="dropdown-item" to="/explore/nowplaying" >Now Playing</Link></li>
                  <li><Link className="dropdown-item" to="/explore/upcoming" >Upcoming</Link></li>
                  <li><Link className="dropdown-item" to="/explore/toprated" >Top Rated</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Genres
                </a>
                <ul className="genredropdown dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                  <li><Link className="dropdown-item" to="/genre/action">Action</Link></li>
                  <li><Link className="dropdown-item" to="/genre/adventure">Adventure</Link></li>
                  <li><Link className="dropdown-item" to="/genre/animation">Animation</Link></li>
                  <li><Link className="dropdown-item" to="/genre/comedy">Comedy</Link></li>
                  <li><Link className="dropdown-item" to="/genre/crime">Crime</Link></li>
                  <li><Link className="dropdown-item" to="/genre/documentary">Documentary</Link></li>
                  <li><Link className="dropdown-item" to="/genre/drama">Drama</Link></li>
                  <li><Link className="dropdown-item" to="/genre/family">Family</Link></li>
                  <li><Link className="dropdown-item" to="/genre/fantasy">Fantasy</Link></li>
                  <li><Link className="dropdown-item" to="/genre/history">History</Link></li>
                  <li><Link className="dropdown-item" to="/genre/horror">Horror</Link></li>
                  <li><Link className="dropdown-item" to="/genre/music">Music</Link></li>
                  <li><Link className="dropdown-item" to="/genre/mystery">Mystery</Link></li>
                  <li><Link className="dropdown-item" to="/genre/romance">Romance</Link></li>
                  <li><Link className="dropdown-item" to="/genre/sciencefiction">Science Fiction</Link></li>
                  <li><Link className="dropdown-item" to="/genre/thriller">Thriller</Link></li>
                  <li><Link className="dropdown-item" to="/genre/tvmovie">TV Movie</Link></li>
                </ul>
              </li>



            </ul>
            <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-control bg-dark text-white me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => setSearchQuery('')}
              >
                Clear
              </button>

            </form>

          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
