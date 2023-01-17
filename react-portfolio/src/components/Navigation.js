import React from 'react';


const NavBar = ({ currentPage, setCurrentPage }) => {

    return (
        <ul className="nav nav-pills justify-content-end">
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href='#home' onClick={() => setCurrentPage('home')}>Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#about" onClick={() => setCurrentPage('about')}>About Me</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#contact" onClick={() => setCurrentPage('contact')}>Contact Me</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#projects" onClick={() => setCurrentPage('projects')}>Projects</a>
            </li>
        </ul>
    )
}

export default NavBar;