import React from 'react';

const Home = () => {
    return (
        <div className="container" style={{ minHeight: '60vh' }}>
            <div className="home-info flex-item">
                <h2>Hey! I'm Katie</h2>
                <p className="home-description"> I am a full stack web developer and former elementary school teacher with a passion for building creative, attractive and responsive web applications.</p>
                <a href='Kathleen-Wilson-Resume_2022(10).pdf' download='Kathleen-Wilson-Resume_2022(10).pdf'><button className="card-button">Download Resume</button></a>
                <a href='/#about'><button className="card-button" type='submit'>More About Me</button></a>
            </div>
        </div>
    )
}

export default Home