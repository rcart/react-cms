import React from 'react';

class Hero extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="hero">
          <img className="hero-pict" src="../assets/imgs/homer-hero.jpg" alt="Smart Homer Simpson" />
          <h1 className="hero-title">Ronny Cardona</h1>
          <h4 className="hero-twitter">Frontend Web Developer</h4>
          <div className="hero-social">
            <a href="https://github.com/rcart" target="_blank">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/rcart19" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/rjcardona" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
