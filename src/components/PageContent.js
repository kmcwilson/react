import React from 'react';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';


export default function PageContent ({currentPage}) {
    function renderPage () {
    switch (currentPage){
        case "home": return <Home/>
        case "about": return <AboutMe/>
        case "contact": return <Contact/>
        case "projects": return <Projects/>
        default: return <Home/>
    }
    }
    return(
        <>
        <h2 className="page-header"style={{textTransform:"capitalize", textAlign: 'center', paddingBottom: '50px'}}>{currentPage}</h2>
        <div className='container'>{renderPage()}</div>
        </>
    )

}