import React from 'react';

const styles = {
    navActive: {
        backgroundColor:'#935c68ff',
        color: 'white'
        }
}

const NavBar = ({ currentPage, setCurrentPage }) => {
console.log(currentPage)
    return (
        <ul className="nav justify-content-end navigation">
            <li className="nav-item">
                <a className={currentPage === 'home'? 'nav-link active clicked':"nav-link"}  style={{color: 'rgb(25, 79, 64)'}}  aria-current="page" href='#home' onClick={ () =>setCurrentPage('home') }>Home</a>
            </li>
            <li className="nav-item">
                <a className={currentPage === 'about'? 'nav-link active clicked':"nav-link"} style={{color: 'rgb(25, 79, 64)'}} aria-current="page" href="#about" onClick={() => setCurrentPage('about')}>About Me</a>
            </li>
            <li className="nav-item">
                <a className={currentPage === 'contact'? 'nav-link active clicked':"nav-link"} style={{color: 'rgb(25, 79, 64)'}} aria-current="page" href="#contact" onClick={() => setCurrentPage('contact')}>Contact Me</a>
            </li>
            <li className="nav-item">
                <a className={currentPage === 'projects'? 'nav-link active clicked':"nav-link"} style={{color: 'rgb(25, 79, 64)'}} aria-current="page" href="#projects" onClick={() => setCurrentPage('projects')}>Projects</a>
            </li>
        </ul>
    )
}

export default NavBar;