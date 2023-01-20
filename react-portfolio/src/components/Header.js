import React from 'react';
import NavBar from './Navigation';

const Header = ({ currentPage, setCurrentPage }) => {
    return (
        <header>
            <div className='container'>
                <h1 className= 'portfolio-title'style= {{paddingTop: '20px'}}>Katie Wilson Portfolio</h1>
                <NavBar setCurrentPage={setCurrentPage} currentPage={currentPage} id="navigation" className="flex-item nav-links-container" />
            </div>
        </header>
    )
}

export default Header;