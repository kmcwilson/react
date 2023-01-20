import React from 'react';

const styles = {
  footer: {
    position:'relative',
    bottom: '0px',
    left: '0px',
    width: '100%',
    height: '150px',
    backgroundColor: 'rgb(25, 79, 64)',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Playfair', 
  }
}

const Footer = () => {
  return (
    <div>
    <footer style= {styles.footer}>
      <div className="container text-center mb-5">
        <h4 style={{paddingTop: '50px'}}>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          by the Tech Thoughts team.
        </h4>
      </div>
    </footer>
    </div>
  );
};

export default Footer;