import React from 'react';
import NavBar from './Navigation';

const Header = ({ setCurrentPage }) => {
    return (
        <header>
            <div className='container'>
                <h1 style= {{paddingTop: '20px'}}>Katie Wilson Portfolio</h1>
                <NavBar setCurrentPage={setCurrentPage} id="navigation" className="flex-item nav-links-container" />
            </div>
        </header>
    )
}

export default Header;