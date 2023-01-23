import React from 'react';

const styles = {
  footer: {
    position:'relative',
    bottom: '0px',
    left: '0px',
    width: '100%',
    height: '150px',
    backgroundColor: 'rgb(236, 240, 225)',
    color: 'rgb(25, 79, 64)',
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
          by Katie Wilson
        </h4>
      </div>
    </footer>
    </div>
  );
};

export default Footer;